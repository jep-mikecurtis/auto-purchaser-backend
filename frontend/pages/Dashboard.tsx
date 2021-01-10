import React from 'react';
import {useSelector} from 'react-redux'

const Dashboard = () => {
    const auth = useSelector((state: any) => state.auth);
    const user = auth.user
    return (
        <div className="container mx-auto py-10">
            <h1>
                Dashboard
            </h1>
            <h2>
                Welcome {user.name}
            </h2>
        </div>
    )
}

export default Dashboard;
