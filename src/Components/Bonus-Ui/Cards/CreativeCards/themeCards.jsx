import React, { Fragment } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { H3, P } from '../../../../AbstractElements';
import { CreativeCardData } from '../../../../Data/Bonus-ui/Data';

const CreativeCardsCommon = () => {
    return (
        <Fragment>
            {CreativeCardData.map((item) =>
                <Col sm="12" xl="6" key={item.id}>
                    <Card className={item.cardClass ? item.cardClass : ''}>
                        <CardHeader className={item.headerClass}>
                            <H3 attrH3={{ className: `${item.titleClass ? 'text-white' : ''}` }}>{item.title}</H3>
                        </CardHeader>
                        <CardBody>
                            <P>
                                {item.pare}
                            </P>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default CreativeCardsCommon;