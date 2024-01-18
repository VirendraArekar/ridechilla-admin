import React from 'react';
import { H4, P, Image } from '../../../AbstractElements';
import { EmailAddress, General } from '../../../Constant';

const Printpreview = ({selectedUser})=> {   
    return (
      <div className="profile-mail pt-0" id="DivIdToPrint">
        <div className="d-flex">
          <Image attrImage={{ className: 'img-100 img-fluid m-r-20 rounded-circle', id: 'updateimg', src: `${selectedUser.avatar}`}} />
          <div className="media-body mt-0">
            <H4>
              <span id="printname">{selectedUser.name} </span>
              <span id="printlast">{selectedUser.surname}</span>
            </H4>
            <P id="printmail">{selectedUser.name}{'@gmail.com'}</P>
          </div>
        </div>
        <div className="email-general">
          <H4>{General}</H4>
          <P>{EmailAddress}: <span className="font-primary" id="mailadd">{selectedUser.surname}{'@gmail.com'}</span></P>
        </div>
      </div>
    );
  }
export default Printpreview;