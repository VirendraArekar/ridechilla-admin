import { H4, P, UL, LI, Btn } from '../../../../AbstractElements';
import React, { Fragment } from 'react';
import { AgencyExperience, AgencyExptext1, AgencyExptext2, AgencyExptext3, AgencyExptext4, AgencyExptext5, JobDetaildec, Perks, Perkstext1, Perkstext2, Perkstext3, Perkstext4, Perkstext5, Qualifications, qualifytext1, qualifytext2, qualifytext3, qualifytext4, qualifytext5, qualifytext6, qualifytext7, qualifytext8, qualifytext9, Savethisjob, share } from '../../../../Constant';

const JobDescription = () => {
    return (
        <Fragment>
            <div className="job-description">
                <H4>Job Description</H4>
                <P attrPara={{ className: 'text-start' }} >{JobDetaildec}</P>
                </div>
            <div className="job-description">
                <H4>{Qualifications}</H4>
                <UL attrUL={{className:'simple-list'}}>
                    <LI>{qualifytext1}</LI>
                    <LI>{qualifytext2}</LI>
                    <LI>{qualifytext3}</LI>
                    <LI>{qualifytext4}</LI>
                    <LI>{qualifytext5}</LI>
                    <LI>{qualifytext6}</LI>
                    <LI>{qualifytext7}</LI>
                    <LI>{qualifytext8}</LI>
                    <LI>{qualifytext9}</LI>
                </UL>
            </div>
            <div className="job-description">
                <H4>{AgencyExperience}</H4>
                <UL attrUL={{className:'simple-list'}}>
                    <LI>{AgencyExptext1}</LI>
                    <LI>{AgencyExptext2}</LI>
                    <LI>{AgencyExptext3}</LI>
                    <LI>{AgencyExptext4}</LI>
                    <LI>{AgencyExptext5}</LI>
                </UL>
            </div>
            <div className="job-description">
                <H4>{Perks}</H4>
                <UL attrUL={{className:'simple-list'}}>
                    <LI>{Perkstext1}</LI>
                    <LI>{Perkstext2}</LI>
                    <LI>{Perkstext3}</LI>
                    <LI>{Perkstext4}</LI>
                    <LI>{Perkstext5}</LI>
                </UL>
            </div>
            <div className="job-description">
                <Btn attrBtn={{ color: 'primary', className:'me-1'}}><span><i className="fa fa-check" ></i></span>{Savethisjob}</Btn>
                <Btn attrBtn={{ color: 'primary'}} ><span><i className="fa fa-share-alt"></i></span> {share}</Btn>
            </div>
        </Fragment>
    );
};

export default JobDescription;