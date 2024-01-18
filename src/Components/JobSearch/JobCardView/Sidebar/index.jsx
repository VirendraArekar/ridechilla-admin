import Filter from './Filter';
import Location from './Location';
import JobTitleClass from './JobTitle';
import Industry from './Industry';
import SkillClass from './Skill';
import React, { Fragment, useState } from 'react';
import { Col, Row } from 'reactstrap';

const Sidebar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
      };
    return (
        <Fragment>
            <Col xl="3" className="box-col-25 xl-25">
                <div className="job-sidebar">
                    <a className="btn btn-primary job-toggle" href="#javascript" onClick={OnHandelClick}>Job Filter</a>
                    <div className={`job-left-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
                        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                            <Row>
                                <Filter />
                                <Location />
                                <JobTitleClass />
                                <Industry />
                                <SkillClass />
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default Sidebar;