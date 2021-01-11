import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Input} from '../../components/form/Input'
import {SubmitBtn} from '../../components/form/Button'
import Card from '../../components/Card';

// Actions
import { AuthLogin } from '../../redux/actions/AuthActions';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // Get The Register State & Check For Errors
    const registerState = useSelector((state: any) => state.auth);
    const errors = registerState.errors ?? null;

    const handleSubmit = () => {
        const data = {
            email,
            password
        }
        dispatch(AuthLogin(data));
    }

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
          handleSubmit();
        }
    };

    return (
        <div className="container mx-auto py-4" onKeyDown={onKeyDownHandler}>
            <div className="flex justify-center mt-20">
                <Card header="Login">
                    {/* ERRORS */}
                    {errors ?
                        <div className="text-red-600 text-sm mb-4">
                            {
                                Object.entries(errors).map(([key, value])=>{
                                    return (
                                        <div key={key}>{value.toString()}</div>
                                    );
                                })
                            }
                        </div>
                    : null}

                    {/* FORM */}
                    <div className="flex flex-col space-y-4">
                        <Input type="email" name="email" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="password" name="password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <div>
                            <SubmitBtn label="Submit" cb={handleSubmit}/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login
