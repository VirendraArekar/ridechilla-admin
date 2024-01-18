import React, { Fragment } from 'react';
import { Heart, MessageSquare, Share } from 'react-feather';
import { P } from '../../../../AbstractElements';
import { LI, UL } from '../../../../AbstractElements';
import CountUp from 'react-countup';
import { Label } from 'reactstrap';
import { Comment, Like,Lorem2,share } from '../../../../Constant';

const SocialIcon = () => {
    return (
        <Fragment>
            <P>{Lorem2}</P>
            <UL attrUL={{ className: "simple-list post-comment d-flex flex-row" }} >
                <LI attrLI={{className:'d-flex'}}>
                    <Label><a href="#javascript"><Heart />&nbsp;&nbsp;{Like} <CountUp end={50} duration={5} /></a></Label>
                </LI>
                <LI attrLI={{className:'d-flex'}}>
                    <Label><a href="#javascript"><MessageSquare />&nbsp;&nbsp;{Comment}<CountUp end={70} duration={5} /></a></Label>
                </LI>
                <LI attrLI={{className:'d-flex'}}>
                    <Label><a href="#javascript"><Share />&nbsp;&nbsp;{share}<CountUp end={20} duration={5} /></a></Label>
                </LI>
            </UL>
        </Fragment>
    );
};

export default SocialIcon;