import React, { Fragment } from 'react';
import { noBookmarktext } from '../../../../Constant';

const EmpltyClass = ({ searchIcon, search }) => {
    return (
        <Fragment>
            <div className={`${search ? `Typeahead-menu empty-menu ${searchIcon ? 'is-open' : ''}` : `Typeahead-menu empty-bookmark ${searchIcon ? 'is-open' : ''}`} `}>
                <div className="tt-dataset tt-dataset-0">
                    <div className="EmptyMessage">{noBookmarktext}</div>
                </div>
            </div>
        </Fragment>
    );
};
export default EmpltyClass;