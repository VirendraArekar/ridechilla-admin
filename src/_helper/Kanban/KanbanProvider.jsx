import React, { useEffect, useState } from 'react';
import Context from './index';
import { CustomboardApi, DefaultboardApi } from '../../api';
import axios from 'axios';  

const KanbanProvider = (props) => {
    const [boardData, setBoardData] = useState();
    const [customboard, setCustomboard] = useState();
    
    const defaultData = async () => {
        await axios.get(DefaultboardApi).then((res) => {
            setBoardData(res.data);
        });
    };
    const customData = async () => {
        await axios.get(CustomboardApi).then((res) => {
            setCustomboard(res.data);
        });
    };

    useEffect(() => {     
        defaultData();
        customData();
    }, [setBoardData,setCustomboard]);
    return (
        <Context.Provider  value={{ boardData,customboard ,...props}}>
            {props.children}
        </Context.Provider>    
    );
};
export default KanbanProvider;