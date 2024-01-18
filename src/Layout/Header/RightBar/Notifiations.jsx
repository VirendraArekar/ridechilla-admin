import React, { Fragment } from 'react';
import { Bell } from 'react-feather';
import { NotificationData } from '../../../Data/Header/Data';
import { LI, P, UL,H3 } from '../../../AbstractElements';
import { CheckAllNotification } from '../../../Constant';
import { Link } from 'react-router-dom';

const Notifications = () => {
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }} >
                <div className="notification-box">
                    <Bell />
                    <span className="badge rounded-pill badge-primary">4</span>
                </div>
                <UL attrUL={{ className: 'simple-list notification-dropdown onhover-show-div' }} >
                    <LI>
                        <Bell />
                        <H3 attrH3={{ className: 'mb-0'}}>Notifications</H3>
                    </LI>                   
                    {
                        NotificationData.map((items,id)=>{
                            return(
                                <LI key={id}>
                                    <a href="#javascript">
                                        <P>
                                          <i className={`fa fa-circle-o me-3 font-${items.class}`}></i>
                                          {items.desp}
                                          <span className="pull-right">{items.time}</span>    
                                        </P>
                                    </a>
                                </LI>
                            )
                        })
                    }     
                    <LI>
                        <Link to={`${process.env.PUBLIC_URL}/app/email/readmail`} className="btn btn-primary">{CheckAllNotification}</Link>
                    </LI>
                </UL>
            </LI>
        </Fragment>
    );
};
export default Notifications;