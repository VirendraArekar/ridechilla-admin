import React, { Fragment, useContext, useState } from 'react';
import { Form, FormGroup, Input, InputGroup } from 'reactstrap';
import ChatAppContext from '../../../../_helper/Chat';

const SearchChatList = () => {
    const { searchMember } = useContext(ChatAppContext);
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword);
        searchMember(keyword);
    };
    return (
        <Fragment>
            <div className="search">
                <Form className="theme-form">
                    <FormGroup >
                        <InputGroup>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="search"
                                defaultValue={searchKeyword}
                                onChange={(e) =>
                                    handleSearchKeyword(e.target.value)
                                }
                            />
                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        </Fragment>
    );
};

export default SearchChatList;