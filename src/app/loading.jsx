import React from 'react';
import { MoonLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <MoonLoader />
        </div>
    );
};

export default loading;