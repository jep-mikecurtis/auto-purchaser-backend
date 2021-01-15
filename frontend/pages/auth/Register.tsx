import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import {Input} from '../../components/form/Input'
import {SubmitBtn} from '../../components/form/Button'
import { useDispatch, useSelector } from 'react-redux';
import {AuthRegister} from '../../redux/actions/AuthActions';

const Register = () => {
    const auto = useSelector((state: any) => state.auto);

    // SETUP STATE
    const [name, setName] = useState(auto?.name);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setName(auto.name)
        setEmail(auto.email)
    },[auto])

    // Get The Register State & Check For Errors
    const registerState = useSelector((state: any) => state.auth);
    const errors = registerState.errors ?? null;

    // Handle Register Submit
    // ACTION AuthRegister / AUTH_REGISTER
    const handleSubmit = () => {
        const data = {
            name,
            email,
            password,
            passwordConfirm
        }
        dispatch(AuthRegister(data))
    }

    const onKeyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
    };

    return (
        <div className="container mx-auto py-4" onKeyDown={onKeyDownHandler}>
            <div className="flex justify-center mt-5">
                <Card header="Create Account">
                    {/* ERRORS */}
                    {errors ?
                        <div className="text-red-600 text-sm mb-4">
                            {
                                Object.entries(errors).map((value: any, key: number)=>{
                                    console.log(key, value);
                                    return (
                                        <div key={key}>{value[1]}</div>
                                    );
                                })
                            }
                        </div>
                    : null}

                    {/* FORM */}
                    <div className="flex flex-col space-y-4">
                        <div className="text-center">
                            <p>{auto.message ?? ''}</p> 
                        </div>
                        <Input type="text" name="name" label="Name" value={name} cb={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                        <Input type="email" name="email" label="Email" value={email} cb={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                        <Input type="password" name="password" label="Password" cb={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                        <Input type="password" name="password_confirm" label="Confirm Password" cb={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}/>
                        <div>
                            <SubmitBtn label="Submit" cb={handleSubmit}/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Register;
