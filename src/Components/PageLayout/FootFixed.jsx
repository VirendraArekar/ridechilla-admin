import React, { Fragment } from "react";
import { footerFixed, PageLayout } from "../../Constant";
import SamplePage from "./SimplePage";
import {} from '../../Constant';

const FooterFixed = () => {
    return (
        <Fragment>
            <SamplePage mainTitle={footerFixed} title={footerFixed} parent={PageLayout} />  
        </Fragment>
    )
}
export default FooterFixed;