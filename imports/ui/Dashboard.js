import React from 'react';

// import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';

// stateless functional component
export default () => {
    return (
        <div>
             <PrivateHeader title="Dashboard"/>
             <div className="page-content">
                Dashboard page contents
             </div>          
        </div>
    );
};
