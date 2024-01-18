import React, { Fragment, useEffect, useContext, useState } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import { MixLayout } from '../../../../Constant';
import CustomizerContext from '../../../../_helper/Customizer';
import CommenUL from '../Sidebar/CommenUL';

const MixLayoutComponent = () => {
    const { addMixBackgroundLayout, mix_background_layout, setMixLayout } = useContext(CustomizerContext);
    const mixLayout = localStorage.getItem('mix_background_layout') || mix_background_layout;
    const [tabvalue, setTabvalue] = useState(1);
    useEffect(() => {
        if (mixLayout !== 'light-only') {
            setMixLayout(false);
        } else {
            setMixLayout(true);
        }
        document.body.classList.add(mixLayout);
    }, [mixLayout]);

    const handleCustomizerMix_Background = (value) => {
        addMixBackgroundLayout(value);
        if (value === 'light-only') {
            document.body.classList.add('light-only');
            document.body.classList.remove('dark-sidebar');
            document.body.classList.remove('dark-only');
        } else if (value === 'dark-sidebar') {
            document.body.classList.remove('light-only');
            document.body.classList.add('dark-sidebar');
            document.body.classList.remove('dark-only');
        } else if (value === 'dark-only') {
            document.body.classList.remove('light-only');
            document.body.classList.remove('dark-sidebar');
            document.body.classList.add('dark-only');
        }
    };
    return (
        <Fragment>
            <H6 className="">{MixLayout}</H6>
            <UL attrUL={{ className: 'simple-list flex-row layout-grid customizer-mix' }}>
                <LI attrLI={{
                    className: `color-layout ${tabvalue === 1 ? 'active' : ''}`, 'data-attr': 'light-only',
                    onClick: () => { handleCustomizerMix_Background('light-only'); setTabvalue(1); }
                }}>
                    <div className="header bg-light">
                        <CommenUL />
                    </div>
                    <div className="body">
                        <UL attrUL={{ className: 'simple-list flex-row' }}>
                            <LI attrLI={{ className: 'bg-light sidebar' }}></LI>
                            <LI attrLI={{ className: 'bg-light body' }}> </LI>
                        </UL>
                    </div>
                </LI>
                <LI attrLI={{
                    className: `color-layout ${tabvalue === 2 ? 'active' : ''}`, dataattr: 'dark-sidebar',
                    onClick: () => { handleCustomizerMix_Background('dark-sidebar'); setTabvalue(2); }
                }}>
                    <div className="header bg-light">
                        <CommenUL />
                    </div>
                    <div className="body">
                        <UL attrUL={{ className: 'simple-list flex-row' }}>
                            <LI attrLI={{ className: 'bg-dark sidebar' }}></LI>
                            <LI attrLI={{ className: 'bg-light body' }}> </LI>
                        </UL>
                    </div>
                </LI>
                <LI attrLI={{
                    className: `color-layout ${tabvalue === 3 ? 'active' : ''}`, dataattr: 'dark-only',
                    onClick: () => { handleCustomizerMix_Background('dark-only'); setTabvalue(3); }
                }}>
                    <div className="header bg-dark">
                        <CommenUL />
                    </div>
                    <div className="body">
                        <UL attrUL={{ className: 'simple-list flex-row' }}>
                            <LI attrLI={{ className: 'bg-dark sidebar' }}></LI>
                            <LI attrLI={{ className: 'bg-dark body' }}> </LI>
                        </UL>
                    </div>
                </LI>
            </UL>
        </Fragment>
    );
};

export default MixLayoutComponent;
