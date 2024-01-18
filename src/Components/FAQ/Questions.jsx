import React, { Fragment, useContext, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H5, P, H6 } from '../../AbstractElements';
import { HelpCircle } from 'react-feather';
import FaqRightsidebae from './FaqRightside';
import FaqContext from '../../_helper/Faq';
import { Faqpara, QuickQuestions } from '../../Constant';

const Questionss = () => {
    const { faq } = useContext(FaqContext);
    const [isActivity, setIsActivity] = useState([]);

    const handelChange = (e) => {
        let collapseCopy = [...isActivity];
        collapseCopy[e] = !collapseCopy[e];
        setIsActivity(collapseCopy);
    };
    return (
        <Fragment>
            <Col lg="12" >
                <div className="header-faq">
                    <H5 attrH5={{ className: 'mb-0' }}>{QuickQuestions}</H5>
                </div>
                <Row className="default-according style-1 faq-accordion" id="accordionoc">
                    <Col xl="8 xl-60" lg="6" md="7" className='box-col-60' >
                        {faq && faq.map((item, i) => {
                            return (
                                <Fragment key={i} >
                                    {item.subTitle &&
                                        <div className='faq-title'>
                                            <H6>{item.subTitle}</H6>
                                        </div>
                                    }
                                    {
                                        faq[i].titless.map((item, id) => {
                                            return (
                                                <Card key={id}>
                                                    <CardHeader>
                                                        <H5 attrH5={{ className: 'mb-0' }}>
                                                            <Btn attrBtn={{ color: 'link pe-0', onClick: () => handelChange(item.id), ariaexpanded: 'true' }}><HelpCircle />{item.title}</Btn>
                                                        </H5>
                                                    </CardHeader>
                                                    <Collapse id={item.id} isOpen={isActivity[item.id]}>
                                                        <CardBody>
                                                            <P>{Faqpara}</P>
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                            );
                                        })
                                    }
                                </Fragment>
                            );
                        })
                        }
                    </Col>
                    <FaqRightsidebae />
                </Row>
            </Col >
        </Fragment >
    );
};
export default Questionss;