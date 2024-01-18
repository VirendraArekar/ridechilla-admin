import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { P, H4, UL, LI } from '../../../AbstractElements';
import { Blogimgdate, Comments, Hits, MarkJecno, SearchDesc } from '../../../Constant';
import blogimg from '../../../assets/images/blog/blog.jpg';

const BlogBox = () => {
    return (
        <Fragment>
            <Col xxl="6" className='set-col-12 box-col-50 xl-40'>
                <Card>
                    <div className="blog-box blog-shadow bg-size" style={{ backgroundImage: `url(${blogimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                        <div className="blog-details">
                            <P attrPara={{ className: 'digits' }} >{Blogimgdate}</P>
                            <H4>{SearchDesc}</H4>
                            <UL attrUL={{ className: 'simple-list blog-social flex-row' }} >
                                <LI><i className="icofont icofont-user m-0"></i>{MarkJecno}</LI>
                                <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-thumbs-up m-0"></i>{Hits}</LI>
                                <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat m-0"></i>{Comments}</LI>
                            </UL>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BlogBox;