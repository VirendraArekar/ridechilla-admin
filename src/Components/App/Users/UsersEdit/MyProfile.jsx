import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { H2, H3, H4, P, Image, Btn } from '../../../../AbstractElements';
import { MyProfile, Bio, Password, Website, Save, MarkJecno, Designer, ProfileBio, Address, Email } from '../../../../Constant';

const MyProfileEdit = () => {
    return (
        <Fragment>
            <Card>
                <CardHeader className="pb-0">
                    <H2 attrH2={{ className: 'card-title mb-0' }}>{MyProfile}</H2>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row className="mb-2">
                            <div className="profile-title">
                                <div className="d-flex">
                                    <Image attrImage={{ className: 'img-70 rounded-circle', alt: '', src: `${require('../../../../assets/images/user/7.jpg')}` }} />
                                    <div className="flex-grow-1">
                                        <H3 attrH3={{ className: 'mb-1 f-20 txt-primary text-uppercase' }}>{MarkJecno}</H3>
                                        <P attrPara={{ className: 'text-uppercase f-12' }}>{Designer}</P>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <FormGroup className="mb-3">
                            <H4 attrH4={{ className: 'form-label' }}>{Bio}</H4>
                            <Input type="textarea" className="form-control" rows="5" defaultValue={ProfileBio} />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label className="form-label">{Email}-{Address}</Label>
                            <Input className="form-control" placeholder="your-email@domain.com" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label className="form-label">{Password}</Label>
                            <Input className="form-control" type="password" defaultValue="password" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label className="form-label">{Website}</Label>
                            <Input className="form-control" placeholder="http://Uplor .com" />
                        </FormGroup>
                        <div className="form-footer">
                            <Btn attrBtn={{ className: 'btn-block', color: 'primary' }} >{Save}</Btn>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    );
};
export default MyProfileEdit;