import React, { Fragment } from 'react';
import { BasicCardData } from '../../../../Data/Bonus-ui/Data';
import { Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import SettingComponent from '../../../Common/Component/SettingIcon';
import { H3, H4, P } from '../../../../AbstractElements';

const BasicCommon = () => {
    return (
        <Fragment>
            {BasicCardData.map((item) =>
                <Col sm="12" xl="6" key={item.id}>
                    <Card>
                        <CardHeader className={`${!item.padding && 'pb-0'} ${item.colorClass ? item.colorClass : item.headerClass ? item.headerClass : ''}`}>
                            <H3 attrH3={{ className: `${item.titleClass && 'text-white'}` }}  >{item.icon ? item.icon : ''}{item.title}</H3>
                            {item.span && <span>{item.span}</span>}
                        </CardHeader>
                        <CardBody className={item.colorClass ? item.colorClass : item.bodyClass ? item.bodyClass : ''}>
                            <P attrPara={{ className: 'mb-0' }}>
                                {item.pare}
                            </P>
                        </CardBody>
                        {item.footer &&
                            <CardFooter className={item.colorClass ? item.colorClass : item.footerClass ? item.footerClass : ''}>
                                <H4 attrH4={{ className: 'mb-0' }}>{item.footer}</H4>
                            </CardFooter>}
                    </Card>
                </Col>
            )}

        </Fragment>

    );
};

export default BasicCommon;