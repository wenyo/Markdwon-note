import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import BaseContext from '../../context/BaseContext';

function Modal() {
    // modal element
    const elModal = document.getElementById('modal2');

    // context
    const { bModal, sModal, sModalTitle, setbModal } = useContext(BaseContext);

    const sEl = (
        <div className="gray-back">
            <div className="modal-content">
                <div className="title-block">
                    <div className="title">{sModalTitle}</div>
                    {/* <FontAwesomeIcon icon={faTimesCircle} onClick={() => setbModal(false)} /> */}
                </div>
                <div className="content">{sModal}</div>
            </div>
        </div>
    );

    return <>{bModal && (!elModal ? null : createPortal(sEl, elModal))}</>;
}

export default Modal;
