import React, { Fragment} from 'react'
import { Input } from 'reactstrap'
import { DefaultButtons, Edgebutton, Flatbutton } from '../../../Constant';

const Btnwithstyle = ({setBtnclass,radio1,radio2,radio3,radioname}) => {  
  return (
    <Fragment>
        <div style={{padding:'25px 25px 0 0'}}>
            <div className="form-check form-check-inline">
                <Input className="form-check-input" type="radio" name={radioname} id={radio1} value='' defaultChecked onClick={(e)=>{setBtnclass(e.target.value)}} />
                <label className="form-check-label" htmlFor={radio1}>{DefaultButtons}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={radioname} id={radio2} value="btn-square" onClick={(e)=>{setBtnclass(e.target.value)}}/>
                <label className="form-check-label" htmlFor={radio2}>{Flatbutton}</label>
            </div>                                    
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={radioname} id={radio3} value="btn-pill" onClick={(e)=>{setBtnclass(e.target.value)}}/>
                <label className="form-check-label" htmlFor={radio3}>{Edgebutton}</label>
            </div>
        </div>                       
    </Fragment>
  )
}
export default Btnwithstyle