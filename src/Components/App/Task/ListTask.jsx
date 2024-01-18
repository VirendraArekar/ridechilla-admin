import React, { Fragment, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer } from 'react-feather';
import { Card, CardHeader } from 'reactstrap';
import { CreatedByMe, Print } from '../../../Constant';
import { H3 } from '../../../AbstractElements';
import CreatedByme from './CreatedByme';

const ListOfTask = () => {
    const componentRef = useRef(null);    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Fragment>
            <Card className="mb-0">
                <CardHeader>
                    <H3 attrH3={{ className: 'mb-0'}} >{CreatedByMe}</H3>
                     <a href="#javascript" className='f-w-600' onClick={handlePrint}><Printer className="me-2" />{Print}</a>                       
                </CardHeader>
                <CreatedByme ref={componentRef} />
            </Card>
        </Fragment>
    );
};

export default ListOfTask;