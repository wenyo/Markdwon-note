import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import BaseContext from '../../context/BaseContext';

// iMsgType === 0 : Loading
function Message() {
    // context
    const { bMsg, sMsg, sMsgTitle, iMsgType, setbMsg } = useContext(BaseContext);
    const elMsg = document.getElementById('msg');

    const clickBGtoClose = () => {
        if (iMsgType === 0) return;
        setbMsg(false);
    };

    const sEl = (
        <div className="gray-back" onClick={clickBGtoClose}>
            <div className="msg-content">
                {iMsgType !== 0 && (
                    <div className="title-block">
                        <div className="title">{sMsgTitle}</div>
                        <i className="icon-add" onClick={()=>setbMsg(false)}></i>
                    </div>
                )}
                <div className="content">
                    {iMsgType === 0 ? (
                        iMsgType // <FontAwesomeIcon icon={faCircleNotch} spin />
                    ) : iMsgType === 1 ? (
                        iMsgType // <FontAwesomeIcon icon={faCheck} />
                    ) : iMsgType === 2 ? (
                        iMsgType // <FontAwesomeIcon icon={faTimes} />
                    ) : iMsgType === 3 ? (
                        iMsgType // <FontAwesomeIcon icon={faExclamation} />
                    ) : (
                        <></>
                    )}
                    {iMsgType === 0 ? <div>Loading</div> : sMsg}
                </div>
            </div>
        </div>
    );
    return <>{bMsg && (!elMsg ? null : createPortal(sEl, elMsg))}</>;
}

export default Message;
