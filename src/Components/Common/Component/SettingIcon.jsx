import React from "react";
import {UL,LI} from '../../../AbstractElements';

const SettingIcon = () => {
    return (        
        <div className="card-header-right">
            <UL attrUL={{className:"simple-list list-unstyled card-option"}}>
                <LI>
                    <div><i className="icon-settings"></i></div>
                </LI>
            </UL>
        </div>
    );
};
export default SettingIcon;