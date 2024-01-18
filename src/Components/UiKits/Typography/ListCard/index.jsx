import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H3, H6, LI, OL, UL } from '../../../../AbstractElements';
import { FontawesomeList, ICOIconList, ListingTypography, Listrtext, OrderList, ThemfyList, UnorderList } from '../../../../Constant';

const ListCard = () => {
  let ULtypography = [1,2,3,4,5,6,7,8,9,10];
  let OLtypography = ['<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>', `<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`, `<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`, `<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`, `<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`];
  let List = [1,2,3,4,5,6,7,8];
  return (
    <Col sm="12 listing">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{ListingTypography}</H3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" lg="4">
              <H6 attrH6={{ className: 'sub-title' }}>{UnorderList}</H6>
              <UL attrUL={{ as: 'ul', className: 'mb-3 simple-list' }}>
                  {
                    ULtypography.map((item,index)=>{
                      return(
                        <LI key={index}>{Listrtext}</LI>
                      )
                    })
                  }
              </UL>
            </Col>
            <Col sm="12" lg="4">
              <H6 attrH6={{ className: 'sub-title' }}>{OrderList}</H6>
              <OL attrOL={{ className: 'd-block simple-list' }}>
                <LI val={Listrtext} />
                <LI val={Listrtext} />
                <LI val={Listrtext} />
                <LI>
                  <OL attrOL={{ className: 'd-block simple-list' }}>
                    <LI val={Listrtext} />
                    <LI val={Listrtext} />
                    <LI val={Listrtext} />
                    <LI val={Listrtext} />
                    <LI val={Listrtext} />
                  </OL>
                </LI>
                <LI val={Listrtext} />
                <LI val={Listrtext} />
              </OL>
            </Col>
            <Col sm="12" lg="4">
              <H6 attrH6={{ className: 'sub-title' }}>{OrderList}</H6>
              <UL attrUL={{ as: 'dl', className: 'mb-3 simple-list' }} listItem={OLtypography} />
            </Col>
            <Col sm="12" lg="4">
              <H6 attrH6={{ className: 'sub-title' }}>{FontawesomeList}</H6>
              <UL attrUL={{ as: 'ul', className: 'simple-list' }}>
                {
                  List.map((item,index)=>{
                    return(
                      <LI key={index}>
                        <i className="fa fa-angle-double-right txt-primary me-2"></i>
                        {Listrtext}
                      </LI>  
                    )
                  })
                }
              </UL>
            </Col>
            <Col sm="12" lg="4">
              <H6 attrH6={{ className: 'sub-title' }}>{ICOIconList}</H6>
              <UL attrUL={{ as: 'ul', className: 'simple-list' }}>
                {
                  List.map((item,index)=>{
                    return(
                      <LI key={index}>
                        <i className="fa fa-caret-right txt-secondary me-2"></i>
                        {Listrtext}
                      </LI>  
                    )
                  })
                }
              </UL>
            </Col>
            <Col sm="12" lg="4">
              <H6 attrH6={{ className: 'sub-title' }}>{ThemfyList}</H6>
              <UL attrUL={{ as: 'ul', className: 'simple-list' }}>
                {
                  List.map((item,index)=>{
                    return(
                      <LI key={index}>
                        <i className="icofont icofont-ui-rate-add txt-success me-2"></i>
                        {Listrtext}
                      </LI>  
                    )
                  })
                }
              </UL>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ListCard;