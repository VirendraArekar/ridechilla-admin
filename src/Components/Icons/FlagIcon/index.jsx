import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs,H5,H6 } from "../../../AbstractElements";
import IconMarkUp from '../Icon-markup';
import { Container, Row, Col, Card, CardBody, Media } from 'reactstrap'
import axios from 'axios'
import { FlagIcons } from '../../../Constant';
import HeaderCard from "../../Common/Component/HeaderCard";

const FlagIcon = () => {
    const [iTag, setiTag] = useState('');
    const [iconsData, seticonsData] = useState([]);
    const [icon, setIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/flagIconData.json`).then(res => seticonsData(res.data))
    }, [])

    const getItag = (tag) => {
        setiTag({
            iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
        })
        setIcon({
            icon: 'flag-icon flag-icon-' + tag + ' fa-2x'
        })
    }
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Flag Icons' parent='Icons' title='Flag Icons' />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={FlagIcons}/>
                            <CardBody>
                                <Row className="icon-lists flag-icons">
                                    {iconsData.map((icon, i) => {
                                        return (
                                            <Col sm="6 col-12" xl="4" key={i} onClick={(e) => getItag(icon.abbrivation)}>
                                                <Media className="d-flex">
                                                    <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
                                                    <Media body className="flex-grow-1 align-self-center">
                                                        <H5 attrH5={{className:'text-uppercase'}} >{icon.abbrivation}</H5>
                                                        <H6 attrH6={{className:'mt-0'}}>{icon.name}</H6>
                                                    </Media>
                                                </Media>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <IconMarkUp itag={iTag} icons={icon} />
        </Fragment>
    )
}
export default FlagIcon;