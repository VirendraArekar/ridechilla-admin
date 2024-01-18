import { H3, Btn } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { CardHeader } from 'reactstrap';

const HeaderCard = ({ title, hover, span1, span2 , btn, btnOnclick}) => {
    return (
        <Fragment>
            <CardHeader className='pb-0 d-flex justify-content-between'>
                <h3 className="d-inline">{title}{hover}</h3>
                {span1 ? <span>{span1}</span> : ''}
                {span2 ? <span>{span2}</span> : ''}
                {
                    btn && 
                    <Btn attrBtn={{ color: 'primary', onClick: () => {
                        btnOnclick()
                    } }}>Add {btn}</Btn>
                }
            </CardHeader>
        </Fragment>
    );
};

export default HeaderCard;