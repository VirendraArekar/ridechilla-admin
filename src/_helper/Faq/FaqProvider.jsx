import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaqApi } from '../../api';
import Context from './index';

const FaqProvider = (props) => {
    const [faq, setFaq] = useState([]);

    const fetchFaq = async () => {
        try {
            await axios.get(`${FaqApi}`).then((resp) => {
                setFaq(resp.data);
            });
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        fetchFaq();
    }, []);

    return (
        <Context.Provider
            value={{
                ...props,
                faq
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default FaqProvider;
