import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./styles.css";
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import star from '../../img/shooting-star.svg';

export const AddToken: React.FC = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('')
    const [balance, setBalance] = useState(0);
    const [toggle, setToggle] = useState(false)
    const handleClose = () => setToggle(false);
    const handleOpen = () => setToggle(true);
    console.log('token',token.length)
    console.log('balance',balance)
    const addToken = () => {

        const local = JSON.parse(localStorage.getItem('wallet') || "[]");
        const findToken = local.findIndex((element: { tokenName: string; value: number; }) => element.tokenName === token)
        if (!(findToken < 0)) handleOpen()
        else {
            localStorage.setItem("wallet", JSON.stringify([...local, { tokenName: token, value: balance }]));
            setToken('')
            setBalance(0)
            navigate('/')
        }
    };
    return (
        <div className="form">
            <span className="title-token">
                <p><img src={star} className="wish-img" alt="wish" />Wish Wallet</p>
            </span>
            <span className="add-token">
                <p>Add Token</p>
                <Button variant="contained" color="secondary" size="small" onClick={() => navigate('/')}>Voltar</Button>
            </span>
            <span className="token">
                <p>Token</p>
                <input
                    value={token}
                    type="text"
                    id="token"
                    name="token"
                    onChange={({ target }) => {
                        setToken(target.value);
                    }}
                />
            </span>
            <span className="balance">
                <p>Balance</p>
                <input
                    min="0"
                    value={balance}
                    type="number"
                    id="balance"
                    name="balance"
                    onChange={({ target }) => {
                        setBalance(parseFloat(target.value));
                    }}
                />
            </span>
            <span className="save">
                <Button variant="contained" disabled={token.length === 0 ? true : false }  size="small" onClick={() => addToken()}>Save</Button>
            </span>
            <Modal
                open={toggle}
                onClose={handleClose}
            >
                <div className="token-exist">
                    <p className="exist">Esse token ja Exite!!</p>
                </div>
            </Modal>
        </div>
    );
};
