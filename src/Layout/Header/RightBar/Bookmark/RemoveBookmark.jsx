import React, { Fragment } from 'react';
import { Star } from 'react-feather';
import { H3, LI, UL } from '../../../../AbstractElements';
import { Bookmark } from '../../../../Constant';
import BookmarkList from './BookmarkList';

const RemoveBookmark = ({ bookmarkItems }) => {
    return (
        <Fragment>
            <div className="front">
                <UL attrUL={{ className: 'simple-list droplet-dropdown bookmark-dropdown' }}>
                    <LI attrLI={{ className: 'gradient-primary' }}><Star />
                        <H3 attrH3={{ className:'f-18 mb-0' }}>{Bookmark}</H3>
                    </LI>
                    <BookmarkList bookmarkItems={bookmarkItems} />
                </UL>
            </div>
        </Fragment>
    );
};
export default RemoveBookmark;