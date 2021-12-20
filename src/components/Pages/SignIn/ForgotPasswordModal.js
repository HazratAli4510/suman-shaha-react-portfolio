import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';


const ForgotPasswordModal = ({ open, setOpen }) => {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Forgot Password?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your email and click reset password, You will get <br />  an email with verification link on your email.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Reset Password</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ForgotPasswordModal;