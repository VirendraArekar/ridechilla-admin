import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import { Image, H5 } from '../../../AbstractElements'
import video1 from '../../../assets/video/auth-bg.mp4'
import { WE_ARE_COMING_SOON } from '../../../Constant'
import CountdownData from './CountdownData'

const ComingwithbgVideo = () => {
  return (
    <div className='page-wrapper compact-wrapper' id="pageWrapper">
      <Container fluid={true} className="p-0">
        <div className='comingsoon auth-bg-video'>
          <video className='bgvideo-comingsoon' autoPlay loop muted >
            <source src={video1} type='video/mp4' />
          </video>
          <div className='comingsoon-inner text-center'>
            <Image attrImage={{ src: `${require('../../../assets/images/logo/logo.png')}` }} />
            <H5>{WE_ARE_COMING_SOON}</H5>
            <div className='countdown' id='clockdiv'>
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default ComingwithbgVideo