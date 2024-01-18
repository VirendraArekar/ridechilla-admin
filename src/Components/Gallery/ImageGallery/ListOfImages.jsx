import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { IMAGE_GALLERY } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import GalleryImages from "../GalleryImages";

const ListOfImage = () => {
    return (
        <Fragment>           
            <Col sm="12">
                <Card>
                    <HeaderCard title={IMAGE_GALLERY} />
                    <CardBody>
                        <div className="gallery my-gallery row">
                        <GalleryImages />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ListOfImage;