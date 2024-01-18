import React, { Fragment } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Col, Card } from 'reactstrap';
import PostHeader from './Common/PostHeader';
import PostReact from './Common/PostReact';
import SocialIcon from './Common/SocialIcons';

const PostThird = () => {
    return (
        <Fragment>
            <Col sm="12" >
                <Card>
                    <div className="profile-post">
                        <PostHeader h6="2 Hours ago" />
                        <div className="post-body">
                            <div className="img-container">
                                <div className="my-gallery" id="aniimated-thumbnials" itemScope="">
                                    <Gallery>
                                        <figure itemProp="associatedMedia" style={{ marginBottom: '30px' }}>
                                            <Item original={require('../../../assets/images/user-profile/post4.jpg')} width='1600' height='950'>
                                                {({ ref, open }) => (
                                                    <a href="#javascript" onClick={(e) => { e.preventDefault(); open() }}>
                                                        <img ref={ref} className='img-fluid rounded-3 w-100' src={require('../../../assets/images/user-profile/post4.jpg')} itemProp='thumbnail' alt='gallery' />
                                                    </a>
                                                )}
                                            </Item>
                                        </figure>
                                    </Gallery>
                                </div>
                            </div>
                            <PostReact h6="+20 people react this post" />
                            <SocialIcon />
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default PostThird;