import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { IMAGE_GALLERYDEC } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import GalleryImageDesc from "../GalleryImageDesc";

const ListOfImageDesc = () => {
    return (
        <Fragment>            
            <Col sm="12">
                <Card>                        
                    <HeaderCard title={IMAGE_GALLERYDEC} />
                    <CardBody>
                        <div className="my-gallery row gallery-with-description">
                            <GalleryImageDesc/>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ListOfImageDesc;
