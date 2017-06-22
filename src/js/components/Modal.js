import React from 'react'
import Radium from 'radium'
import { connect } from '../redux/utils'
import Button from './Button'

const STYLES = {
  /* Begin Modal Info */
  modal: {
      display: 'block', /* Hidden by default */
      position: 'fixed', /* Stay in place */
      zIndex: 1, /* Sit on top */
      left: 0,
      top: 0,
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: 'rgb(0,0,0)', /* Fallback color */
      backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
  },

  /* Modal Content/Box */
  modalContent:  {
      backgroundColor: '#fefefe',
      margin: '15% auto', /* 15% from the top and centered */
      padding: '30px',
      border: '1px solid #888',
      width: '80%',
      borderRadius: '10px' /* Could be more or less, depending on screen size */
  },
  modalHeader: {
    fontSize: '15pt',
    marginBottom: '15px'
  },
  modalMessage: {
    textAlign: 'left'
  },

  /* The Close Button */
  button: {
      fontSize: '15pt',
      marginTop: '15px',
      marginBottom: '5px',
      padding: '5px'
  },
  icon: {
    display: 'none'
  }
}


class Modal extends React.Component {
  
  static propTypes = {
    modal: React.PropTypes.object,
    children: React.PropTypes.any
  }


  _handleCancel() {
    this.props.close()
  }

  render() {
    
    const buttonHandler = () => this._handleCancel()
    return (  
    <div style={Object.assign(STYLES.modal,
        this.props.modal.open ? {display: 'block'}:{display: 'none'})}>
      <div style={STYLES.modalContent}>
        <div style={STYLES.modalHeader} >
          {this.props.modal.header}
        </div>
        <div style={STYLES.modalMessage}>
          {this.props.modal.message}
          {this.props.children}
        </div>  
        <Button iconStyle={STYLES.icon} onClick={()=>buttonHandler()}>
          {this.props.modal.buttonActionText}
        </Button>
      </div>
    </div>
  )
  }
}
export default connect({
  props: ['modal'],
  actions: ['modal:close']
})(Radium(Modal))