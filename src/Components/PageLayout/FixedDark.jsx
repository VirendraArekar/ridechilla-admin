import React, { Fragment } from "react";
import { Footerdark, PageLayout } from "../../Constant";
import SamplePage from "./SimplePage";

const FooterDark = () => {
    return (
        <Fragment>
            <SamplePage mainTitle={Footerdark} title={Footerdark} parent={PageLayout} />         
        </Fragment>
    )
}
export default FooterDark;