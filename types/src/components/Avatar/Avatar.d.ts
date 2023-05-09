import { FC, CSSProperties, MouseEvent } from 'react';
export interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const Avatar: FC<AvatarProps>;
