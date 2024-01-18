import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { positionUSA } from '../../../Data/LeafletMapData';
import { LeafletUKMAP, LeafletUKMAPspan } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const USAMap = () => {
    return (
        <Fragment>
            <Col md="6">
                <Card>
                    <HeaderCard title={LeafletUKMAP} span1={LeafletUKMAPspan}/>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            zoom={13}
                            center={positionUSA}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default USAMap;