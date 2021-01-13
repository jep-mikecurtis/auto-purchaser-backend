import React from 'react';
import {useSelector} from 'react-redux'

const Dashboard = () => {
    const auth = useSelector((state: any) => state.auth);
    const user = auth.user
    return (
        <div className="container mx-auto py-10 bg-gray-800 rounded p-20">
            <h1 className="text-2xl mb-4">
                Dashboard
            </h1>
            <h2 className="mb-4">
                Congratulations {user.name}, <br/> You are approved for the following
            </h2>
            
            <div>
            {
                user && user.autos.map((auto: any) => (
                    <div className="mb-4">
                        <p>Make: {auto.auto_make} {auto.auto_model}</p>
                        <p>Price: {auto.purchase_price}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Dashboard;
