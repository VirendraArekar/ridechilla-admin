import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import { GroupBtnData } from '../../../Data/Button';

const GroupButtonClass = () => {
    return (
        <Fragment>
            {GroupBtnData.map((item, i) =>
                <div className="col-12" key={i}>
                    <Card>
                        <HeaderCard title={item.title} />
                        <CardBody className="btn-group-showcase">
                            <Row>
                                {item.color.map((colorItem, i) =>
                                    <Col xl={4} md={6} sm={12} key={i}>
                                        <ButtonGroup className={colorItem.btnClass ? colorItem.btnClass : ''}>
                                            <Btn attrBtn={{ size: colorItem.size ? colorItem.size : '', color: colorItem.colorClass}} >{colorItem.title1}</Btn>
                                            <Btn attrBtn={{ size: colorItem.size ? colorItem.size : '', color: colorItem.colorClass}} >{colorItem.title2}</Btn>
                                            <Btn attrBtn={{ size: colorItem.size ? colorItem.size : '', color: colorItem.colorClass}} >{colorItem.title3}</Btn>
                                        </ButtonGroup>
                                    </Col>
                                )}
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            )}
        </Fragment>
    );
};
export default GroupButtonClass;