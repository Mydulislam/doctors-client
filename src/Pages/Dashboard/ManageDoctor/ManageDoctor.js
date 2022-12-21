import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationalModal from '../../../Shared/ConfirmationModal/ConfirmationalModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = ()=>{
        setDeletingDoctor(null)
    }
    
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('https://doctor-server-gilt.vercel.app/doctors', {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
    })

    const handleDelete= (doctor)=>{
        fetch(`https://doctor-server-gilt.vercel.app/doctors/${doctor._id}`, {
            method:'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch();
                toast.success('Successfully deleted')
            }
            refetch();
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h1>Manage Doctors: {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt=''/>
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationalModal
                title = {`are you sure want to delete?`}
                message = {`If you delete ${deletingDoctor.name}. it can't be undone`}
                handleDelete = {handleDelete}
                deleteButton = 'Delete'
                deleteData = {deletingDoctor}
                closeModal={closeModal}
                >
                </ConfirmationalModal>
            }
        </div>
    );
};

export default ManageDoctor;