import React, { Fragment, useContext } from 'react';
import { CreatedByMe, Favourites, MyBookmark, Newsletter, Notification, NoBookmarksFound } from '../../../Constant';
import BookmarkContext from '../../../_helper/Bookmark';
import DataLoop from './DataLoop';
import FavDataLoop from './FavDataLoop';
import SharedWithMee from './ShareWithMe';
import EditBookmarkModal from './EditBookmark';
import GridClass from './Common/GridClass';
import { Row, Card, CardBody, TabContent, TabPane, } from 'reactstrap';

const BookmarksTabs = () => {
    const { activeTabss,gridView } = useContext(BookmarkContext);    
    return (
        <Fragment>
            <TabContent activeTab={activeTabss}>
                <TabPane tabId="1">
                    <Card className="mb-0">
                        <GridClass title={CreatedByMe} />
                        <CardBody className="pb-0">
                            <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                                <DataLoop />
                            </div>
                        </CardBody>
                    </Card>
                </TabPane>
                <TabPane tabId="2">
                    <Card className="mb-0">
                        <GridClass title={Favourites} />
                        <CardBody>
                            <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                                <FavDataLoop />
                            </div>
                        </CardBody>
                    </Card>
                </TabPane>
                <TabPane tabId="3"> <SharedWithMee /></TabPane>
                <TabPane tabId="4">
                    <Card className="mb-0">
                        <GridClass title={MyBookmark} />
                        <CardBody>
                            <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`} >
                                <DataLoop />
                            </div>
                        </CardBody>
                    </Card>
                </TabPane>
                <TabPane tabId="5">
                    <Card className="mb-0">
                        <GridClass title={Notification} />
                        <CardBody>
                            <div className="details-bookmark text-center">
                                <Row></Row>
                                <div className="no-favourite"><span>{NoBookmarksFound}</span> </div>
                            </div>
                        </CardBody>
                    </Card>
                </TabPane>
                <TabPane tabId="6">
                    <Card className="mb-0">
                        <GridClass title={Newsletter} />
                        <CardBody>
                            <div className="details-bookmark text-center">
                                <Row></Row>
                                <div className="no-favourite">
                                    <span>{NoBookmarksFound}</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </TabPane> <EditBookmarkModal />
            </TabContent>
        </Fragment>
    );
};
export default BookmarksTabs;