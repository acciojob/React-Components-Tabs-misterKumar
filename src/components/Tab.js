import React from 'react';

const Tab = (props) => {
    return (
        <div className='tab' id={`${props.name}-tab`}>
            <a href="#">{props.name}</a>
        </div>
    )
}

export default Tab;