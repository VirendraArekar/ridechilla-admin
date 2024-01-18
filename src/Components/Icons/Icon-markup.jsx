import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { Container, Row, FormGroup, Label, Input } from 'reactstrap';
import * as feather from 'feather-icons';
import { CopyText, Markup } from '../../Constant';
import { Btn } from '../../AbstractElements';

const IconMarkUp = props => {
    const closeIconContainer = () => {
        document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'none';
    };
    if (props.itag !== '' && props.icons !== '') {
        document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'block';
    }
    return (
        <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div" >
            <Container fluid={true}>
                <Row>
                    <div className="icon-popup">
                        <div className="close-icon" onClick={() => closeIconContainer()}>
                            <i className="icofont icofont-close"></i>
                        </div>
                        <div className="icon-first">
                            {props.icons.feathericon ?
                                <div dangerouslySetInnerHTML={{ __html: feather.icons[props.icons.feathericon].toSvg(props.icons.feathericon) }} />
                                :
                                <i id="icon_main" className={props.icons.icon}></i>
                            }
                        </div>
                        <div className="icon-class">
                            <Label className="icon-title"></Label>
                            <span id="fclass1"></span>
                        </div>
                        <div className="icon-last icon-last">
                            <Label className="icon-title">{Markup}</Label>
                            <div className="form-inline">
                                <div className='form-group mb-0'>
                                    <Input type="text" className="inp-val form-control m-r-10" defaultValue={props.itag.iTag} id="input_copy" />
                                    <CopyToClipboard text={props.itag.iTag}
                                    >
                                        <Btn attrBtn={{
                                            color: 'primary', className: 'notification', onClick: () => {
                                                toast.success('Code Copied to clipboard !', {
                                                    position: toast.POSITION.BOTTOM_RIGHT
                                                })
                                            }
                                        }}>{CopyText}</Btn>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default IconMarkUp;