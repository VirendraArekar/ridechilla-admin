import React, { useState } from 'react';
import Context from './index';

const ContactProvider = (props) => {
    const [users, setUsers] = useState([]);

    const createUser = (data1, imgUrl) => {
        const userTemp = {
            id: users.length + 1,
            avatar: imgUrl,
            name: data1.name,
            age: data1.age,
            surname: data1.surname,
            email: data1.email,
            mobile: data1.mobile
        };
        setUsers((prev) => [...prev, userTemp]);
    };

    const editUser = (data2, id) => {
        users.map((elem) => {
            if (elem.id === id) {
                elem.name = data2.name;
                elem.surname = data2.surname
                elem.email = data2.email
                elem.mobile = data2.mobile
                elem.age = data2.age
            }
            return true
        })
    };

    const deletedUser = (id) => {
        const newdata = users.filter((elem) => {
            return id !== elem.id;
        });
        setUsers(newdata);
    };

    return (
        <Context.Provider
            value={{
                ...props,
                users,
                createUser,
                editUser,
                deletedUser
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContactProvider;
