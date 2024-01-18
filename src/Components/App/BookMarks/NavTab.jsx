import React, { Fragment, useCallback, useContext, useState } from 'react';
import { Bookmark, PlusCircle } from 'react-feather';
import { Btn, LI, UL } from '../../../AbstractElements';
import { NewBookmark, Views, CreatedByMe, Favourites, SharedWithMe, MyBookmark, Tags, Newsletter, Notification, } from '../../../Constant';
import BookmarkContext from '../../../_helper/Bookmark';
import BookmarkModal from './ModalBookMark';
import ModalTag from './ModalTag';

const NavTab = () => {
    const { mybookmarkData, setActiveTabss } = useContext(BookmarkContext);
    const [addModal, setaddModal] = useState(false);
    const [tagModal, setTagModal] = useState(false);

    const activeTab = ('1');

    const addToggle = () => {
        setaddModal(!addModal);
    };
    const tagToggle = () => {
        setTagModal(!tagModal);
    };
    const onHandleClick = (id) => {
        setActiveTabss(id);
    };
    const addToggleCallback = useCallback((toggle) => {
        setaddModal(toggle);
    }, []);
    return (
        <Fragment>
            <UL attrUL={{ className: 'main-menu simple-list nav' }} role="tablist">
                <LI attrLI={{ className: 'nav-item' }}>
                    <Btn attrBtn={{ color: 'primary', className: 'btn-block btn-mail', onClick: addToggle }} >
                        <Bookmark className='me-2' /> {NewBookmark}
                    </Btn>
                    <BookmarkModal value={addModal} addToggle={addToggle} addToggleCallback={addToggleCallback} />
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <span className="main-title">{Views}</span>
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => onHandleClick('1')}>
                        <span className="title">{CreatedByMe}</span></a>
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#javascript" className={activeTab === '2' ? 'active' : ''} onClick={() => onHandleClick('2')} >
                        <span className="title">{Favourites} ({mybookmarkData.length})</span></a>
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#javascript" className={activeTab === '3' ? 'active' : ''} onClick={() => onHandleClick('3')}>
                        <span className="title"> {SharedWithMe}</span></a>
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#javascript" className={activeTab === '4' ? 'active' : ''} onClick={() => onHandleClick('4')} >
                        <span className="title"> {MyBookmark}</span></a>
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <hr className='lightborder' />
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <span className="main-title">
                        {' '}{Tags} <span className="pull-right" onClick={tagToggle}><PlusCircle /></span>
                    </span>
                </LI>
                <ModalTag value={tagModal} tagToggle={tagToggle} />
                <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#javascript" className={activeTab === '5' ? 'show' : ''} onClick={() => onHandleClick('5')}  >
                        <span className="title"> {Notification}</span> </a>
                </LI>
                <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#javascript" className={activeTab === '6' ? 'show' : ''} onClick={() => onHandleClick('6')} >
                        <span className="title"> {Newsletter}</span></a>
                </LI>
            </UL>
        </Fragment>
    );
};
export default NavTab;