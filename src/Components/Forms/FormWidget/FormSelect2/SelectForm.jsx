import React, { Fragment, useState } from 'react';
import { Label } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import Select from 'react-select';
import { options, options2, options3, options4 } from './OptionDatas';
import { DefaultPlaceholder, Disable, DisabledResults, Enable, EnableDisable, HidingTheSearchBox, LimitingRTLsupport, RTLsupport, Select2multiselect, Select2singleselect } from '../../../../Constant';

const SelectForm = () => {
    const [enable, setEnable] = useState(true);
    return (
        <Fragment>
            <div className="mb-2">
                <Label className="col-form-label">{DefaultPlaceholder}</Label>                
                <Select options={options}className="js-example-placeholder-multiple col-sm-12"isMulti />
            </div>
            <div className="mb-2">
                <Label className="col-form-label">{Select2singleselect}</Label>
                <Select options={options2} className="js-example-basic-single col-sm-12" />
            </div>
            <div className="mb-2">
                <Label className="col-form-label">{Select2multiselect}</Label>
                <Select options={options} className="js-example-basic-single col-sm-12" isMulti />
            </div>
            <div className="mb-2">
                <Label className="col-form-label">{RTLsupport}</Label>
                <Select isRtl={true} isMulti options={options}/>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">{LimitingRTLsupport}</Label>
                <Select isMulti options={options} />
            </div>
            <div className="mb-2">
                <Label className="col-form-label">{DisabledResults}</Label>
                <Select options={options3}/>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">{HidingTheSearchBox}</Label>
                <Select options={options4} isMulti />
            </div>
            <div className="mt-3">
                <Label className="col-form-label me-2">{EnableDisable}</Label>
                <Select isDisabled={enable} options={options4} />
                <div className='text-end mt-2'>
                    <Btn attrBtn={{ className: 'js-programmatic-enable me-2', color: 'primary', onClick: () => {setEnable(!enable)} }}>{Enable}</Btn>
                    <Btn attrBtn={{ className: 'js-programmatic-disable', color: 'danger', onClick: () => {setEnable(!enable)} }}>{Disable}</Btn>
                </div>
            </div>
        </Fragment>
    );
};
export default SelectForm;