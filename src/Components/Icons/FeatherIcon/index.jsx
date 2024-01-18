import { Breadcrumbs,H6 } from '../../../AbstractElements';
import IconMarkUp from '../Icon-markup';
import { Feathericon } from '../../../Constant';
import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Media } from 'reactstrap';
import axios from 'axios';
import * as feather from 'feather-icons';
import HeaderCard from "../../Common/Component/HeaderCard";

const FeatherIcon = () => {
    const [data, setData] = useState([]);
    const [iTag, setiTag] = useState('');
    const [feathericon, setfeatherIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/featherData.json`).then(res => setData(res.data));
    }, []);

    const getItag = (tag) => {

        setiTag({
            iTag: '<i data-feather="' + tag + '"></i>',
        });
        setfeatherIcon({
            feathericon: tag
        });

    };

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Feather Icons' parent='Icons' title='Feather Icons' />
            <Container fluid={true}>
                {
                    data.map((icons, index) => {
                        return (
                            <Row key={index} >
                                <Col sm="12">
                                    <Card>
                                        <HeaderCard title={Feathericon}/>
                                        <CardBody>
                                            <Row className="icon-lists feather-icons">
                                                {
                                                    icons.feather_icons.map((icon, i) => {
                                                        return (
                                                            <Col sm="6 col-12" xl="4" key={i} onClick={(e) => getItag(icon)}>
                                                                <Media className='d-flex'>
                                                                    <div dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg(icon) }} />
                                                                    <Media body className="flex-grow-1 align-self-center">
                                                                        <H6 attrH6={{className:'mt-0'}}>{icon}</H6>
                                                                    </Media>
                                                                </Media>
                                                            </Col>
                                                        );
                                                    })
                                                }
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        );
                    })
                }
            </Container>
            <IconMarkUp itag={iTag} icons={feathericon} />
        </Fragment>
    );
};
export default FeatherIcon;