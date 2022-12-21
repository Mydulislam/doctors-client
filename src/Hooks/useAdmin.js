import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setAdmin] = useState(false);
    const [adminLoadin, setAdminLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://doctor-server-gilt.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.isAdmin);
                setAdminLoading(false)
            })
        }
    },[email])
    
    return [isAdmin, adminLoadin]
};

export default useAdmin;