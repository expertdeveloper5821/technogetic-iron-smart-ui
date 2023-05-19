import React from 'react';
import { Upload } from '../../assets/Upload';
import { DeleteIcon } from '../../assets/DeleteIcon';
import { IconButtonProps } from '../../interfaces/CommonInterface';
import './IconButton.css';

export const IconButton = (props: React.PropsWithChildren<IconButtonProps>) => {
    const { children, className, multiple = false, onClick, type = 'button' } = props;

    return (
        <>
            {type === 'file' && (
                <>
                    <input className="IconButton-Input" type="file" hidden multiple={multiple} id="IconButton-btn" />
                    <label className={className ? className : 'IconButton-Label'} htmlFor="IconButton-btn" data-testid="upload-component">
                        {children ? <span className="image-icon">{children}</span> : <Upload />}
                    </label>
                </>
            )}
            {type === 'button' && (
                <>
                    <input className="IconButton-Input" type="button" hidden multiple={multiple} id="IconButton-btn" />
                    <label className={className ? className : 'IconButton-Label'} htmlFor="IconButton-btn" data-testid="upload-component" onClick={onClick}>
                        {children ? <span className="image-icon">{children}</span> : <DeleteIcon />}
                    </label>
                </>
            )}
        </>
    );
};
