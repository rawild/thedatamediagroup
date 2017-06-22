import React, {Component, PropTypes} from 'react';

export default class Block extends Component {

  render() {
    const STYLES = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.color ? this.props.color :'white',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 'auto',
      paddingLeft: '40px',
      paddingRight: '40px',
      textAlign: 'center',
      borderRadius: '8px',
      title : {
        'fontSize': '100pt',
        'marginTop': '50px'
      },
      subtitle : {
        'fontSize': '50pt',
        'marginTop': '20px',
        'marginBottom': '50px',
        'paddingLeft': '10px',
        'paddingRight': '10px'
      }
    }
    return(<div className="Block" style={this.props.style ?
      this.props.style : STYLES}>
      <div className="title" style={STYLES.title}>
        {this.props.title}
      </div>
      <div className="subtitle"style={STYLES.subtitle}>
        {this.props.subtitle}
      </div>
      {this.props.children}
    </div>)
  }
}
Block.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}