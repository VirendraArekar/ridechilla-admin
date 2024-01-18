import { H4, Image, LI, P, UL } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Blogimgdate, Hits, MARKJENCO, Modalcontent, singleblogcontent, singleblogpara,Comments } from '../../../Constant';

const BlogDetails = () => {
    return (
        <Fragment>
            <div className="blog-box blog-details">
                <Card>
                    <Image attrImage={{ className: 'img-fluid w-100', src: `${require('../../../assets/images/faq/learning-1.jpg')}`, alt: 'blog-main' }} />
                </Card>
                <Card>
                    <CardBody>
                        <div className="blog-details">
                            <UL attrUL={{ className: 'simple-list blog-social flex-row' }} >
                                <LI className="digits">{Blogimgdate}</LI>
                                <LI><i className="icofont m-0 icofont-user"></i>{MARKJENCO}</LI>
                                <LI attrLI={{ className: 'digits' }} ><i className="icofont m-0 icofont-thumbs-up"></i>{Hits}</LI>
                                <LI attrLI={{ className: 'digits' }}><i className="icofont m-0 icofont-ui-chat"></i>{Comments}</LI>
                            </UL>
                            <H4>{singleblogpara}</H4>
                            <div className="single-blog-content-top">
                                <P>{Modalcontent}.</P>
                                <P>{singleblogcontent}</P>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Fragment>
    );
};

export default BlogDetails;