import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { MENUITEMS } from '../../Sidebar/Menu';
import { Search } from 'react-feather';
import { Col, Input } from 'reactstrap';
import CustomizerContext from '../../../_helper/Customizer';
import ListOfMenu from '../RightBar/Bookmark/ListOfMenu';
import EmpltyClass from '../RightBar/Bookmark/EmptyClass';

const Searchbar = () => {
    const mainmenu = MENUITEMS;
    const [searchValue, setSearchValue] = useState('');
    const [searchIcon, setSearchIcon] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const { setIsClose } = useContext(CustomizerContext);
    const [IsOpen, setIsOpen] = useState(false);

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('');
            setSearchResult([]);
            setIsClose(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [escFunction, searchValue]);

    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchIcon(true);
        } else {
            setSearchIcon(false);
        }
    };
    const addFix = () => {
        setSearchToggle(true);
    };
    const removeFix = useCallback(() => {
        setSearchValue('');
        setSearchToggle(false);
        setIsClose(false);
    }, []);
    useEffect(() => {
        if (!IsOpen) {
            setSearchValue('');
            setSearchToggle(false);
            setIsClose(false);
        }
    }, [IsOpen])
    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix();
        const items = [];
        setSearchValue(keyword);
        mainmenu.map(menuItems => {
            menuItems.Items.filter(mItems => {
                if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
                    items.push(mItems);
                }
                if (!mItems.children) return false;
                mItems.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = mItems.icon;
                        items.push(subItems);
                    }
                    if (!subItems.children) return false;
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = mItems.icon;
                            items.push(suSubItems);
                        }
                        return suSubItems;
                    });
                    return subItems;
                });
                checkSearchResultEmpty(items);
                setSearchResult(items);
                return mItems;
            });
            return menuItems;
        });
    };
    return (
        <Fragment>
            <Col className="left-header horizontal-wrapper ps-0">
                {/* <div className={`input-group search-form ${IsOpen ? 'open' : ''}`}>
                    <Input type="text" placeholder="Search Here.."
                        defaultValue={searchValue}
                        onChange={(e) => { handleSearchKeyword(e.target.value) }} />
                    <span className="input-group-text mobile-search" >
                        <Search onClick={() => { setIsOpen(!IsOpen); }} />
                    </span>
                    <ListOfMenu searchValue={searchValue} searchResult={searchResult} removeFix={removeFix} searchBar={true} searchToggle={searchToggle} />
                    <EmpltyClass searchIcon={searchIcon} search={true} />
                </div> */}
            </Col>
        </Fragment >
    );
};
export default Searchbar;