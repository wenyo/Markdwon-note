import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import BaseContext from '../../context/BaseContext';

function Modal() {
    // modal element
    const elModal = document.getElementById('modal');

    // context
    const { bModal, sModal, sModalTitle, setbModal } = useContext(BaseContext);

    const sEl = (
        <div className="gray-back Black" >
            <div className="modal-content">
                <div className="title-block">
                    <div className="title">{sModalTitle}</div>
                    <i className="icon-add" onClick={()=>setbModal(false)}></i>
                </div>
                <div className="content">{sModal}</div>
            </div>
        </div>
    );

    return <>{bModal && (!elModal ? null : createPortal(sEl, elModal))}</>;
}

export default Modal;
