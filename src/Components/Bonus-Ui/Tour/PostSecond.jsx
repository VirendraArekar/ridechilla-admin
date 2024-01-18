import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Row, Col, Card } from 'reactstrap';
import PostHeader from "./Common/PostHeader";
import PostReact from "./Common/PostReact";
import SocialIcon from "./Common/SocialIcons";

const PostSecond = () => {
  return (
    <Col sm="12" data-intro="This is the your Last Post" className="step6">
      <Card>
        <div className="profile-post">
          <PostHeader h6="5 Hours ago" />
          <div className="post-body">
            <div className="img-container">
              <Row className="row mt-4 pictures my-gallery" id="aniimated-thumbnials-2" itemScope="">
                <Gallery>
                  <figure className="col-sm-6" itemProp="associatedMedia" style={{ marginBottom: '30px' }}>
                    <Item original={require('../../../assets/images/user-profile/post2.jpg')} width='1600' height='950'>
                      {({ ref, open }) => (
                        <Link onClick={open}>
                          <img ref={ref} className='img-fluid rounded-3 w-100' src={require('../../../assets/images/user-profile/post2.jpg')} itemProp='thumbnail' alt='gallery' />
                        </Link>
                      )}
                    </Item>
                  </figure>
                  <figure className="col-sm-6" itemProp="associatedMedia" style={{ marginBottom: '30px' }}>
                    <Item original={require('../../../assets/images/user-profile/post3.jpg')} width='1600' height='950'>
                      {({ ref, open }) => (
                        <Link onClick={open}>
                          <img ref={ref} className='img-fluid rounded-3 w-100' src={require('../../../assets/images/user-profile/post3.jpg')} itemProp='thumbnail' alt='gallery' />
                        </Link>
                      )}
                    </Item>
                  </figure>
                </Gallery>
              </Row>
            </div>
            <PostReact h6="+25 people react this post" />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default PostSecond;