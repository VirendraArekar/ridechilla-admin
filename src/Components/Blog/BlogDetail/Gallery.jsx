import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { H6, Image, LI, UL,P } from '../../../AbstractElements';
import { Bloggallaryimg, Bloggallaryimgpara } from '../../../Constant';
import { BlogData } from '../../../Data/Blog';

const Gallery = () => {
    return (
        <Fragment>
            {BlogData.map((item,index) =>
                <Col sm="6" xl="3" className='box-col-3' key={index}>
                    <Card>
                        <div className="blog-box blog-grid">
                            <div className='blog-wrraper'>
                                <Image attrImage={{ className: 'img-fluid top-radius-blog', src: `${require(`../../../assets/images/${item.img}`)}`}} />
                            </div>
                            <div className="blog-details-second">
                                <div className="blog-post-date">
                                    <span className="blg-month">{'Apr'}</span>
                                    <span className="blg-date">{item.id}</span>
                                </div>
                                    <H6 attrH6={{className:'blog-bottom-details'}}>{item.para}</H6>
                                <P>{item.desc}</P>
                                <div className='detail-footer'>
                                    <UL attrUL={{ className: 'sociyal-list simple-list' }}>
                                        <LI>
                                           <i className="fa fa-user-o"></i>{item.admin}
                                        </LI>
                                        <LI>
                                            <i className="fa fa-comments-o"></i>{item.comment}
                                        </LI>
                                        <LI>
                                           <i className="fa fa-thumbs-o-up"></i>{item.hits}
                                        </LI>
                                    </UL>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};
export default Gallery;