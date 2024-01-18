import React, { Fragment } from 'react'
import { UncontrolledTooltip } from 'reactstrap'
import { LI, Image, UL } from '../../../AbstractElements'
import one from '../../../assets/images/user/1.jpg';
import two from '../../../assets/images/user/2.png';
import three from '../../../assets/images/user/3.jpg';
import five from '../../../assets/images/user/5.jpg';
import eight from '../../../assets/images/user/8.jpg';
import eleven from '../../../assets/images/user/11.png';
import { AndewJon, BuckyBarnes, ComerenDiaz, JasonBorne, JohnyWaston } from '../../../Constant'

const Customers = () => {
    return (
        <Fragment>
            <UL attrUL={{ className: 'simple-list' }}>
                <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${three}`, alt: 'ThirdImg', id: 'UncontrolledTooltipExample' }} />
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                        {JohnyWaston}
                    </UncontrolledTooltip>
                </LI>
                <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${five}`, alt: 'FifthImg', id: 'UncontrolledTooltipExample1' }} />
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample1">
                        {AndewJon}
                    </UncontrolledTooltip>
                </LI>
                <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${one}`, alt: 'FirstImg', id: 'UncontrolledTooltipExample2' }} />
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample2">
                        {ComerenDiaz}
                    </UncontrolledTooltip>
                </LI>
                <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${two}`, alt: 'secondImg', id: 'UncontrolledTooltipExample3' }} />
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample3">
                        {BuckyBarnes}
                    </UncontrolledTooltip>
                </LI>
                <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${eight}`, alt: 'eightImg', id: 'UncontrolledTooltipExample4' }} />
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample4">
                        {JasonBorne}
                    </UncontrolledTooltip>
                </LI>
                <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${eleven}`, alt: 'elevenImg', id: 'UncontrolledTooltipExample5' }} />
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample5">
                        {ComerenDiaz}
                    </UncontrolledTooltip>
                </LI>
            </UL>
        </Fragment>
    )
}

export default Customers