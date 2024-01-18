import React, { Fragment, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../../AbstractElements'
import UserProfile from './UserProfile';
import PostSecond from './PostSecond';
import PostThird from './PostThird';
import LeftbarProfile from './Leftbar';
import PostFirst from './PostFirst';
import { useTour } from '@reactour/tour';

const TourMain = () => {
    const { setIsOpen } = useTour();
    useEffect(() => {
        var timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
  return (
    <Fragment>
        <Breadcrumbs mainTitle="Tour" parent="Bouns Ui" title="Tour" />     
        <Container fluid={true}>
            <div className="user-profile">
                <Row>                
                    <UserProfile />
                    <LeftbarProfile />
                    <Col xl="9" lg="12" md="7" className="xl-65 box-col-70">
                        <Row>
                            <PostFirst />
                            <PostSecond />
                            <PostThird />
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>   
    </Fragment>
  )
}

export default TourMain