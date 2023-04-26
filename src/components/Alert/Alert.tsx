import React from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import './Alert.css';

type AlertProps = {
    message: string;
    type?: string;
    timeout?: number;
    isClosable?: boolean;
};

type AlertState = {
    isOpen: boolean;
    timerId?: ReturnType<typeof setTimeout>;
};

export class Alert extends React.Component<AlertProps, AlertState> {
    constructor(props: AlertProps) {
        super(props);
        this.state = {
            isOpen: true
        };
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        const { timeout } = this.props;
        if (timeout) {
            const timerId = setTimeout(() => {
                this.handleClose();
            }, timeout);
            this.setState({ timerId });
        }
    }

    componentWillUnmount() {
        const { timerId } = this.state;
        if (timerId) {
            clearTimeout(timerId);
        }
    }

    handleClose() {
        this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;
        const { message, type = 'success', isClosable = true } = this.props;
        if (!isOpen) {
            return null;
        }
        return (
            <div className={`alert alert-${type}`}>
                <div>{message ? message : 'This is a success message'}</div>
                {isClosable && (
                    <div className="closeIcon" data-testid="close-button" onClick={this.handleClose}>
                        <CloseIcon />
                    </div>
                )}
            </div>
        );
    }
}
