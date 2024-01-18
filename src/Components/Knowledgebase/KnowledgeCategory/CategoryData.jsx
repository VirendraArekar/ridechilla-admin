import React, { Fragment, useContext } from 'react';
import { H5, H3, LI, UL } from '../../../AbstractElements';
import JobSearchContext from '../../../_helper/JobSearch';
import { Archive } from 'react-feather';
import { Col, Row } from 'reactstrap';
import { Arrowsvg, Filesvg } from '../Svg';
import { knowledgearticl } from '../../../Constant';

const CategoryData = () => {
    const { searchData } = useContext(JobSearchContext);

    return (
        <Fragment>
            <Col sm="12">
                <div className="header-faq">
                    <H5 attrH5={{ className: 'mb-0' }} >{knowledgearticl}</H5>
                </div>
                <Row className="browse">
                    {searchData && searchData.map((data) => {
                        return (
                            <Col xl="4" className={data.class} key={data.id}>
                                <div className="browse-articles browse-bottom">
                                    <H3><span><Archive /></span>{data.inspantitle}{data.title}</H3>
                                    <UL attrUL={{ className: 'simple-list' }}>
                                        <LI><a href='#javascript'><H5><Filesvg /> {data.text1}</H5></a></LI>
                                        <LI><a href='#javascript'><H5><Filesvg /> {data.text2}</H5></a></LI>
                                        <LI><a href='#javascript'><H5><Filesvg /> {data.text3}</H5></a></LI>
                                        <LI><a href='#javascript'><H5><Filesvg /> {data.text4}</H5></a></LI>
                                        <LI><a href='#javascript' className="f-w-600 font-primary"><Arrowsvg /><span>{data.text5}</span></a></LI>
                                    </UL>
                                </div>
                            </Col>
                        );
                    })
                    }
                </Row>
            </Col>
        </Fragment>
    );
};
export default CategoryData;