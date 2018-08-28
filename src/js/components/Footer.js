import React,{Component} from 'react'
import styles from "../../styles/styles"
export default class Footer extends Component {
  render(){
    const STYLES = {
      footer: {
        marginTop: '30px',
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundColor: styles.colors.primaryPurple,
        color: 'white',
        width: '100%',
        textAlign: 'center'
        
      }

    }
    return(<div className="footer" style={STYLES.footer}>
      Questions? info(at)thedatamediagroup.com

    </div>
    )
  }
}