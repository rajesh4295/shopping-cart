import React, {CSSProperties, useEffect} from 'react';
import { createPortal } from "react-dom";
import { FaCheckCircle, FaInfo, FaTimes } from 'react-icons/fa';

enum ToasterType {
    success = "success",
    warn = "warn",
    error = "error",
    info = "info"
}
interface IToaster {
    [key: string]: CSSProperties;
}

function Toaster({children, timeout = 3500, type, toggleToast}) {
    const toasterOutlet = document.getElementById("toaster-outlet");
    const toasterType: IToaster = {
        [ToasterType.success]: {
            backgroundColor: "rgba(236, 253, 245, 1)",
            borderColor: "rgba(16, 185, 129, 1)",
            color: "rgba(6, 95, 70, 1)"
        },
        [ToasterType.warn]: {
            backgroundColor: "rgba(255, 251, 235, 1)",
            borderColor: "rgba(251, 191, 36, 1)",
            color: "rgba(146, 64, 14, 1)"
        }
    };

    let toasterIcon = <FaCheckCircle />

    switch(type) {
        case ToasterType.warn: toasterIcon = <FaInfo/>;
    }

    useEffect(() => {
        setTimeout(() => {
            toggleToast(false);
        }, timeout);
    }, []);

    return (
        createPortal(
            <div className="flex fixed top-5 left-0 right-0 ml-auto mr-auto w-11/12 lg:w-5/12 z-50 h-auto border rounded-md p-2" style={toasterType[type]}>
                <div className="self-center">
                    {
                        toasterIcon
                    }
                </div>
                <div className="self-center mx-5 break-words w-full">
                    { children }
                </div>
                <div className="self-center ml-auto cursor-pointer">
                    <FaTimes onClick={() => toggleToast(false)}/>
                </div>
            </div>,
            toasterOutlet!
        )
    );
}

export default Toaster;
