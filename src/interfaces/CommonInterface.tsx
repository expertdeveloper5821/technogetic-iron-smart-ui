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

export interface BadgeProps {
    label?: number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    max?: number;
    className?: string;
}

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    bg?: string;
    color?: string;
    varient?: 'borderLess' | 'contained' | 'outline';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    children?: string | number;
    type?: string;
    multiple?: boolean;
    startIcon?: string;
    endIcon?: string;
}

export interface CardProps {
    className?: string;
    padding?: string;
    title?: string;
    border?: string;
    footer?: React.ReactNode;
    cardheaderimg?: string;
}

export interface DrawerProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    isOpen?: boolean;
    children?: string;
}

export interface IconButtonProps {
    className?: string;
    multiple?: boolean;
    children?: string;
    type?: string;
    onClick?: () => void;
}

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    required?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    type?: 'email' | 'password' | 'text';
    className?: string;
    adornment?: string;
    ornament?: string;
}

export interface subMenuInterface {
    label?: string;
    key?: string | number;
    icon?: string;
    type?: string;
    href?: string;
}
export interface MenuProps {
    label?: string;
    key?: string | number;
    icon?: string;
    children?: subMenuInterface[];
    type?: string;
    href?: string;
}

export interface MenuItem {
    menuData?: MenuProps[];
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    bg?: string;
    color?: string;
    style?: React.CSSProperties;
}
export interface MenuItemProps {
    autofocus?: boolean;
    children?: string;
    className?: string;
    disableGutters?: boolean;
    onClick?: (children: React.ReactNode) => void;
    value?: string;
}

export interface NavBarProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: React.CSSProperties;
    children?: string;
}
export interface SelectProps {
    option?: string[];
    placeholder?: string;
    padding?: string;
    width?: string;
    onChange?: (selectedValue: string | number) => void;
}

export interface StackProps {
    align?: 'start' | 'center' | 'end';
    direction?: 'row' | 'column';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    isInline?: boolean;
    spacing?: number;
    wrap?: boolean;
    style?: React.CSSProperties;
    children?: string;
}

export interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    checked?: boolean;
}

export interface TextAreaInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    className?: string;
    form?: string;
}

export interface TooltipProps {
    text?: string;
}
