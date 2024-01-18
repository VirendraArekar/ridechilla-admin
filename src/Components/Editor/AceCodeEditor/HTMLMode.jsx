import React, { Fragment } from 'react';
import { HtmlData } from './Data';
import AceEditor from 'react-ace';
import { Card, CardBody, Col } from 'reactstrap';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import HeaderCard from '../../Common/Component/HeaderCard';

const HtmlMode = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card>
                    <HeaderCard title={'HTML Mode'} />
                    <CardBody>
                        <AceEditor
                            style={{ marginTop: '0px', width: '100%', height: '428px', marginLeft: '0px' }}
                            mode="html"
                            theme="monokai"
                            value={HtmlData}
                            name="blah2"
                            fontSize={14}
                            setOptions={{ useWorker: false }}
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
export default HtmlMode;