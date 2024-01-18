import { H4, H6, Image, LI, P, UL } from '../../../AbstractElements';
import { JolioMark, learningdetailtext, MarkJecno,Comment } from '../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, Col, Media, Row } from 'reactstrap';

const Comments = () => {
    const data =[
        {'name':JolioMark,'img':'comment.jpg','work':'Designer','like':'02 Hits','comments':'485 Comments'},
        {'name':MarkJecno,'img':'9.jpg','work':'Developer','like':'08 Hits','comments':'352 Comments'},
        {'name':'Helly Roi','img':'4.jpg','work':'App Designer','like':'12 Hits','comments':'598 Comments'},
    ]
    return (
        <Fragment>
            <CardBody>
                <H4>{Comment}</H4>
                <UL attrUL={{ className: 'simple-list comment-sec' }}>
                    {
                        data.map((item,id)=>{
                            return(
                                <LI key={id}>
                                    <Media className="align-self-center d-flex">
                                        <Image attrImage={{ className: 'align-self-center', src: `${require(`../../../assets/images/blog/${item.img}`)}`, alt: '' }} />
                                        <Media body className='flex-grow-1'>
                                            <Row>
                                                <Col md="4 xl-100">
                                                    <H6 attrH6={{ className: 'mt-0' }} >{item.name}<span>({item.work})</span></H6>
                                                </Col>
                                                <Col md="8 xl-100">
                                                    <UL attrUL={{ className: 'simple-list comment-social float-start float-md-end learning-comment' }} >
                                                        <LI attrLI={{ className: 'digits' }} ><i className="icofont icofont-thumbs-up m-0"></i>{item.like}</LI>
                                                        <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat m-0"></i>{item.comments}</LI>
                                                    </UL>
                                                </Col>
                                            </Row>
                                            <P>{learningdetailtext}</P>
                                        </Media>
                                    </Media>
                                </LI>    
                            )
                        })
                    }                   
                </UL>
            </CardBody>
        </Fragment>
    );
};

export default Comments;