import React, { Fragment, useState, useContext } from 'react';
import { Moon } from 'react-feather';
import { LI } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';

const MoonLight = () => {
    const { addMixBackgroundLayout, layout } = useContext(CustomizerContext);
    const [moonlight, setMoonlight] = useState(false);
    const layouttype = localStorage.getItem('layout_type') ? localStorage.getItem('layout_type') : layout;
    const MoonlightToggle = (light) => {
        if (light) {
            addMixBackgroundLayout(`light-only`);
            document.body.className = `light-only ${layouttype}`;
            setMoonlight(!light);
        } else {
            addMixBackgroundLayout(`dark-only`);
            document.body.className = `dark-only ${layouttype}`;
            setMoonlight(!light);
        }
    };
    return (
        <Fragment>
            <LI>
                <div className="mode" onClick={() => MoonlightToggle(moonlight)} >
                    {moonlight ? <Moon /> : <Moon />}
                </div>
            </LI>
        </Fragment>
    );
};

export default MoonLight;