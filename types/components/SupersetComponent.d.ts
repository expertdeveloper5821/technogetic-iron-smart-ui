import React from 'react';
type SupersetComponentProps = {
    pagename: string;
    steps: string[];
    children?: JSX.Element | string;
    btnName: string;
    tagLine?: string;
    capturelocationData?: any;
    stepsStatus: any;
    setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
    setStepsStatus: React.Dispatch<React.SetStateAction<any>>;
};
declare const SupersetComponent: ({ pagename, steps, children, btnName, tagLine, capturelocationData, stepsStatus, setCapturelocationData, setStepsStatus }: SupersetComponentProps) => JSX.Element;
export default SupersetComponent;
