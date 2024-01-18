import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export default function small(props) {
    const {title = null, onClick, className, id = null} = props;

    const styles = {
        danger : {
            padding : 0, margin : 0, border : 0, backgroundColor : 'red', padding : 8, borderRadius : 5
        },
        secondary : {
            padding : 0, margin : 0, border : 0, backgroundColor : '#343a40', padding : 8, borderRadius : 5
        }
    }
  return (
    <button style={styles[className]} onClick={() => onClick(id)}>{title ?? (className === 'danger' ? <FaTrashAlt color={'white'}/> : <FaPencilAlt color='white' />)}</button>
  )
}
