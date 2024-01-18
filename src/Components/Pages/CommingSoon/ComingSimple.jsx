import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import { Image,H5,H6 } from '../../../AbstractElements'
import { CommingSoontext, KOHO, Wearecomingsoon } from '../../../Constant'
import CountdownData from './CountdownData'
import commingsoonsvg from '../../../assets/images/other-images/comingsoon-img.svg'

const ComingSimple = () => {
  return (
    <Fragment>
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Container fluid={true} className="p-0">
                <div className="comingsoon">
                    <div className="comingsoon-inner text-center">
                        <div className='logo-wrraper'>
                            <Image attrImage={{className:'img-fluid comingsoon-img',src:`${require('../../../assets/images/logo/logo.png')}`}} />
                        </div>
                        <H5>
                            {CommingSoontext}<br/>{KOHO}
                        </H5>
                        <div className='svg-wrapper'>
                            <Image attrImage={{className:'img-fluid comingsoon-img', src:`${commingsoonsvg}`}} />
                        </div>
                        <H6>{Wearecomingsoon}</H6>
                        <div className="countdown" id="clockdiv">
                            <CountdownData />
                        </div>
                    </div>
                </div>
            </Container>
        </div>    
    </Fragment>
  )
}
export default ComingSimple