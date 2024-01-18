import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import { UL,LI,H5, } from '../../../AbstractElements'
import { India, NewYork, Peris } from '../../../Constant'
import { CloudRainSvg, MoonSvg, SunSetSvg } from '../../../Data/Widgets/General/Data'

const WetherData = () => {
  return (
    <Fragment>
        <Col xl="7" md="6" >
            <div className="widget-list">
                <UL attrUL={{ className:'simple-list'}}>
                    <LI>
                        <div className="d-flex">
                            <MoonSvg />
                            <div className="flex-grow-1">
                                <H5>25*C</H5>
                            </div><span>{Peris}</span>
                        </div>
                    </LI>
                    <LI>
                        <div className="d-flex">
                            <CloudRainSvg />
                            <div className="flex-grow-1">
                                <H5>25*C</H5>
                            </div><span>{NewYork}</span>
                        </div>
                    </LI>
                    <LI>
                        <div className="d-flex">
                            <SunSetSvg />
                            <div className="flex-grow-1">
                                <H5>25*C</H5>
                            </div><span>{India}</span>
                        </div>
                    </LI>
                </UL>
            </div>
        </Col>
    </Fragment>
  )
}
export default WetherData