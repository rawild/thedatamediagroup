import React, {Component, PropTypes} from 'react'


export default class Calendar extends Component {
  
  render() {
    const STYLES = {
      Calendar : {
        width: '100%',
        backgroundColor: 'rgba(224, 229, 233, 0.8)',
        paddingTop: '30px',
        paddingBottom: '30px'
      },
      embeddedCal: {
        padding: '20px'
      }
    }
    return(
      <div className="Calendar" style={STYLES.Calendar}>
        <div className="embedded-cal" style={STYLES.embeddedCal}>
          <div data-tockify-component="calendar" data-tockify-calendar="healthcare4allny"></div>
        </div>
      </div>
    )
  }
}
