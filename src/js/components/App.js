import React, {Component} from 'react'
import './App.css'
import Block from './Block'
import { Textfit } from 'react-textfit'

import Data from "../../img/data-pattern-2024196.png"
import Book from "../../img/book-311812.svg"
import Analysis from "../../img/facebook-analytics-2265786.png"
import colors from "../../styles/styles"

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
    backgroundColor: colors.primaryGreen,
    color: 'white',
    paddingTop: '80px',
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'center',
    width: '80%'
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
    backgroundColor: 'white',
    color: '#142c74',
    width: '100%'
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
    textAlign: 'center'
  },
  interlude3: {
    fontSize: '40pt',
    color: colors.primaryBlue,
    display: 'inline',
  },
  interlude4: {
    fontSize: '40pt',
    color: colors.primaryRed,
    display: 'inline'
  },
  interlude5: {
    fontSize: '40pt',
    color: colors.primaryGray,
    display: 'inline'
  },
  img: {
    display: 'inline',
    width: '200px',
    margin: '40px'
  },
  block: {
    paddingBottom: '40px',
    fontSize: '20pt',
    color: colors.primaryBlue
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
      <Block>
        <img style={STYLES.img} src={Book} />
        <img style={STYLES.img} src={Data} />
        <img style={STYLES.img} src={Analysis} />
      </Block>
      <Block >
        <span style={STYLES.interlude3}>Your stories. </span>
        <span style={STYLES.interlude4}>Your data. </span>
        <span style={STYLES.interlude5}>Your analysis...</span>
      </Block>
      <Block backgroundColor={colors.secondaryBlue}>
        <span style={STYLES.interlude2}> Online </span>
      </Block>
      <Block >
        <div style={STYLES.block}>
        From news stories to policy reports, we provide you an affordable way to make sure your message is available
        to online readers and shareable in the world of social media.
        </div>
      </Block>
    </div>);
  }
}

export default App
