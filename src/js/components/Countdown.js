import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import milliSec from 'millisec';

const NOT_STARTED = 1;
const STARTED = 2;
const FINISHED = 3;

const STYLES = {
  'countdown': {
    'margin': 'auto',
    'textAlign': 'center',
    'fontSize': '30pt',
    'display': 'inline-block'
  },
  'time': {
    'margin': 'auto',
    'backgroundColor': '#09153b',
    'width': '80px',
    'height': '90px',
    'padding': '10px',
    'margin': '20px',
    'color': 'rgb(232, 171, 53)',
    'borderRadius': '10px',
    'display': 'inline-block'
  },
  'timeLabel': {
    'fontSize':'15pt'
  },
  'interlude1': {
    'fontSize': '25pt',
    'display': 'inline-block',
    'height': '100px',
    'paddingLeft': '10px',
    'paddingRight': '10px'
  },
  'interlude2': {
    'fontSize': '25pt',
    'display': 'inline-block',
    'padding': '20px'
  },

  'interlude3': {
    'fontSize': '80pt',
    'height': '100%',
    'marginTop': '40%'
  }
}

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 0,
      status: NOT_STARTED
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.tick();
      this.setState({status: STARTED});

      this.timer = setInterval(() => {
        this.tick();
      }, this.props.interval);
    }, this.props.startDelay);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calculateRemainingTime() {
    let now = moment().toDate();
    return moment(this.props.targetDate).diff(moment(now));
  }

  addLeadingZero(value) {
    if (value.length < 2) {
      return '0'+value 
    }
    return value
  }

  tick() {
    this.setState({remainingTime: this.calculateRemainingTime()});

    if (this.state.remainingTime <= 0) {
      this.setState({status: FINISHED});

      if (this.props.onFinished) {
        this.props.onFinished();
      }

      clearInterval(this.timer);
    }
  }

  renderRemainingTime() {
    let time = milliSec(this.state.remainingTime);
    let html = [];
    
    let timeSeparator;
    if (this.props.timeSeparator) {
      timeSeparator = this.props.timeSeparator 
    } else {
      timeSeparator = ' '
    }
    

    if (this.props.format.day) {
      let days = time.format(this.props.format.day)
      if (this.props.leadingZero) {
        days = this.addLeadingZero(days)
      }
      html.push(
        <div className="time" style={STYLES.time}>
          <span className="react-cntdwn-day" >
            {days}{timeSeparator}
            <div className="time-label" style={STYLES.timeLabel}>
              Days
            </div>
          </span>
        </div>
      );
    }

    if (this.props.format.hour) {
      let hours = time.format(this.props.format.hour)
      if (this.props.leadingZero) {
        hours = this.addLeadingZero(hours)
      }
      html.push(
        <div className="time" style={STYLES.time}>
        <span className="react-cntdwn-hour" key="hour">
          {hours}{timeSeparator}
        </span>
        <div className="time-label" style={STYLES.timeLabel}>
          Hours
        </div>
        </div>
      );
    }

    if (this.props.format.minute) {
      let minutes = time.format(this.props.format.minute)
      if (this.props.leadingZero) {
        minutes = this.addLeadingZero(minutes)
      }
      html.push(
        <div className="time" style={STYLES.time}>
        <span className="react-cntdwn-minute" key="minute">
          {minutes}{timeSeparator}
        </span>
        <div className="time-label" style={STYLES.timeLabel}>
          Minutes
        </div>
        </div>
      );
    }

    if (this.props.format.second) {
      let seconds = time.format(this.props.format.second)
      if (this.props.leadingZero) {
        seconds = this.addLeadingZero(seconds)
      }
      html.push(
        <div className="time" style={STYLES.time}>
        <span className="react-cntdwn-second" key="second">
          {seconds}
        </span>
        <div className="time-label" style={STYLES.timeLabel}>
          Seconds
        </div>
        </div>
      );
    }

    return html;
  }

  render() {
    if (this.state.status === NOT_STARTED) {
      return <span></span>;
    }
    return (
      <div className="countdown" style={STYLES.countdown}>
        <div className="interlude1" style={STYLES.interlude1}>    
          With 
        </div>
        {this.renderRemainingTime()}
        <div className="interlude1" style={STYLES.interlude1}>
            remaining in the 2017 <br/> senate Session
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  interval: PropTypes.number,
  startDelay: PropTypes.number,
  onFinished: PropTypes.func,
  format: PropTypes.object
};

Countdown.defaultProps = {
  interval: 1000,
  startDelay: 0,
  format: {
    day: 'dd',
    hour: 'hh',
    minute: 'mm',
    second: 'ss'
  }
};
