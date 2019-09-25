import React from 'react';
import StoriesToReview from './StoriesToReview';
import Submit from './Submit'

const Dashboard = () => {
    return (
        <div className="dahsboard">
            <StoriesToReview />
            <Submit />
        </div>
    )
}

export default Dashboard;