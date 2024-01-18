import FindCourseClass from './FindCourse';
import CategoriesClass from './Categories';
import UpcomingClass from './UpcomingClass';
import React, { Fragment , useState } from 'react';
import { Row } from 'reactstrap';

const LearningFilter = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
      };
    return (
        <Fragment>
            <div className="md-sidebar job-sidebar">
                <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>Learning Filter</a>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
                    <div className='default-according style-1 job-accordion' id='accordionoc'>
                        <Row>
                            <FindCourseClass />
                            <CategoriesClass />
                            <UpcomingClass />
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LearningFilter;