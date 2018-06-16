import React from 'react';

const withClassWrapper = (props) => {
    return <div className={props.classes}>
        {props.children}
    </div>
};

export default withClassWrapper;