import React, { Fragment } from 'react'
import { Input, Label, Col } from 'reactstrap'
import { H4 } from '../../../AbstractElements'
import { buttonoutline, ButtonSize, ButtonStyle, Default, DefaultButton, Edgebutton, ExtraSmall, Flatbutton, gradien, Large, Raisedbutton, Small } from '../../../Constant'

const Btnstyle = ({onSelectchange,onchangeSize}) => {
  return (
    <Fragment>
        <Col sm="6">
            <div><H4 attrH4={{ className: 'mb-3' }}>{ButtonStyle}</H4></div>
            <div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio" id="Default" value='' defaultChecked onClick={(e)=>{onSelectchange(e.target.value)}} />
                    <Label className="form-check-label" htmlFor="Default">{DefaultButton}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio" id="Flatebtn" value="square" onClick={(e)=>{onSelectchange(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="Flatebtn">{Flatbutton}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio" id="Edgebtn" value="pill" onClick={(e)=>{onSelectchange(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="Edgebtn">{Edgebutton}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio" id="Raisebtn" value="air" onClick={(e)=>{onSelectchange(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="Raisebtn">{Raisedbutton}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio" id="Outlinebtn" value="outline" onClick={(e)=>{onSelectchange(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="Outlinebtn">{buttonoutline}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio" id="Gradienbtn" value="gradien" onClick={(e)=>{onSelectchange(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="Gradienbtn">{gradien}</Label>
                </div>
            </div>
        </Col>
        <Col sm="6">
            <div><H4 attrH4={{ className: 'mb-3' }}>{ButtonSize}</H4></div>
            <div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio1" id="defaultsize" defaultChecked value="" onClick={(e)=>{onchangeSize(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="defaultsize">{Default}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio1" id="largesize" value="lg" onClick={(e)=>{onchangeSize(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="largesize">{Large}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio1" id="smallsize" value="sm" onClick={(e)=>{onchangeSize(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="smallsize">{Small}</Label>
                </div>
                <div>
                    <Input className="form-check-input radio_animated" type="radio" name="Radio1" id="extrasmallsize" value="xs" onClick={(e)=>{onchangeSize(e.target.value)}}/>
                    <Label className="form-check-label" htmlFor="extrasmallsize">{ExtraSmall}</Label>
                </div>
            </div>
        </Col>
    </Fragment>
  )
}
export default Btnstyle