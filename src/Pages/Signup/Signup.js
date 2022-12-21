import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken'
const Signup = () => {
    const {createSignUp, updateUser} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    const navigate = useNavigate();
    if(token){
        navigate('/')
    }
    const handleSignUp = (data) => {
        console.log(data);
        setSignupError('');
        createSignUp(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast('User Created successfully');
            const userInfo = {
                displayName : data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUserToDataBase(data.name, data.email)
            })
            .catch(error=>console.error(error))
        })
        .catch(error => {
            console.log(error.message)
            setSignupError(error.message)
        })
    }
    const saveUserToDataBase = (name, email)=>{
        const userInfo = {name, email};
        fetch('https://doctor-server-gilt.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email)
        })
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("name",
                        {
                            required:"Name is required"
                        })}/>
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}   
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("email",
                        {
                            required: true
                        })}/>
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}     
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" 
                        {...register("password", 
                        {
                            required:"Password is required",
                            minLength:{value:6, message:'Password must be 6 character'},
                            pattern : {value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'Pawworrd must be stronge'}
                        },
                        )}/>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}   
                        <label className="label"><span className="label-text">Forgot Password</span></label>
                    </div>
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                    <input className='btn btn-accent w-full' value='signup' type="submit" />

                </form>
                <p>Already have an account. Please <Link to='/login' className='text-secondary'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;