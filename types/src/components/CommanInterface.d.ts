export interface AlertProps {
    message: string;
    type?: 'failure' | 'warning' | 'success';
    timeout?: number;
    isClosable?: boolean;
    className?: string;
}
export interface AuthProps {
    isAuthenticated: boolean;
}
export interface AvatarProps {
    name?: string;
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
