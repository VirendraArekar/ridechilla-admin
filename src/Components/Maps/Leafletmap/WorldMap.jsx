import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer'
import { LeafletMAPspan, LeafletWORLDMAP } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const WorldMap = () => {
    return (
        <Fragment>
            <Col md="6">
                <Card>
                    <HeaderCard title={LeafletWORLDMAP} span1={LeafletMAPspan}/>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            center={[50, 10]}
                            zoom={1}
                            maxZoom={10}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                        >
                            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default WorldMap;