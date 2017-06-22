import React, {Component, PropTypes} from 'react'
import SocialMedia from './SocialMedia'

const STYLES = {
  'mcForm': {
    'padding': '5px',
    'backgroundColor': '#09153b',
    'opacity': '.75',
    'color': 'white',
    'width': '95%',
    'marginTop': '10px',
    'marginLeft': '2%',
    'position': 'fixed',
    'textAlign': 'center'
    
  },
  'mcEmbedSignupScroll': {
    'display': 'inline'
  },
  'validate': {
    'display': 'inline',
    'float': 'right'
  },
  'mcFormLabelWrap': {
    'display': 'inline-block'
  },
  'mcFormLabel': {
    'fontSize': '24px',
    'marginRight': '20px',
    'verticalAlign': 'middle',
    'color': 'red'
  },
  'input': {
    'display': 'inline',
    'marginLeft': '5px'
  },
  'requiredEmail': {
    'height': '15px',
    'width': '300px',
    'padding': '10px',
    'backgroundColor': 'rgb(232, 171, 53)',
    'color': '#09153b',
    'border': 'none',
    'borderRadius': '3px',
  },
  'mceButton': {
    'backgroundColor': 'white',
    'color': '#142c74',
    'padding': '8px',
    'borderWidth': '2px',
    'borderStyle': 'solid',
    'borderColor': '#142c74',
    'borderRadius': '5px',
    'fontSize': '10pt',
    'marginRight': '20px'
  },
  'mceSpecial': {
    'position': 'absolute',
    'left': '-5000px',
    'ariaHidden': 'true'
  }
}
export default class MediaForm extends Component {
  render() {
      return(
        <div className="mc-form" id="mc_embed_signup" style={STYLES.mcForm}>
         <form action="//healthcare4allny.us16.list-manage.com/subscribe/post?u=cb31eb89d2773d05d965b8254&amp;id=7b63ece6ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div className="mc-form-label-wrap" style={STYLES.mcFormLabelWrap}>
            <span className="mc-form-label" style={STYLES.mcFormLabel}>Get updates on the fight:</span>
            </div>
            <div id="mc_embed_signup_scroll" style={STYLES.mcEmbedSignupScroll}>    
              <input type="email" placeholder="Email Address" name="EMAIL" className="required-email" id="mce-EMAIL" style={Object.assign(STYLES.requiredEmail, STYLES.input)}/>
              <input type="submit" value="Sign-up" name="subscribe" id="mc-embedded-subscribe" className="mce-button" style={Object.assign(STYLES.mceButton, STYLES.input)}/>
          	 <div id="mce-responses" className="clear">
          		 <div className="response" id="mce-error-response" style={{display: "none"}}></div>
          		 <div className="response" id="mce-success-response" style={{display: "none"}}></div>
          	 </div>    
             <div className="mce-special" style={STYLES.mceSpecial}><input style={STYLES.input} type="text" name="b_cb31eb89d2773d05d965b8254_7b63ece6ae" tabIndex="-1" value=""/></div>
          </div>
          </form>
          <SocialMedia />
      </div>
    )
  }
}


