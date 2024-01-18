import React, { Fragment } from "react";
import { Footerlight, PageLayout } from "../../Constant";
import SamplePage from "./SimplePage";

const FooterLight = () => {
    return (
        <Fragment>
            <SamplePage mainTitle={Footerlight} title={Footerlight} parent={PageLayout} />  
        </Fragment>
    )
}
export default FooterLight;