import React, { Fragment, useRef } from 'react';
import { Btn } from '../../../../AbstractElements';
import { Cancel, Print } from '../../../../Constant';
import ItemDescription from './ItemDescription';
import { Col } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';

const PrintComponent = () => {
    const componentRef = useRef(null);    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Fragment>
            <ItemDescription ref={componentRef}/>
            <Col sm="12" className="text-center my-3">
                <Btn attrBtn={{ color: 'primary', className: 'me-2', onClick: handlePrint }}>
                    {Print}
                </Btn>
                <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product`}>
                    <Btn attrBtn={{ color: 'secondary' }}>{Cancel}</Btn>
                </Link>
            </Col>
        </Fragment>
    );
};

export default PrintComponent;