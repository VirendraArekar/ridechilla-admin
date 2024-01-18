import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { EmailAddress, EmailPassword, ForgotPassword, Password, RememberPassword, SignIn } from '../../../Constant';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import FormHeader from './FormHeader';
import { toast } from 'react-toastify';
import {API_URL} from  '../../../utility/constant';
import API from '../../../utility/apiInterceptor';
import qs from 'qs'

const LoginTab = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
       let remember = localStorage.getItem('remember');
       if(remember){
        setEmail(localStorage.getItem('email'))
        setPassword(localStorage.getItem('password'))
        setIsChecked(true)
       }
    },[])

    const loginAuth = async (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            toast.error('Please Enter input')
        }
        else{
            let data = {
                email, password
            }
            await API.post('/auth/login',qs.stringify(data) , {headers: {'content-type': 'application/x-www-form-urlencoded'}}).then((response) => {
                if(isChecked){
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    localStorage.setItem('remember', true)
                }
                let user = response.data.user
                user.token = response.data.tokens.access.token;
                user.refreshToken = response.data.tokens.refresh.token;
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('login', true);
                toast.success('Login Success...!')
                navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
            })
            .catch((error) => {
                if(isChecked){
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    localStorage.setItem('remember', true)
                }
                toast.error(error?.response?.data?.message)
            })
        }
    }

    const onChangeCheckbox = async(e) => {
        setIsChecked(e.target.checked)
    }
    return (
        <Fragment>
            <Form className="theme-form">
                <FormHeader heading={'Sign In'} subHeading={EmailPassword}/>
                <FormGroup className='form-group'>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" onChange={e => setEmail(e.target.value)} defaultValue={email} />
                </FormGroup>
                <FormGroup className='form-group'>
                    <Label className="col-form-label">{Password}</Label>
                    <div className='form-input position-relative'>
                        <Input className="form-control" type={togglePassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} defaultValue={password} required />
                        <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                            <span className={togglePassword ? '' : 'show'}></span>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup className="form-group mb-0">
                    <div className="checkbox p-0">
                        <Input id="checkbox1" type="checkbox" checked={isChecked}  onChange={onChangeCheckbox}/>
                        <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Link className="link" to={`${process.env.PUBLIC_URL}/pages/auth/forget-pwd`}>{ForgotPassword}</Link>
                </FormGroup>
                <div className='text-end mt-3'>
                    <Btn attrBtn={{ color: 'primary w-100', className: 'btn-block', onClick: (e) => loginAuth(e) }} >{SignIn}</Btn>
                </div>
                {/* <SocialAuth /> */}
            </Form>
        </Fragment>
    );
};
export default LoginTab;