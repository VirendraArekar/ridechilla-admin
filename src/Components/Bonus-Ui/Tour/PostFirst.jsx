import React, { Fragment } from 'react';
import { Col, Card } from 'reactstrap';
import { Gallery, Item } from 'react-photoswipe-gallery'
import PostHeader from './Common/PostHeader';
import PostReact from './Common/PostReact';
import SocialIcon from './Common/SocialIcons';
import { Link } from 'react-router-dom';

const PostFirst = () => {
  const option = {
    bgOpacity: 1,
    marginTop: 15,
  }

  return (
    <Fragment>
      <Col sm="12" data-intro="This is the your first Post" className="step5">
        <Card>
          <div className="profile-post">
            <PostHeader h6="22 Hours ago" />
            <div className="post-body">
              <div className="img-container">
                <div className="my-gallery" itemScope data-pswp-uid="1">
                  <Gallery options={option}>
                    <figure itemProp="associatedMedia" style={{ marginBottom: '30px' }}>
                      <Item original={require('../../../assets/images/user-profile/post1.jpg')} width='1600' height='950' >
                        {({ ref, open }) => (
                          <Link onClick={open}>
                            <img ref={ref} className='img-fluid rounded-3 w-100' src={require('../../../assets/images/user-profile/post1.jpg')} itemProp='thumbnail' alt='gallery' />
                          </Link>
                        )}
                      </Item>
                    </figure>
                  </Gallery>
                </div>
              </div>
              <PostReact h6={'+5 people react this post'} />
              <SocialIcon />
            </div>
          </div>
        </Card>
      </Col>
    </Fragment >
  );
};

export default PostFirst;