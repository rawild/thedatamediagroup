import React, {Component, PropTypes} from 'react'
import SenatorProfile from './SenatorProfile'
import Hannon from "../../img/Hannon.jpeg"
import Young from "../../img/Young.jpeg"
import Flanagan from "../../img/Flanagan.jpeg"
import Cuomo from "../../img/Cuomo.jpeg"
const STYLES = {
  'title': {
    'fontSize': '100pt',
    'marginTop': '50px'
  },
  'subtitle' : {
    'fontSize': '50pt',
    'marginTop': '20px',
    'marginBottom': '50px',
    'paddingLeft': '10px',
    'paddingRight': '10px'
  },
  'ctaTargets': {
    'display': 'inline-block',
    'width': '100%',
    'marginBottom': '60px'
  }
}
export default class CalltoAction extends Component {
  
  render() {
    var HannonCallScript = () => { 
      return(<span>Hi, my name is ________ and I live in __________. <br /><br /> 
          I am calling because I am concerned about the future of our healthcare under the Trump administration. Millions of New Yorkers currently cannot access the healthcare they need simply because they cannot afford adequate health insurance. Under proposed Republican legislation to repeal the Affordable Care Act, millions more will lose coverage. <br/> <br/>
          I urge Senator Kemp Hannon to support the New York Health Act - State Senate Bill S4840 and to pass it out of the Health Committee as soon as possible, even if that means a special session. <br /> <br />
          This bill will guarantee healthcare for all New Yorkers so that no resident will ever be denied care or face the threat of bankruptcy because of medical costs. <br /> <br />
          (If you feel comfortable you can share a personal reason why this is important to you) <br /> <br />
          I am very disappointed Senator Hannon not shown leadership on this issue and worked to bring the New York Health Act to a vote. <br /> <br />
          Thank you for your time.
        </span>
      )
    }
    
    var FlanaganCallScript = () => {
      return(<span>Hi, my name is __________ and I live in ____________. <br /> <br />
          I am calling to urge Senator John Flanagan to support the New York Health Act - State Senate Bill S4840 and to work to bring it to a vote as soon as possible, even if that means a special session.<br /> <br /> 
          Millions of New Yorkers currently cannot access the healthcare they need simply because they cannot afford adequate health insurance. Under proposed Republican legislation to repeal the Affordable Care Act, millions more will lose coverage.<br /> <br />
          The New York Health Act will guarantee healthcare for all New Yorkers so that no resident will ever be denied care or face the threat of bankruptcy because of medical costs. <br /> <br /> 
          (If you feel comfortable you can share a personal reason why this is important to you)<br /> <br /> 
          I am very disappaointed that Senator Flanagan has failed to show leadership on this issue and did nothing to bring the New York Health Act to a vote this session.<br /> <br />
          Thank you for your time.<br /> <br />
        </span>
      )
    }
    
    var CuomoCallScript = () => {
      return(<span>Hi, my name is __________ and I live in ____________. <br /> <br />
          I am calling to urge Governor Andrew Cuomo to support the New York Health Act - State Senate Bill S4840 and to work to bring it to a vote as soon as possible, even if that means a special session.<br /> <br /> 
          Millions of New Yorkers currently cannot access the healthcare they need simply because they cannot afford adequate health insurance. Under proposed Republican legislation to repeal the Affordable Care Act, millions more will lose coverage.<br /> <br />
          The New York Health Act will guarantee healthcare for all New Yorkers so that no resident will ever be denied care or face the threat of bankruptcy because of medical costs. <br /> <br /> 
          (If you feel comfortable you can share a personal reason why this is important to you)<br /> <br /> 
          I am very disappaointed that Governor Cuomo has failed to show leadership on this issue and did nothing to bring the New York Health Act to a vote this session.<br /> <br />
          Can we count on the Governor to sign the bill when it is passed?<br /> <br />
          Thank you for your time.<br /> <br />
        </span>
      )
    }
    
    return(<div className="CalltoAction">
      <div className="title" style={STYLES.title}>
        {this.props.title}
      </div>
      <div className="subtitle" style={STYLES.subtitle}>
        {this.props.subtitle}
      </div>
      <div className="CTA-Targets" style={STYLES.ctaTargets}>
        <SenatorProfile name="Kemp Hannon"
          phone="518-455-2200"
          title="Chair of the Health Committee"
          img={Hannon} 
          explainer="Ask why he didn't support the New York Health Act and bring it out of committee. As a committee chair, he is responsible to all New Yorkers. "
          facebook="https://www.facebook.com/kemp.hannon"
          twitter=".@kemphannon Why didn't you support the #NYHealthAct? Why didn't you schedule a vote on it? We need you to lead NY! #PassNYHealth"
          him
          label="A"
          callScript={HannonCallScript()}/>
          <SenatorProfile name="John J. Flanagan"
              phone="518–455–2071"
              title="Senate Majority Leader"
              img={Flanagan} 
              explainer="Ask why he didn't support the passage of health care for all New Yorkers and schedule a floor vote for the New York Health Act before June 21.  "
              facebook="https://www.facebook.com/sen.john.flanagan"
              twitter=".@LeaderFlanagan Why didn't you support the #NYHealthAct? Why didn't you schedule a vote on it? We're looking to you to lead. #PassNYHealth"
              him
              label="B"
              callScript={FlanaganCallScript()}
            />
            <SenatorProfile name="Andrew Cuomo"
                phone="518-474-8390"
                title="Governor"
                img={Cuomo} 
                explainer="Ask why he didn't support the passage of health care for all New Yorkers and work with senate leadership to schedule a floor vote before June 21.  "
                facebook="https://www.facebook.com/GovernorAndrewCuomo"
                twitter=".@NYGovCuomo Why didn't you support the #NYHealthAct? Why didn't you schedule a vote on it? We're looking to you to lead. #PassNYHealth"
                him
                label="C"
                petition="https://passnyhealth.com/"
                callScript={CuomoCallScript()}
              />
        </div>
    </div>
    )
  }
}
CalltoAction.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}
