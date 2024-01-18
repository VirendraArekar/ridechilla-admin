import React, { Fragment } from 'react';
import { H4,H6,P } from '../../../../AbstractElements';
import { ContactCreated, ContactDesc, ContactHistory, Contactiscreatedviamail, ContactTime } from '../../../../Constant';

const HistoryClass = () => {
    const closehistory = () => {
        document.querySelector('.history').classList.remove('show');
    };
    return (
        <Fragment>
            <div id="right-history" className="history">
                <div className="modal-header p-20 border-bottom">
                    <H4 attrH4={{ className: 'modal-title w-100' }} >{ContactHistory}
                        <span className="pull-right">
                            <a className="closehistory" href="#javaScript" onClick={closehistory}>
                                <i className="icofont icofont-close"></i>
                            </a>
                        </span>
                    </H4>
                </div>
                <div className="history-details">
                    <div className="text-center"><i className="icofont icofont-ui-edit"></i>
                        <P>{ContactDesc}</P>
                    </div>
                    <div className="media d-flex"><i className="icofont icofont-star me-3"></i>
                        <div className="media-body flex-grow-1 mt-0">
                            <H6 attrH6={{ className: 'mt-0' }} >{ContactCreated}</H6>
                            <P attrPara={{ className: 'mb-0' }} >{Contactiscreatedviamail}</P><span className="f-12">{ContactTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HistoryClass;