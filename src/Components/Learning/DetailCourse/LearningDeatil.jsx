import Comments from './Comments';
import BlogDetails from './BlogDetails';
import React, { Fragment } from 'react';
import { Col, Card } from 'reactstrap';

const LearningDeatil = () => {
  return (
    <Fragment>
      <Col xl="9 xl-60" className='box-col-70'>
        <div className="blog-single">
          <BlogDetails />
          <Card className="comment-box">
            <Comments />
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};

export default LearningDeatil;