import React, { Fragment } from 'react';
import { CssData } from './Data';
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import HeaderCard from '../../Common/Component/HeaderCard';

const CssMode = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card>
                    <HeaderCard title={'CSS Mode'} />
                    <CardBody>
                        <AceEditor
                            style={{ marginTop: '0px', width: '100%', height: '428px', marginLeft: '0px' }}
                            mode="css"
                            theme="monokai"
                            value={CssData}
                            name="blah2"
                            setOptions={{ useWorker: false }}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            editorProps={{ $blockScrolling: true }}
                            highlightActiveLine={true} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default CssMode;