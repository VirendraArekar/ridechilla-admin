import React, { Fragment } from 'react'
import { getTrackBackground, Range } from 'react-range';
import { MAX, MIN, STEP } from '../../../../Constant';

const Rangeslider = ({priceHandle,values}) => {    
  return (
    <Fragment>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => {
            priceHandle(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%'
              }}
            >
              <output style={{ marginTop: '30px' }}>
                {values[0]}
              </output>
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', '#4d8aff', '#ccc'],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
              <output style={{ marginTop: '30px' }}>
                {values[1]}
              </output>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '16px',
                width: '16px',
                borderRadius: '60px',
                backgroundColor: '#4d8aff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA'
              }}
            >
            </div>
          )}
        />
    </Fragment>
  )
}

export default Rangeslider