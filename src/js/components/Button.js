import React,{PropTypes, Component} from 'react'
import Radium from 'radium'
import arrow_white from '../../img/arrow_white.svg'
import arrow_blue from '../../img/arrow_blue.svg'
const STYLES = {
  'button': {
    'padding': '10px',
    'fontSize': '15pt',
    'border': 'none',
    'borderRadius': '5px',
    'marginTop': '30px',
    'transition': 'all 0.3s ease 0s',
    'opacity': '1',
    'margin': '20px',
    ':hover': {
      'opacity': '.65'
    } 
  },
  'buttonPrimary': {
    'backgroundColor': '#09153b',
    'color': 'white'
  },
  'buttonSecondary': {
    backgroundColor: 'white',
    color: '#09153b'
  },
  'buttonChildren': {
    'display': 'inline-block'
  },
  'icon': {
      'verticalAlign': 'top',
      'height': '30px',
  } 
}

class Button extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return(<button style={this.props.style? this.props.style : Object.assign(STYLES.button, 
      this.props.secondary ? STYLES.buttonSecondary : STYLES.buttonPrimary)} 
      onClick={() => {this.props.onClick()}}>
        <div style={STYLES.buttonChildren}>
          {this.props.children}
        
          <img  src={this.props.secondary ? arrow_blue: arrow_white} 
          style={this.props.iconStyle ? this.props.iconStyle : STYLES.icon}/>
        
        </div>
      </button>
    )
  }
  _goto = (url) => {
    window.open(url)
  }
}
Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.function,
  secondary: PropTypes.boolean,
  style: PropTypes.object,
  iconStyle: PropTypes.object
}
export default Radium(Button)
