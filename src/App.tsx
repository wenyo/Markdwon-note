import React, { useState, useEffect } from 'react';
import { Provider, sActiveType, vCollectionData as vCollectionDataContext } from './context/NoteContext';
import { Provider as BaseProvider } from './context/BaseContext';
import { vData as vDataDefault } from './json/Data';
import Category from './components/category/Category';
import Directory from './components/directory/Directory';
import Note from './components/note/Note';
import Msg from './components/modal/Msg';
import Modal from './components/modal/Modal';

function App() {
    // modal & alert state
    const [bModal, setbModal] = useState(false);
    const [sModal, setsModal] = useState(<></>);
    const [sModalTitle, setsModalTitle] = useState('');

    const [bMsg, setbMsg] = useState(false);
    const [sMsg, setsMsg] = useState(<></>);
    const [sMsgTitle, setsMsgTitle] = useState('');
    const [iMsgType, setiMsgType] = useState(1);

    //state
    const [iData, setiData] = useState(-1); // note idx
    const [vData, setvData] = useState(vDataDefault);
    const [iActive, setiActive] = useState<number>(2); // category idx
    const [sType, setsType] = useState<string>(sActiveType[1]); // category type
    const [vCollectionData, setvCollectionData] = useState(vCollectionDataContext);
    const [vCollection, setvCollection] = useState<string[]>(Object.keys(vCollectionData));
    const [vStarr, setvStarr] = useState<string[]>([]);
    const [vTrash, setvTrash] = useState<string[]>([]);
    const [bGetData, setbGetData] = useState<boolean>(false);

    const chooseItem = (sType: string, idx: number) => {
        setsType(sType);
        setiActive(idx);
    };

    // set msg / modal
    // Loading : setAlert("Msg", true, <></>, "", 0);
    const setAlert = (
        type: string, // "Modal" or "Msg"
        bAlert: boolean, // show or not show
        sAlert: JSX.Element = <></>, // content
        sAlertTitle: string = '', // title
        iMsgType: number = 1 // "Msg" icon type, discard this param when type === "Modal"
    ) => {
        if (type === 'Modal') {
            setbModal(bAlert);
            setsModal(sAlert);
            setsModalTitle(sAlertTitle);
        } else if (type === 'Msg') {
            setbMsg(bAlert);
            setsMsg(sAlert);
            setsMsgTitle(sAlertTitle);
            setiMsgType(iMsgType);
        }
    };

    const vBaseContext = {
        bModal,
        bMsg,
        sModal,
        sMsg,
        sModalTitle,
        sMsgTitle,
        iMsgType,
        setiMsgType,
        setbMsg,
        setbModal,
        setAlert,
    };

    const vContent = {
        vData,
        setvData,
        iData: iData,
        setiData,
        iActive,
        sType,
        chooseItem,
        vCollection,
        setvCollection,
        vStarr,
        setvStarr,
        vTrash,
        setvTrash,
        vCollectionData,
        setvCollectionData,
    };

    useEffect(() => {
        const sSaveData = localStorage.getItem('note');
        const sCollectionData = localStorage.getItem('collection');
        if (sSaveData) {
            const vSaveData = JSON.parse(sSaveData);
            setvData(vSaveData);
            setbGetData(true);
        }
        if (sCollectionData) {
            const vCollectionData = JSON.parse(sCollectionData);
            setvCollectionData(vCollectionData);
        }
        setvCollection(Object.keys(vCollectionData));
    }, []);

    useEffect(() => {
        if (bGetData) {
            const sNote = JSON.stringify(vData);
            localStorage.setItem('note', sNote);
        }
    }, [vData]);

    useEffect(() => {
        if (bGetData) {
            const sCollectionData = JSON.stringify(vCollectionData);
            localStorage.setItem('collection', sCollectionData);
            setvCollection(Object.keys(vCollectionData));
        }
    }, [vCollectionData]);

    return (
        <BaseProvider value={vBaseContext}>
            <Provider value={vContent}>
                <div id="Wrap" className="Black">
                    <Category />
                    <Directory />
                    <Note />
                    {/* <Shortcut /> */}
                </div>
                <Msg />
                <Modal />
            </Provider>
        </BaseProvider>
    );
}

export default App;
