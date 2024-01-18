import React, { Fragment } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const ProjectRateClass = ({ ProjectRate, register }) => {
    return (
        <Fragment>

            <FormGroup>
                <Label>{ProjectRate}</Label>
                <Input className="form-control" type="number" name="project_rate" placeholder="Enter project Rate" {...register('project_rate', { required: true, max: 10, Number: true, Text: false })} />
            </FormGroup>
        </Fragment>
    );
};

export default ProjectRateClass;