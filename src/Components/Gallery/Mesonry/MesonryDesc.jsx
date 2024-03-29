import React, { Fragment, useContext } from 'react';
import Masonry from 'react-masonry-css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { PortfolioTitle, MasonryGalleryWithDescription, Imagedesc } from '../../../Constant';
import { Breadcrumbs, H3, H4, P, LI, Image } from '../../../AbstractElements';
import GalleryContext from '../../../_helper/Gallery';

const MesonryDesc = () => {
    const { masonryImg } = useContext(GalleryContext);
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1
    };
    const styles = { width: '100%' };
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Masonry Gallery With Description' parent="Gallery" title="Masonry Gallery With Description" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className='pb-0'>
                                <H3>{MasonryGalleryWithDescription}</H3>
                            </CardHeader>
                            <CardBody className="photoswipe-pb-responsive">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
                                    columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item"
                                >
                                    {masonryImg.map((element, index) =>
                                        <LI style={{ listStyle: 'none' }} key={index} >
                                            <figure>
                                                <a href="#javascript" data-size="1600x950">
                                                    <Image attrImage={{ src: require(`../../../assets/images/${element.src}`), style: styles, alt: '' }} />
                                                    <div className="caption">
                                                        <H4>{PortfolioTitle}</H4>
                                                        <P>{Imagedesc}</P>
                                                    </div>
                                                </a>
                                            </figure>
                                        </LI>
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

export default MesonryDesc;