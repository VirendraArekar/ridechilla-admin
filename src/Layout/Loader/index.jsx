import React, { Fragment, useState, useEffect } from 'react';

const Loader = () => {
    const [show, setShow] = useState('flex');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow('none');
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, [show]);

    return (
        <Fragment>
            <div className='loader-wrapper' style={{ display: `${show}` }}>
                <div className="loader"></div>
            </div>
        </Fragment>
    );
};

export default Loader;