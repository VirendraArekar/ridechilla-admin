import { getallCardTotal, getCartTotal } from '../../../../Services/Ecommerce.service';
import { ItemDescriptions, Hours, Sub_total, Rate,Total } from '../../../../Constant';
import { H6,H4, P } from '../../../../AbstractElements';
import InvoiceHeader from './InvoiceHeader';
import InvoiceDescription from './InvoiceDescription';
import PrintInvoice from './PrintInvoice';
import { Col, Label, Row, Table, Container, CardBody, Card } from 'reactstrap';
import React, { useContext } from 'react';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import ProductContext from '../../../../_helper/Ecommerce/Product';

const ItemDescription = React.forwardRef((props,ref)=> {
    const {cart}= useContext(CartContext);
    const { symbol } = useContext(ProductContext);
    return (
        <div ref={ref}>
            <Container className='invoice'>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody  >
                                <div>
                                    <InvoiceHeader />
                                    <InvoiceDescription />
                                        <div className="table-responsive invoice-table" id="table">
                                            <Table bordered striped>
                                                <tbody>
                                                    <tr>
                                                        <td className="item">
                                                            <H4 attrH4={{ className: 'p-2 mb-0' }}>{ItemDescriptions}</H4>
                                                        </td>
                                                        <td className="Hours">
                                                            <H4 attrH4={{ className: 'p-2 mb-0' }}>{Hours}</H4>
                                                        </td>
                                                        <td className="Rate">
                                                            <H4 attrH4={{ className: 'p-2 mb-0' }}>{Rate}</H4>
                                                        </td>
                                                        <td className="subtotal">
                                                            <H4 attrH4={{ className: 'p-2 mb-0' }}>{Sub_total}</H4>
                                                        </td>
                                                    </tr>
                                                    {cart?.map((item) => {
                                                        return (
                                                            <tr key={item.id}>
                                                                <td>
                                                                    <Label className='mb-2'>{item.name}</Label>
                                                                    <p>{item.note}</p>
                                                                </td>
                                                                <td>
                                                                    <P attrPara={{ className: 'itemtext digits' }}>{symbol}{item.qty}</P>
                                                                </td>
                                                                <td>
                                                                    <P attrPara={{ className: 'itemtext digits' }}>{symbol}{item.discountPrice}</P>
                                                                </td>
                                                                <td className="payment digits">
                                                                    <P attrPara={{ className: 'itemtext digits' }}>{symbol}{getCartTotal(item)}</P>
                                                                </td>                                                                    
                                                            </tr>
                                                        );
                                                    })}    
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className='Rate'><H6 attrH6={{className:'mb-0 p-2'}}>{Total}</H6></td>
                                                        <td className='payment degits'><H6 attrH6={{className:'mb-0 p-2'}}>{symbol}{getallCardTotal(cart)}</H6></td>
                                                    </tr>                                                                                                      
                                                </tbody>
                                            </Table>
                                        </div>
                                        <PrintInvoice />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        )  
});

export default ItemDescription;