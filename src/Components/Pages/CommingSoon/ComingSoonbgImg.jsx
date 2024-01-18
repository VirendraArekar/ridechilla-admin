import React from 'react'
import { Container } from 'reactstrap'
import { Image,H5 } from '../../../AbstractElements'
import { WE_ARE_COMING_SOON } from '../../../Constant'
import CountdownData from './CountdownData'

const ComingSoonbgImg = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
        <Container fluid={true} className="p-0 m-0">
            <div className='comingsoon comingsoon-bgimg'>
                <div className='comingsoon-inner text-center'>
                    <Image attrImage={{src:`${require('../../../assets/images/logo/logo.png')}`}} />
                    <H5>{WE_ARE_COMING_SOON}</H5>
                    <div className='countdown' id='clockdiv'>
                        <CountdownData/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
export default ComingSoonbgImg