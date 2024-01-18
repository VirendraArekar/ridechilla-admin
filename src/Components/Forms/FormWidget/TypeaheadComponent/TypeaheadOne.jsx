import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { ButtonToolbar } from 'react-bootstrap';
import axios from 'axios'
import { Btn } from '../../../../AbstractElements';
import { Clear, Focus, FocusbtnText } from '../../../../Constant';

const TypeaheadOne = () => {

  const ref = useRef();
  const [options, setOptions] = useState([])
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
  }, [])
  return (
    <Fragment>
      <Typeahead
        id="public-typeahead"
        defaultSelected={options.slice(0, 4)}
        labelKey="name"
        multiple
        options={options}
        placeholder="Choose a state..."
        ref={ref}
      />
      <ButtonToolbar className='mt-3'>
        <Btn attrBtn={{color: 'primary', className: "m-1", onClick: () => ref.current.clear()}}>{Clear}</Btn>
        <Btn attrBtn={{color: 'primary',className: "m-1",onClick: () => ref.current.focus()}}>{Focus}</Btn>
        <Btn attrBtn={{color: 'primary', className: "m-1", onClick: () => {ref.current.focus();setTimeout(() => ref.current.blur(), 1000)}}}>{FocusbtnText}</Btn>
      </ButtonToolbar>
    </Fragment>
  );
}

export default TypeaheadOne;