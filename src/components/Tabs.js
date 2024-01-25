import React from 'react';
import Tab from './Tab';

const Tabs = () => {
    return (
        <div className='tabs'>
            <Tab
                name="Home"
            />
            <Tab
                name="About"
            />
            <Tab
                name="Features"
            />
        </div>
    )
}

export default Tabs;