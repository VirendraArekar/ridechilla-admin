import React, { Fragment, useContext } from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { photodescription, PortfolioTitle } from '../../../Constant';
import { H4, P } from '../../../AbstractElements';
import { Gallery, Item } from 'react-photoswipe-gallery';
import GalleryContext from '../../../_helper/Gallery';
import { Link } from 'react-router-dom';

const PhotosTab = () => {
    const { smallImages } = useContext(GalleryContext);

    return (
        <Fragment>
            <Row>
                {smallImages ?
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <div className="my-gallery row gallery-with-description">
                                    <Gallery>
                                        {smallImages && smallImages.map((item, i) => {
                                            return (
                                                <figure className="col-lg-3 col-sm-6 box-col-3" key={i}>
                                                    <Item original={require(`../../../assets/images/${item}`)} width='1024' height='768'>
                                                        {({ ref, open }) => (
                                                            <Link onClick={open}>
                                                                <img className='img-thumbnail' ref={ref} src={require(`../../../assets/images/${item}`)} alt='' />
                                                                <div className="caption">
                                                                    <H4>{PortfolioTitle}</H4><P>{photodescription}</P>
                                                                </div>
                                                            </Link>
                                                        )}
                                                    </Item>
                                                </figure>
                                            )
                                        })
                                        }
                                    </Gallery>
                                </div>
                                
                            </CardBody>
                        </Card>
                    </Col>
                    : ''}
            </Row>
        </Fragment>
    );
};

export default PhotosTab;