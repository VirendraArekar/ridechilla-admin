import React, { Fragment, useRef } from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Btn } from '../../../../AbstractElements';
import { Cancel, Print } from '../../../../Constant';
import { useReactToPrint } from 'react-to-print';

const InvoicePrint = (props) => {
    const {componentRef} = props;
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
  return (
        <Fragment>
            <Col sm="12" className="text-center mt-3">
                <Btn attrBtn={{ color: 'primary', className: 'me-2', onClick: handlePrint }}>
                    {Print}
                </Btn>
                <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product`}>
                    <Btn attrBtn={{ color: 'secondary' }}>{Cancel}</Btn>
                </Link>
            </Col>  
        </Fragment>
  )
}

export default InvoicePrint;