import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { LI, H4, UL } from '../../AbstractElements';
import { useContext } from 'react';
import CustomizerContext from '../../_helper/Customizer';

const SidebarMenulist = ({ MENUITEMS, t }) => {
    const { setClickEvent } = useContext(CustomizerContext);
    const { pathname } = useLocation()
    const [activeMenu, setActiveMenu] = useState()
    const [childActiveMenu, setChildActiveMenu] = useState()
    const [childActiveLink, setChildActiveLink] = useState()
    const [subChildActiveLink, setsubChildActiveLink] = useState('Default')

    useEffect(() => {
        if (pathname) {
            MENUITEMS.forEach((Items) => {
                Items.Items && Items.Items.filter((childrens) => {
                    if (childrens.children ? childrens.children.filter((path) => {
                        if (path.path) {
                            if (pathname === path.path) { setsubChildActiveLink(path.title); return true } return false;
                        } else {
                            if (path.children && path.children.filter((child) => {
                                if (child.path === pathname) {
                                    setChildActiveLink(child.title);
                                    return true
                                } return false;
                            }).length > 0) { setChildActiveMenu(path.title); return true } return false;
                        }
                    }).length > 0 : (childrens.path === pathname && setActiveMenu(childrens.title))) { setActiveMenu(childrens.title); return true }
                    return false;
                })
            })
        }
    }, [pathname, MENUITEMS])

    return (
        <Fragment>
            {MENUITEMS.map((Item, i) => (
                < Fragment key={i} >
                    <LI attrLI={{ className: 'sidebar-main-title simple-list' }} key={i}>
                        <div>
                            <H4 attrH4={{ className: "lan-1" }}>{Item.menutitle}</H4>
                        </div>
                    </LI>
                    {Item.Items.map((menuItem, i) => (
                        <LI attrLI={{ className: 'sidebar-list simple-list hoverd' }} key={i}>
                            {menuItem.type === 'sub' && (
                                <a href="javascript"
                                    className={`sidebar-link sidebar-title ${menuItem.title === activeMenu ? 'active' : ''}`}
                                    onClick={(event) => { event.preventDefault(); setActiveMenu(menuItem.title !== activeMenu && menuItem.title) }} >
                                    {menuItem.icon !== undefined && <menuItem.icon />}
                                    <span className='lan-3'>{t(menuItem.title)}</span>
                                    {menuItem.badge && <span className='badge badge-primary text-white'>2</span>}
                                    <div className="according-menu">
                                        {menuItem.title === activeMenu ? (<i className="fa fa-angle-down me-0"></i>) : (<i className="fa fa-angle-right me-0"></i>)}
                                    </div>
                                </a>
                            )}
                            {menuItem.type === 'link' && (
                                <Link to={menuItem.path} className={`sidebar-link menu-title ${menuItem.title === activeMenu ? 'active' : ''}`} onClick={() => { setActiveMenu(menuItem.title);  setClickEvent(pre => !pre) }}>{menuItem.icon !== undefined && <menuItem.icon />}<span>{(menuItem.title)}</span>
                                </Link>
                            )}
                            {menuItem.children && (
                                <UL attrUL={{
                                    className: `simple-list sidebar-submenu ${menuItem.title === activeMenu ? 'd-block' : 'd-none'}`,

                                }}>
                                    {menuItem.children.map((childrenItem, index) => {
                                        return (
                                            <LI key={index}>
                                                {childrenItem.type === 'sub' && (
                                                    <a href="javascript" className={`${childActiveMenu === childrenItem.title ? 'active' : ''}`}
                                                        onClick={(event) => { event.preventDefault(); setChildActiveMenu(childrenItem.title !== childActiveMenu && childrenItem.title);  }}>
                                                        {(childrenItem.title)}
                                                        <div className="according-menu">
                                                            {childActiveMenu === childrenItem.title ? (<i className="fa fa-angle-down me-0"></i>) : (<i className="fa fa-angle-right me-0"></i>)}
                                                        </div>
                                                    </a>
                                                )
                                                }
                                                {
                                                    childrenItem.type === 'link' && (
                                                        <Link
                                                            to={childrenItem.path} className={`${childrenItem.title === subChildActiveLink ? 'active' : ''}`}
                                                            onClick={() => { setsubChildActiveLink(childrenItem.title);  setClickEvent(pre => !pre) }} >
                                                            {t(childrenItem.title)}
                                                        </Link>
                                                    )
                                                }
                                                {
                                                    childrenItem.children && (
                                                        <UL attrUL={{
                                                            className: 'simple-list nav-sub-childmenu submenu-content',
                                                            style: { display: `${childrenItem.title === childActiveMenu ? 'block' : 'none'}` }
                                                        }}>
                                                            {childrenItem.children.map(
                                                                (childrenSubItem, key) => (
                                                                    <LI key={key}>
                                                                        {childrenSubItem.type === 'link' && (
                                                                            <Link to={childrenSubItem.path} className={`${childActiveLink === childrenSubItem.title ? 'active' : ''}`}
                                                                                onClick={() => { setChildActiveLink(childrenSubItem.title); setClickEvent(pre => !pre) }}>
                                                                                {t(childrenSubItem.title)}
                                                                            </Link>
                                                                        )}
                                                                    </LI>
                                                                )
                                                            )}
                                                        </UL>
                                                    )
                                                }
                                            </LI>
                                        );
                                    })}
                                </UL>
                            )}
                        </LI>
                    ))}
                </Fragment>
            ))
            }
        </Fragment >
    )
}
export default SidebarMenulist