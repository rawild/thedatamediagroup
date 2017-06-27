import React, {Component} from 'react'
import './App.css'
import Block from './Block'
import Image from './Image'
import Footer from './Footer'
import { Textfit } from 'react-textfit'

import Data from "../../img/data-pattern-2024196.png"
import Book from "../../img/book-311812.svg"
import Analysis from "../../img/facebook-analytics-2265786.png"
import styles from "../../styles/styles"
/*TODO: make fontSizes responsive and clean out errors*/
const STYLES = {
  App: {
    textAlign: 'center',
    height: '100%',
    width: '100%',
    margin: '0',
    padding: '0',
    display: 'block'
  },
  Section1: {
    backgroundColor: styles.colors.primaryGreen,
    color: 'white',
    paddingTop: '80px',
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'center',
    width: '80%',
    fontFamily: styles.fonts.header
  },
  Transition1: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#09153b',
    color: 'rgb(232, 171, 53)',
    verticalAlign: 'bottom',
    paddingTop:'200px',
    paddingBottom: '60px'
  },
  Section2: {
    height: 'auto',
    color: styles.colors.primaryBlue,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '30px',
    borderColor: styles.colors.primaryGreen,
    borderRadius: '8pt',
    borderWidth: '3px',
    borderStyle: 'solid',
    padding: '20px',
    textAlign: 'center',
    fontSize: '20pt'
  },
  Section3: {
    height: 'auto',
    color: styles.colors.primaryBlue,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '30px',
    padding: '20px',
    textAlign: 'center',
    fontSize: '20pt'
  },
  embeddedLink: {
    color: 'inherit !important'
  },
  interlude2: {
    fontSize: '80pt',
    display: 'inline',
    padding: '40px',
    color: 'white',
    verticalAlign: 'top',
    textAlign: 'center',
    fontFamily: styles.fonts.header
  },
  header2: {
    fontSize: '80pt',
    color: styles.colors.primaryRed,
    borderBottom: 'solid',
    borderColor: styles.colors.primaryGreen,
    display: 'block',
    marginBottom: '20px',
    fontFamily: styles.fonts.header
  },
  header3: {
    fontSize: '80pt',
    color: styles.colors.primaryGreen,
    display: 'block',
    marginBottom: '20px',
    fontFamily: styles.fonts.header
  },
  interlude5: {
    fontSize: '40pt',
    color: styles.colors.primaryGray,
    display: 'inline'
  },
  leadBlock: {
    paddingTop: '40px',
    paddingBottom: '80px',
    fontSize: '20pt',
    color: styles.colors.primaryBlue
  },
  imageBlock: {
    textAlign: 'center'
  },
  text: {
    textAlign: 'left',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  list: {
    paddingLeft: '25%',

  }
  
  
}
class App extends Component {
  
  
  render () {
  var endDate = new Date(2017,5,21,22,0,0,0)
  return  (
    <div className="App">
      <div style={STYLES.Section1}>
        <Textfit mode="single">
          The Data Media Group
        </Textfit>
      </div> 
      <Block style={STYLES.imageBlock}>
        <Image image={Book} caption="Your stories." 
        captionStyle={{fontSize: '40pt',
        color: styles.colors.primaryBlue,
        display: 'block', fontFamily: styles.fonts.header}}/>
        <Image image={Data} caption="Your data." captionStyle={{fontSize: '40pt',
        color: styles.colors.primaryRed,
        display: 'block', fontFamily: styles.fonts.header}} />
        <Image image={Analysis} caption="Your analysis." captionStyle={{fontSize: '40pt',
        color: styles.colors.primaryGray,
        display: 'block', fontFamily: styles.fonts.header}}/>
      </Block>
      <Block backgroundColor={styles.colors.secondaryBlue}>
        <span style={STYLES.interlude2}> Online </span>
      </Block>
      <Block >
        <div style={STYLES.leadBlock}>
        From news stories to policy reports, we get your message online and help it reach readers where they are on social media.
        </div>
      </Block>
      <Block style={STYLES.Section2}>
        <span style={STYLES.header2}>Curious?</span>
        <div style={STYLES.text}>
          There is still space in our pilot program for organizations to bring their published materials online with us.
          To apply, please email the materials below to: info(a)thedatamediagroup.com 
          <ul style={STYLES.list}>
          <li>a description of your organization</li>
          <li>the target audience of the publication</li>
          <li>a pdf of the publication</li>
          </ul>
        </div>
      </Block>
      <Block style={STYLES.Section3}>
        <span style={STYLES.header3}>Who Are We?</span>
        We are a young start-up currently based in Berlin, but shortly to be somewhere on the east coast of America. 
        The founders are two women: one programmer, one journalist. Both American. Both Margaret Atwood fans before it was cool.
      </Block>
      <Footer/>
    </div>);
  }
}

export default App
