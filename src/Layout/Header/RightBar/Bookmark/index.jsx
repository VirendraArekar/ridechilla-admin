import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Star } from 'react-feather';
import { MENUITEMS } from '../../../Sidebar/Menu';
import { LI } from '../../../../AbstractElements';
import CustomContext from '../../../../_helper/Customizer';
import BookmarkMain from './BookmarkMain';

const Bookmarks = () => {
    const mainMenu = MENUITEMS;
    const [searchIcon, setSearchIcon] = useState(false);
    const { setIsClose } = useContext(CustomContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const [bookmarkItems, setBookmarkItems] = useState([]);
    const [bookmarkDropDown, setBookmarkDropDown] = useState(false);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('');
            setSearchResult([]);
            setIsClose(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        mainMenu?.map(menuItems => {
            menuItems.Items.filter(items => {
                if (items.bookmark) {
                    setBookmarkItems(bookmarkItems => [...bookmarkItems, items]);
                }
                return items;
            });
            return menuItems;
        });
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [mainMenu, escFunction]);
    const addFix = () => {
        setIsClose(true);
    };
    const removeFix = useCallback(() => {
        setSearchValue('');
        setIsClose(false);
    }, [setIsClose]);
    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchIcon(true);
        } else {
            setSearchIcon(false);
        }
    };
    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix();
        const items = [];
        setSearchValue(keyword);
        mainMenu.map(menuItems => {
            menuItems.Items.filter(Items => {
                if (Items.title.toLowerCase().includes(keyword) && Items.type === 'link') {
                    items.push(Items);
                }
                if (!Items.children) return false;
                Items.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = Items.icon;
                        items.push(subItems);
                    }
                    if (!subItems.children) return false;
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = Items.icon;
                            items.push(suSubItems);
                        }
                        return suSubItems;
                    });
                    return subItems;
                });
                setSearchResult(items);
                checkSearchResultEmpty(items);
                return Items;
            });
            return menuItems;
        });
    };
    const setCallbackBookmark = useCallback((valueAdd) => {
        setBookmarkItems(valueAdd);
    }, []);
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
                <div className="notification-box" onClick={() => setBookmarkDropDown(!bookmarkDropDown)}><Star /></div>
                <div className={`onhover-show-div bookmark-flip ${bookmarkDropDown ? 'active' : ''}`}>
                    <BookmarkMain removeFix={removeFix} bookmarkItems={bookmarkItems} setCallbackBookmark={setCallbackBookmark} setSearchValue={setSearchValue} setSearchResult={setSearchResult} searchIcon={searchIcon} searchValue={searchValue} handleSearchKeyword={handleSearchKeyword} setBookmarkItems={setBookmarkItems} searchResult={searchResult} />
                </div>
            </LI>
        </Fragment >
    );
};
export default Bookmarks;