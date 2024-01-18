
import React, { Fragment } from 'react';
import { useContext } from 'react';
import { Maximize } from 'react-feather';
import { UL, LI,} from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';
import Bookmarks from './Bookmark';
import LanguageClass from './Language';
import LogoutClass from './Logout';
import MessageDrop from './MessageDrop';
import MoonLight from './MoonLight';
import Notifications from './Notifiations';
import { Col } from 'reactstrap';

const Rightbar = () => {
    const { sidebarResponsive } = useContext(CustomizerContext);
    //full screen function
    function goFull() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    return (
        <Fragment>
            <Col className="nav-right col-6 pull-right right-header p-0">
                <UL attrUL={{ className: `simple-list d-flex flex-row nav-menus ${sidebarResponsive ? 'open' : ''}` }} >
                    {/* <LI attrLI={{ className: 'language-nav' }}>                        
                        <LanguageClass/>                        
                    </LI> */}
                    <MoonLight />
                    {/* <Bookmarks /> */}
                    <Notifications />
                    {/* <MessageDrop /> */}
                    <LI attrLI={{ className: 'maximize' }}>
                        <a className="text-dark" href="#javascript" onClick={goFull}>
                            <Maximize />
                        </a>
                    </LI>
                    <LogoutClass />
                </UL>
            </Col>
        </Fragment >
    );
};

export default Rightbar;