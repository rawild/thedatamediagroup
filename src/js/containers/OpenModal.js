import React from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.open
  }
}

let OpenModal = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => {
        dispatch(openModal)
      }}>
        Open Script
      </button>
    </div>
  )
}
OpenModal = connect(mapStateToProps)(OpenModal)

export default OpenModal