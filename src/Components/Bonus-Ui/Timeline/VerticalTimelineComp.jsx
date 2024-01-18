import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Edit, Video, Activity, Film } from 'react-feather';
import { H4, P } from '../../../AbstractElements';
import { Certification, Finaltext1, LosAngelesCA, MiamiFL, Miamipara, scrollmodaltext, OnlineCourse, SanFranciscoCA, } from '../../../Constant';
import { Image } from 'react-bootstrap';

const VerticalTimelineComp = () => {
    return (
        <Fragment>
            <VerticalTimeline layout={'1-column'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    animate={true}
                    date="2011 - present"
                    icon={<Edit />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{MiamiFL}</H4>
                    <P>{Miamipara}</P>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    icon={<Video />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{'San Francisco, CA'}</H4>
                    <div className="embed-responsive embed-responsive-21by9 m-t-20">
                        <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen title="myFrame"></iframe>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    animate={true}
                    icon={<Film />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }}>{LosAngelesCA}</H4>
                    <Image className='img-fluid p-t-20'src={require('../../../assets/images/banner/1.jpg')} alt='timelineImg1' />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    animate={true}
                    icon={<Activity />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{SanFranciscoCA}</H4>
                    <audio controls preload="none">
                        <source src="horse.ogg" type="audio/ogg" />
                        {Finaltext1}
                    </audio>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    animate={true}
                    icon={<Film/>}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{OnlineCourse}</H4>
                    <Image className='img-fluid p-t-20'src={require('../../../assets/images/banner/3.jpg')} alt='timelineImg2' /> 
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    animate={true}
                    icon={<Edit />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{Certification}</H4>
                    <P>{scrollmodaltext}</P>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Fragment >
    );
};
export default VerticalTimelineComp;