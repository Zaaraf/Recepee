// MobileNotSupported.js
import React from 'react';
import project from './project.svg'

const MobileNotSupported = () => {
    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <img src={project} alt="Logo" style={{ width: '100%', paddingBottom: '5px' }} />
            <h2>Mobile view is currently in development.⏳</h2>
            <h3>Till then, Please use your dekstop browser for a better experience.</h3>
        </div>
    );
};

export default MobileNotSupported;
