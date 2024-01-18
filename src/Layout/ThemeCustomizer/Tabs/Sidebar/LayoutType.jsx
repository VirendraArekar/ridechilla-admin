import React, { Fragment, useState, useContext, useEffect } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import { Box, layoutType, LTR, RTL } from '../../../../Constant';
import CustomizerContext from '../../../../_helper/Customizer';
import CommenUL from './CommenUL';

const LayoutType = () => {
    const { addLayout } = useContext(CustomizerContext);
    const localStorageLayout = localStorage.getItem('layout_type') ? localStorage.getItem('layout_type') : ConfigDB.data.settings.layout_type;
    const [layout_type, setLayout_type] = useState(localStorageLayout);

    useEffect(() => {
        document.body.classList.add(localStorageLayout);
        if (localStorageLayout === 'box-layout') {
            document.documentElement.dir = 'ltr';
        } else {
            document.documentElement.dir = localStorageLayout;
        }
    }, [localStorageLayout]);

    const handleLayout = (layout) => {
        addLayout(layout);
        setLayout_type(layout);
        if (layout === 'rtl') {
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'rtl';
        } else if (layout === 'ltr') {
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'ltr';
        } else if (layout === 'box-layout') {
            document.body.classList.remove('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.add('box-layout');
            document.documentElement.dir = 'ltr';
        }
    };

    return (
        <Fragment>
            <H6>{layoutType}</H6>
            <UL attrUL={{ className: 'simple-list main-layout layout-grid' }}>
                <LI
                    attrLI={{
                        className: `${layout_type === 'ltr' ? 'active' : ''}`, dataattr: "ltr", onClick: () => handleLayout('ltr')
                    }}>
                    <div className="header bg-light">
                        <CommenUL />
                    </div>
                    <div className="body">
                        <UL attrUL={{ className: 'simple-list' }}>
                            <LI attrLI={{ className: "bg-light sidebar" }}></LI>
                            <LI attrLI={{ className: "bg-light body" }}>
                                <span className="badge badge-primary">{LTR}</span>
                            </LI>
                        </UL>
                    </div>
                </LI>
                <LI
                    attrLI={{
                        className: `${layout_type === 'rtl' ? 'active' : ''}`, dataattr: "rtl",
                        onClick: () => handleLayout('rtl')
                    }}
                >
                    <div className="header bg-light">
                        <CommenUL />
                    </div>
                    <div className="body">
                        <UL attrUL={{ className: 'simple-list' }}>
                            <LI attrLI={{ className: 'bg-light body' }}>
                                <span className="badge badge-primary">{RTL}</span>
                            </LI>
                            <LI attrLI={{ className: 'bg-light sidebar' }}></LI>
                        </UL>
                    </div>
                </LI>
                <LI attrLI={{
                    className: `px-3 ${layout_type === 'box-layout' ? 'active' : ''}`, dataattr: "ltr",
                    onClick: () => handleLayout('box-layout')
                }}
                >
                    <div className="header bg-light">
                        <CommenUL />
                    </div>
                    <div className="body">
                        <UL attrUL={{ className: 'simple-list' }}>
                            <LI attrLI={{ className: 'bg-light sidebar' }}></LI>
                            <LI attrLI={{ className: 'bg-light body' }}>
                                <span className="badge badge-primary">{Box}</span>
                            </LI>
                        </UL>
                    </div>
                </LI>
            </UL>
        </Fragment>
    );
};
export default LayoutType;