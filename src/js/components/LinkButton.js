import React,{PropTypes, Component} from 'react'
import Radium from 'radium'
import arrow from '../../img/arrow_white.svg'
const STYLES = {
  'buttonPrimary': {
    'padding': '20px',
    'fontSize': '20pt',
    'backgroundColor': '#09153b',
    'color': 'white',
    'border': 'none',
    'borderRadius': '10px',
    'marginTop': '30px',
    'transition': 'all 0.3s ease 0s',
    'opacity': '1',
    'margin': '30px',
    ':hover': {
      'opacity': '.65'
    } 
  },
  'buttonChildren': {
    'display': 'inline-block'
  },
  'icon': {
      'paddingTop': '3px',
      'verticalAlign': 'top',
      'height': '30px'
  }  
}

class LinkButton extends Component {
  render(){
    return(<button className="button-primary" style={STYLES.buttonPrimary} onClick={() => {this._goto(this.props.url)}}>
        <div className="button-children" style={STYLES.buttonChildren}>
          {this.props.children}
        </div>
        <div className="button-children" style={STYLES.buttonChildren}>
          <img className="icon" src={arrow} style={STYLES.icon}/>
        </div>
      </button>
    )
  }
  _goto = (url) => {
    window.open(url)
  }
}
LinkButton.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string
}
export default Radium(LinkButton)
