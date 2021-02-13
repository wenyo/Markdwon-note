import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCheck, faTimes, faExclamation } from '@fortawesome/free-solid-svg-icons';
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
        <div className="gray-back Black" onClick={clickBGtoClose}>
            <div className="msg-content">
                {iMsgType !== 0 && (
                    <div className="title-block">
                        <div className="title">{sMsgTitle}</div>
                        <i className="icon-add" onClick={() => setbMsg(false)}></i>
                    </div>
                )}
                <div className="content">
                    {iMsgType === 0 ? (
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                    ) : iMsgType === 1 ? (
                        <FontAwesomeIcon icon={faCheck} />
                    ) : iMsgType === 2 ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : iMsgType === 3 ? (
                        <FontAwesomeIcon icon={faExclamation} />
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
