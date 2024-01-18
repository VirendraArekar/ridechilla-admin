import React, { Fragment } from 'react';
import blogSingle from '../../assets/images/blog/blog-single.jpg';
import { Container, Row, Col, Media, CardBody, Card } from 'reactstrap';
import { Blogimgdate, Comment, Comments, Hits, MarkJecno, Modalcontent, singleblogcontent, singleblogpara } from '../../Constant';
import { Breadcrumbs, H4, H6, LI, P, UL,Image } from '../../AbstractElements';
import { BlogSingleData } from '../../Data/Blog';

const BlogSingle = () => {
    const image = require.context('../../assets/images/blog',true)
    const getImage = (images) =>{
        return image(`./${images}`);
    }
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Blog Single" parent="Blog" title="Blog Single" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <div className="blog-single">
                            <div className="blog-box blog-details">
                                <div className='banner-wrraper bg-size' style={{ backgroundImage: `url(${blogSingle})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}></div>
                                <Card>
                                    <CardBody>                                    
                                        <div className="blog-details">
                                            <UL attrUL={{ className: 'blog-social simple-list' }}>
                                                <LI attrLI={{ className: 'digits' }} >{Blogimgdate}</LI>
                                                <LI><i className="icofont m-0 icofont-user"></i>{MarkJecno}</LI>
                                                <LI attrLI={{ className: 'digits' }}><i className="icofont m-0 icofont-thumbs-up"></i>{Hits}</LI>
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
                            <Card className="comment-box">
                                <CardBody>                                    
                                    <H4>{Comment}</H4>
                                    <UL attrUL={{className:'simple-list comment-sec'}}>
                                        {BlogSingleData.map((item) =>
                                            <LI key={item.id}>
                                                <Media className="d-flex align-self-center">
                                                    <Image attrImage={{className:'align-self-center',src:`${getImage(item.img)}`}} />
                                                    <Media body className='flex-grow-1'>
                                                        <Row>
                                                            <Col md="4">
                                                                <a href='#'>
                                                                    <H6 attrH6={{ className: 'mt-0' }} >{item.name}<span> {item.post}</span></H6>
                                                                </a>
                                                            </Col>
                                                            <Col md="8">
                                                                <UL attrUL={{ className: 'comment-social simple-list' }} >
                                                                    <LI>
                                                                        <i className="icofont m-0 icofont-thumbs-up"></i>{item.hits}
                                                                    </LI>
                                                                    <LI>
                                                                        <i className="icofont m-0 icofont-ui-chat"></i>{item.comments}
                                                                    </LI>
                                                                </UL>
                                                            </Col>
                                                        </Row>
                                                        <P>{item.para}</P>
                                                    </Media>
                                                </Media>
                                            </LI>
                                        )}
                                    </UL>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
};

export default BlogSingle;