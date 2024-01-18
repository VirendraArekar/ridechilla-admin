import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Container, Media, Row } from 'reactstrap';
import { MarkJecno, MARKJENCOEMAIL } from '../../../Constant';
import NavTab from './NavTab';
import Img from '../../../assets/images/user/user.png';
import { Image, P, H6, Breadcrumbs } from '../../../AbstractElements';
import BookmarksTabs from './BookmarksTabs';

const BookmarksContain = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
      };
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Bookmarks" parent="Apps" title="Bookmarks" />
            <Container fluid={true}>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <Col xl="3" className="xl-25 box-col-3">
                            <div className="md-sidebar email-sidebar">
                            <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>Bookmark Filter</a>
                            <div className={`md-sidebar-aside email-left-aside ${IsOpen ? 'open' : ''}`}>
                                <Card>
                                    <CardBody>
                                        <div className="email-app-sidebar left-bookmark">
                                            <Media className='d-flex'>
                                                <div className="d-flex-size-email">
                                                    <Image attrImage={{
                                                        className: 'me-3 rounded-circle',
                                                        src: `${Img}`, alt: ''
                                                    }} />
                                                </div>
                                                <Media className='flex-grow-1'>
                                                    <H6 attrH6={{ className: 'f-w-600 text-uppercase' }} >{MarkJecno}</H6>
                                                    <P>{MARKJENCOEMAIL}</P>
                                                </Media>
                                            </Media>
                                            <NavTab />
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            </div>
                        </Col>
                        <Col xl="9" md="12" className="xl-75">
                            <div className="email-right-aside bookmark-tabcontent">
                                <Card className="email-body">
                                    <div className="ps-0">
                                        <BookmarksTabs />
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default BookmarksContain;