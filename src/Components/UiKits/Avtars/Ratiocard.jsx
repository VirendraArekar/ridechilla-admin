import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../AbstractElements'
import { Ratio } from '../../../Constant'
import HeaderCard from '../../Common/Component/HeaderCard'

const Ratiocard = () => {
  return (
    <Col lg='6'>
        <Card>
        <HeaderCard title={Ratio} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar ratio">
                <Image attrImage={{ body: true, className: 'img-100 b-r-8', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '#' }} />
              </div>
              <div className="avatar ratio"><Image attrImage={{ body: true, className: 'img-90 b-r-8', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '#' }} /></div>
              <div className="avatar ratio"><Image attrImage={{ body: true, className: 'img-80 b-r-8', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '#' }} /></div>
              <div className="avatar ratio"><Image attrImage={{ body: true, className: 'img-70 b-r-8', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '#' }} /></div>
              <div className="avatar ratio"><Image attrImage={{ body: true, className: 'img-60 b-r-8', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '#' }} /></div>
              <div className="avatar ratio"><Image attrImage={{ body: true, className: 'img-50 b-r-8', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '#' }} /></div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Ratiocard