import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";
import { AiOutlineClose } from "react-icons/ai";
//reusable modal popup for form
export const ModalPopup = (props) => {
    const { children, onClose, title } = props;

    return (
        <Dialog {...props}>
            {/* close icon and function */}
            {onClose && (
                <Typography className="d-flex justify-content-end" onClick={onClose}>
                    <AiOutlineClose className="pointer float-right m-1" />
                </Typography>
            )}
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent className="dialog-custom">{children}</DialogContent>
        </Dialog>
    );
};
