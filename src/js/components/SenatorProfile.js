import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
import FB from "../../img/FB-f-Logo__blue_50.png"
import Twitter from "../../img/Twitter_Logo_Blue.png"
import Button from './Button'
import { connect } from '../redux/utils'

const STYLES = {
  'target': {
    'display': 'inline-block',
    'verticalAlign': 'top'
  },
  'senatorLabel': {
    'fontSize': '30pt',
    'marginBottom': '30px'
  },
  'senator': {
    'width': '300px',
    'textAlign': 'left',
    'backgroundColor': 'rgba(224, 229, 233, 0.8)',
    'borderRadius': '15px',
    'padding': '20px',
    'borderWidth': '4px',
    'borderStyle': 'solid',
    'borderColor': '#142c74',
    'display': 'inline-block',
    'margin': '5px'
  },
  'senatorHeader': {
    'textAlign': 'center'
  },
  'senatorName': {
    'fontSize': '20pt'
  },
  'senatorPicture': {
    'borderRadius': '20px',
    'display': 'block',
    'margin': 'auto',
    'marginBottom': '30px',
    'marginTop': '10px',
    'height': '200px'
  },
  'senatorExplainer': {
    'marginBottom': '10px',
    'padding': '10px',
    'fontFamily': '\'Acme\', sans-serif'
  },
  'senatorContact': {
    'textAlign': 'center'
  },
  'senatorFb': {
    'display': 'inline'
  },
  'senatorTwitter': {
    'display': 'inline'
  },
  'senatorFbImg': {
    'height': '50px',
    'width': '50px'
  },
  'senatorFbButton': {
    'margin': '5px',
    'padding': '0',
    'border': 'none',
    'borderRadius': '5px',
    'verticalAlign': 'top'
  },
  'senatorTwitterButton': {
    'backgroundColor': 'white',
    'borderWidth': '2px',
    'borderColor': '#1DA1F2',
    'borderRadius': '10px',
    'borderStyle': 'solid',
    'width': '120px',
    'height': '60px'
    
  },
  'senatorTwitterText': {
    'fontFamily': '\'Francois One\', sans-serif',
    'fontSize': '15px',
    'verticalAlign': '90%',
    'color': '#1DA1F2'
  },
  'senatorPetitionButton': {
    'backgroundColor': 'white',
    'borderWidth': '2px',
    'borderColor': 'black',
    'borderRadius': '10px',
    'borderStyle': 'solid',
    'height': '40px',
    'verticalAlign': '60%',
    'marginLeft': '3px',
    'fontSize': '15pt',
  },
  'senatorPetitionText': {
    'fontFamily': '\'Francois One\', sans-serif',
    'color': 'black'
  },
  'senatorCallScriptButton': {
    backgroundColor: 'inherit',
    color: 'inherit',
    border: 'none',
    borderRadius: '5px',
    'height': '35px',
    margin: '0px',
    'marginLeft': '10px',
    padding: '5px',
    verticalAlign: 'middle',
    fontSize: '12pt',
    ':hover': {
      opacity: '.65',
      backgroundColor: 'white'
    } 
  },
  icon: {
      'verticalAlign': 'top',
      'height': '25px',
  },
  button: {
    ':hover': {
      'opacity': '.65'
    } 
  }
  
}
class SenatorProfile extends Component {
  constructor(props) {
    super(props)
  }
  _handleOpen(message, buttontext, style) {
    this.props.open(message,buttontext, style)
  }
  render(props) {
      var scriptHeader = () => {return(<span> {this.props.name} <br/> {this.props.phone} </span>)}
      var scriptMessage = this.props.callScript
      return(<div className="target" style={STYLES.target}>
        <div className="senator-label" style={STYLES.senatorLabel}>
          {this.props.label}
          </div>
          <div className="senator" style={STYLES.senator}>
            <div className="senator-header" style={STYLES.senatorHeader}>
              
              <div className="senator-name" style={STYLES.senatorName}>{this.props.name}</div> 
              {this.props.title ? 
                <div className="senator-title"> {this.props.title} </div> 
                : ""}              
              <div className="senator-phone">{this.props.phone}
              <div >
                <Button secondary style={STYLES.senatorCallScriptButton} iconStyle={STYLES.icon} onClick={() => {this._handleOpen(scriptHeader(), scriptMessage, 'Done')}}>
                  <span className="senator-petition-text" style={STYLES.senatorPetitionText}> Call Script </span>
                </Button>
              </div>
              
              </div>
              
            </div>
            <img className="senator-picture" style={STYLES.senatorPicture} src={this.props.img}/>
            <div className="senator-explainer" style={STYLES.senatorExplainer}>
              {this.props.explainer}
            </div>
            <div className="senator-contact" style={STYLES.senatorContact}>
              {this.props.facebook ? 
              <div className="senator-fb" style={STYLES.senatorFb}>
                <button key="senator-fb-button" style={Object.assign(STYLES.senatorFbButton, STYLES.button)} onClick={() => this._goto(this.props.facebook)}>
                <img className="senator-fb-img" style={STYLES.senatorFbImg} src={FB}/>
                </button>
              </div>
              : ""
              }
              {this.props.twitter ?
              <div className="senator-twitter" style={STYLES.senatorTwitter}>
                <button key="senator-twitter-button" style={Object.assign(STYLES.senatorTwitterButton, STYLES.button)} onClick={() => {this._goto('https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.props.twitter))}}>
                <img src={Twitter}/><span className="senator-twitter-text" style={STYLES.senatorTwitterText}> @ {this.props.him?'him':'her'} </span>
                </button>
              </div>
              : ""
              }
              {this.props.petition ?
              <div className="senator-petition" style={STYLES.senatorTwitter}>
                <button key="senator-petition-button" style={Object.assign(STYLES.senatorPetitionButton, STYLES.button)} onClick={() => {this._goto(this.props.petition)}}>
                <span className="senator-petition-text" style={STYLES.senatorPetitionText}> petition </span>
                </button>
              </div>
              : ""}
            
            </div>
          </div>
          </div>
        )
    }
    _goto = (url) => {
      window.open(url)
    }
}
SenatorProfile.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  img: PropTypes.any,
  explainer: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  him: PropTypes.boolean,
  letter: PropTypes.string,
  petition: PropTypes.string,
  callScript: PropTypes.node
}

export default connect({
  actions: ['modal:open']
})(Radium(SenatorProfile))