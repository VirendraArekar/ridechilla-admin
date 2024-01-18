import { P } from '../../../../AbstractElements';
import { Febric, Video, Details, Brand, Discription1, Discription2, Discription3, Discription4 } from '../../../../Constant';
import React, { Fragment, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const ClothsDetails = () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            <Nav tabs className="border-tab mb-0">
                <NavItem id="myTab" role="tablist">
                    <NavLink href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>{Febric}</NavLink>
                </NavItem>
                <NavItem id="myTab" role="tablist">
                    <NavLink href="#javascript" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>{Video}</NavLink>
                </NavItem>
                <NavItem id="myTab" role="tablist">
                    <NavLink href="#javascript" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>{Details}</NavLink>
                </NavItem>
                <NavItem id="myTab" role="tablist">
                    <NavLink href="#javascript" className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>{Brand}</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <P attrPara={{ className: 'mb-0 m-t-20' }}>{Discription1}</P>
                    <P attrPara={{ className: 'mb-0 m-t-20' }}>{Discription2}</P>
                </TabPane>
                <TabPane tabId="2">
                    <P attrPara={{ className: 'mb-0 m-t-20' }}>{Discription3}</P>
                </TabPane>
                <TabPane tabId="3">
                    <P attrPara={{ className: 'mb-0 m-t-20' }}> {Discription4}</P>
                </TabPane>
                <TabPane tabId="4">
                    <P attrPara={{ className: 'mb-0 m-t-20' }}>
                        Product Dimensions : 18 x 18 x 4 cm <br />
                        Date First Available : 31 March 2022 <br />
                        Manufacturer : Tee Stores <br />
                        Item part number : TS-WT721-XS-WHITE <br />
                    </P>
                </TabPane>
            </TabContent>
        </Fragment>
    );
};
export default ClothsDetails;