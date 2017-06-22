import React, {Component, PropTypes} from 'react'
const STYLES = {
  'socialMedia': {
    'width': '218px',
    'display': 'inline',
    'margin': '10px',
    'paddingRight': '8px',
    'marginTop': '20px'
  },
  'fbLike': {
    'display': 'inline'
  }
}
export default class MediaForm extends Component {
  render() {
      return(
        <div className="social-media" style={STYLES.socialMedia}>
          <div className="fb-like" style={STYLES.fbLike} data-href="http://healthcare4allny.org" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="true">
          </div>
            <a className="twitter-share-button"  href="https://twitter.com/intent/tweet?text=1%20New%20York%20state%20senator%20stands%20between%20us%20and%20health%20care%20for%20all.%20Tell%20the%20senate%20to%20pass%20the%20#NYHealthAct%20!" data-size="large">
              Tweet</a>
        </div>
      )
  }
}

