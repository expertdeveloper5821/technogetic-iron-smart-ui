import React from 'react';
import { Upload } from '../../assets/Upload';
import './IconButton.css';

export interface IconButtonProps {
    src?: string;
    alt?: string;
    bg?: string;
    color?: string;
    className?: string;
    multiple?: boolean;
}

export const IconButton = (props: React.PropsWithChildren<IconButtonProps>) => {
    const { src, alt = 'Upload Image', children, bg, color, className, multiple = false } = props;

    return (
        <>
            <input className="IconButton-Input" type="file" hidden multiple={multiple} id="IconButton-btn" />
            <label className={className ? className : 'IconButton-Label'} htmlFor="IconButton-btn" data-testid="upload-component">
                {src ? <img src={src} className="image-icon" alt={alt} /> : <Upload />}
            </label>
        </>
    );
};
