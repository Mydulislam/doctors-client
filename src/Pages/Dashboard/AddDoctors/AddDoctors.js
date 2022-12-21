import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: () => fetch('http://localhost:5000/appointspecialty')
            .then(res => res.json())
    })
    const handleAddDoctor = (data) => {
        const image = data.photo[0];
        console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // doctors ke insert kora
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization : `bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`${data.name} inserted successfuly`);
                        navigate('/dashboard/managedoctor')
                    })
                    .catch(err => console.error(err))
                }
            })
            .catch(err => console.error(err))
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h1>Add a Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name",
                            {
                                required: "Name is required"
                            })} />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email",
                            {
                                required: true
                            })} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select className="select select-bordered w-full max-w-xs"
                        {...register('specialty')}
                    >
                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }

                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("photo",
                            {
                                required: "Photo is required"
                            })} />
                    {errors.photo && <p className='text-red-600' role="alert">{errors.photo?.message}</p>}
                </div>

                <input className='btn btn-accent w-full' value='Add Doctor' type="submit" />

            </form>
        </div>
    );
};

export default AddDoctors;