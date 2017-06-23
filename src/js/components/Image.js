import React,{Component, PropTypes} from 'react'

export default class Image extends Component {
  render(){
    const STYLES = {
      img: {
        width: '200px',
        margin: '40px',
      },
      container: {
        display: 'inline-block',
        width: '400px',
        height: '300px',
        textAlign: 'center'
      },
      caption: {
        color: 'black',
        fontSize: '20px',
        width: '200px'
      }
    }

    return(
      <div style={this.props.style
        ? this.props.style : STYLES.container}>
        <img style={this.props.imageStyle ? this.props.imageStyle : STYLES.img} 
          src={this.props.image} />
          <span style={this.props.captionStyle ?
            this.props.captionStyle 
            : STYLES.caption} >
            {this.props.caption ? this.props.caption : ""}
          </span>
      </div>
    )
  }
}
  Image.propTypes = {
    image: PropTypes.object.isRequired,
    caption: PropTypes.any,
    style: PropTypes.object,
    imageStyle: PropTypes.object,
    captionStyle: PropTypes.object
  }