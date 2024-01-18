import React, { Fragment, useContext } from 'react';
import Masonry from 'react-masonry-css';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs, Image } from '../../../AbstractElements';
import { MASONRYGALLERY } from '../../../Constant';
import GalleryContext from '../../../_helper/Gallery';
import HeaderCard from '../../Common/Component/HeaderCard';

const MesonryGallery = () => {
    const { masonryImg } = useContext(GalleryContext);
    const styles = { width: '100%' };
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1
    };
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Masonry Gallery" parent="Gallery" title="Masonry Gallery" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={MASONRYGALLERY} />
                            <CardBody className="photoswipe-pb-responsive">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-gallery row grid gallery"
                                    columnClassName="col-md-3 col-sm-6 grid-item">
                                    {masonryImg.map((element, index) =>
                                        <figure key={index}>
                                            <Image attrImage={{ src: require(`../../../assets/images/${element.src}`), style: styles, alt: '' }} />
                                        </figure>
                                    )}
                                </Masonry>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
};

export default MesonryGallery;