import React from 'react';
import { Card, CardBody } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';

const CommonHeaderClass = (props) => {
  return (
    <Card>
      <HeaderCard title={props.title} />
      <CardBody>
        <pre className="helper-classes">
          {props.children}
        </pre>
      </CardBody>
    </Card>
  );
};

export default CommonHeaderClass;