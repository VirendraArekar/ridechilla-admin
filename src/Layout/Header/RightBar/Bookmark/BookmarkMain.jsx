import React, { Fragment } from 'react'
import { Input } from 'reactstrap'
import { UL,LI } from '../../../../AbstractElements'
import BackBtns from './BackBtn'
import EmpltyClass from './EmptyClass'
import ListOfMenu from './ListOfMenu'
import RemoveBookmark from './RemoveBookmark'

const BookmarkMain = ({removeFix,bookmarkItems,setCallbackBookmark,setSearchValue,setSearchResult,searchIcon,searchValue ,handleSearchKeyword,setBookmarkItems,searchResult}) => {
  return (
    <Fragment>
        <div className="flip-card">
            <div className="flip-card-inner">
                <RemoveBookmark bookmarkItems={bookmarkItems} />
                <div className="back">
                    <UL>
                        <LI>
                            <div className="bookmark-dropdown flip-back-content">
                                <Input type="text" placeholder="search..." value={searchValue}
                                    onChange={(e) => handleSearchKeyword(e.target.value)} />
                                <ListOfMenu removeFix={removeFix} bookmarkItems={bookmarkItems} setCallbackBookmark={setCallbackBookmark} searchValue={searchValue} setBookmarkItems={setBookmarkItems} searchResult={searchResult} setSearchValue={setSearchValue}
                                    setSearchResult={setSearchResult} />
                                <EmpltyClass searchIcon={searchIcon} />
                            </div>
                        </LI>
                        <BackBtns />
                    </UL>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
export default BookmarkMain