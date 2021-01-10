import React, { useState } from 'react'
import Card from '../../components/Card';
import {Input} from '../../components/form/Input'
import {SubmitBtn} from '../../components/form/Button'
import { useDispatch, useSelector } from 'react-redux';
import {AuthRegister} from '../../redux/actions/AuthActions';

const Register = () => {
    // SETUP STATE
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();

    // Get The Register State & Check For Errors
    const registerState = useSelector((state: any) => state.auth);
    const errors = registerState.errors ?? null;

    // Handle Register Submit
    // ACTION AuthRegister / AUTH_REGISTER
    const handleSubmit = (e) => {
        const data = {
            name,
            email,
            password,
            passwordConfirm
        }
        dispatch(AuthRegister(data))
    }

    return (
        <div className="container mx-auto py-4">
            <Card header="Register">
                {/* ERRORS */}
                {errors ?
                    <div className="text-red-600 text-sm mb-4">
                        {
                            Object.entries(errors).map(([key, value])=>{
                                return (
                                    <div>{value.toString()}</div>
                                );
                            })
                        }
                    </div>
                : null}

                {/* FORM */}
                <div className="flex flex-col space-y-4">
                    <Input type="text" name="name" label="Name" onChange={(e) => setName(e.target.value)}/>
                    <Input type="email" name="email" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" name="password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <Input type="password" name="password_confirm" label="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    <div>
                        <SubmitBtn label="Submit" cb={handleSubmit}/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Register;
