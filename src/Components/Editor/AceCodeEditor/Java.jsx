import React, { Fragment } from 'react';
import { Typescript } from './Data';
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import HeaderCard from '../../Common/Component/HeaderCard';

const JavaMode = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card>
                    <HeaderCard title={'Java Mode'} />
                    <CardBody>
                        <AceEditor
                            style={{ marginTop: '0px', width: '100%', height: '428px', marginLeft: '0px' }}
                            mode="java"
                            theme="monokai"
                            value={Typescript}
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
export default JavaMode;