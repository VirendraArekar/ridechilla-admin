import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Edit, Video, Activity,Film } from 'react-feather';
import { H4, P } from '../../../AbstractElements';
import { FinalSection, Finaltext, Finaltext1, Finaltext2, Titleofsection,Secondsection, Thirdsection, Fourthsection, Fifthsection } from '../../../Constant';
import { Image } from 'react-bootstrap';

const Timeline1 = () => {
    return (
        <Fragment>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    animate={true}
                    date="Jan 14"
                    icon={<Edit />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }}>{Titleofsection} 1</H4>
                    <P>{Finaltext}</P>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 18"
                    icon={<Video />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{Secondsection} 2</H4>
                    <div className="embed-responsive embed-responsive-21by9 m-t-20">
                        <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen title="myFrame"></iframe>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 24"
                    animate={true}
                    icon={<Film/>}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{Thirdsection} 3</H4>
                    <Image className='img-fluid p-t-20'src={require('../../../assets/images/banner/1.jpg')} alt='timelineImg1' />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 14"
                    animate={true}
                    icon={<Activity />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{Fourthsection} 4</H4>
                    <audio controls preload="none">
                        <source src={require('../../../assets/audio/horse.ogg')} type="audio/ogg" />
                        {Finaltext1}
                    </audio>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Feb 18"
                    animate={true}
                    icon={<Film/>}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{Fifthsection} 5</H4>
                    <Image className='img-fluid p-t-20'src={require('../../../assets/images/banner/3.jpg')} alt='timelineImg2' />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Feb 26"
                    animate={true}
                    icon={<Edit />}>
                    <H4 attrH4={{ className: 'vertical-timeline-element-subtitle' }} >{FinalSection}</H4>
                    <P>{Finaltext2}</P>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Fragment>
    );
};
export default Timeline1;