import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container } from 'reactstrap'
import { H3,Btn,P } from '../../../AbstractElements'
import { BACK_TO_HOME_PAGE, ErrorPageContent, Pagenotfound } from '../../../Constant'
import { Error1 } from '../../../Data/Page/Svg'

const Error_page1 = () => {
  return (
    <Fragment>
      <div className='page-wrapper compact-wrapper' id='pageWrapper'>
          <div className='error-wrapper'>
            <Container>
              <div className='svg-wrapper error1'>
                <Error1/>
              </div>
              <Col md="8" className="offset-md-2">
                  <H3>{Pagenotfound}</H3>
                  <P attrPara={{ className: 'sub-content' }} >{ErrorPageContent}</P>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                      <Btn attrBtn={{color: 'primary' }}>{BACK_TO_HOME_PAGE}</Btn>
                  </Link>
              </Col>
            </Container>
          </div>
      </div>
    </Fragment>
  )
}
export default Error_page1