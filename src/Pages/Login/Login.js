import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const {login} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [token] = useToken(loginUserEmail);
    const location = useLocation();

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from,{replace:true})
    }
    const handleLogin = (data) => {
        setLoginError('')
        login(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
        })
        .catch(error => {
            console.log(error.message);
            setLoginError(error.message)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 character' }
                                },
                            )} />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgot Password</span></label>
                    </div>
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                    <input className='btn btn-accent w-full' value='Login' type="submit" />

                </form>
                <p>New to doctor portal <Link to='/signup' className='text-secondary'>Create a new accoutn</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;