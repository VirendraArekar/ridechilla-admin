import React, { Fragment } from 'react';
import { Javadata } from './Data';
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import HeaderCard from '../../Common/Component/HeaderCard';

const JavascriptMode = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card>
                    <HeaderCard title={'Javascript Mode'} />
                    <CardBody>
                        <AceEditor
                            style={{ marginTop: '0px', width: '100%', height: '428px', marginLeft: '0px' }}
                            mode="javascript"
                            theme="monokai"
                            value={Javadata}
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
export default JavascriptMode;