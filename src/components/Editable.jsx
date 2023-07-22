'use client'

import { useEffect, useRef } from 'react';
import styles from '../app/page.module.css'

const Editable = ({ placeholder, ...props }) => {
    // use useRef and useEffect to autoresize the textarea
    const ref = useRef();
    useEffect(() => {
        const autoResize = () => {
            ref.current.style.height = 'auto';
            ref.current.style.height = `${ref.current.scrollHeight}px`;
        };
        autoResize();
        ref.current.addEventListener('input', autoResize);
        ref.current.addEventListener('focus', autoResize);
        ref.current.addEventListener('blur', autoResize);
        ref.current.addEventListener('keydown', autoResize);
        ref.current.addEventListener('keyup', autoResize);
        ref.current.addEventListener('paste', autoResize);
        ref.current.addEventListener('cut', autoResize);
        ref.current.addEventListener('change', autoResize);
    }, []);
    
    return (
        <textarea
            ref={ref}
            className={styles.editable}
            placeholder={placeholder}
            {...props}
        />
    );
}

export default Editable;