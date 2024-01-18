import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';
import { centerAustralia, rectangleAustralia } from '../../../Data/LeafletMapData';
import HeaderCard from '../../Common/Component/HeaderCard';
import { LeafletAustMAPspan, LeafletAustraliaMAP, PopupinFeatureGroup } from '../../../Constant';

const AustraliaMap = () => {

    const purpleOptions = { color: 'purple' };
    return (
        <Fragment>
            <Col md="6">
                <Card>
                    <HeaderCard title={LeafletAustraliaMAP} span1={LeafletAustMAPspan}/>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            zoom={4} center={centerAustralia} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <LayerGroup>
                                </LayerGroup>
                            </LayerGroup>
                            <FeatureGroup pathOptions={purpleOptions}>
                                <Popup>{PopupinFeatureGroup}</Popup>
                                <Rectangle bounds={rectangleAustralia} />
                            </FeatureGroup>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default AustraliaMap;