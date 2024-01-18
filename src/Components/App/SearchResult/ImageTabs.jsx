import { ImageAbout } from '../../../Constant';
import { P} from '../../../AbstractElements';
import PagesSort from './Pages';
import React, { Fragment} from 'react';
import { Row } from 'reactstrap';
import GalleryImageDesc from '../../Gallery/GalleryImageDesc';

const PhotosTab = () => {   
    return (
        <Fragment>
            <div className='info-block m-t-30'>
                <P attrPara={{className:'pb-4 col-sm-12 digits'}}>{ImageAbout}</P>
                <Row className='my-gallery gallery-with-description'>
                   <GalleryImageDesc/>
                </Row>
            </div>
            <PagesSort />
        </Fragment>
    );
};

export default PhotosTab;