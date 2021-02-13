import React, { createContext } from 'react';
const BaseContext = createContext({
    bModal: false,
    sModal: <></>,
    sModalTitle: '',
    setbModal: (x: boolean) => {},

    bMsg: false,
    sMsg: <></>,
    sMsgTitle: '',
    iMsgType: 1,
    setiMsgType: (x: number) => {},
    setbMsg: (x: boolean) => {},
    setAlert: (
        type: string,
        bAlert: boolean,
        sAlert: JSX.Element = <></>,
        sAlertTitle: string = '',
        iMsgType: number = 1
    ) => {},
});

export const { Provider } = BaseContext;
export default BaseContext;
