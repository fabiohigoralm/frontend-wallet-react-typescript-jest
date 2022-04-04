import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import star from '../../img/shooting-star.svg';
import Modal from '@mui/material/Modal';
import "./styles.css";
type ParamsUse = {
  id: string | undefined;
};

export const EditToken: React.FC = () => {
  const { id }= useParams<ParamsUse>();
  const navigate = useNavigate();
  const getLocal = JSON.parse(localStorage.getItem('wallet') || "[]");
  const verify = [...getLocal]
  const [toggle, setToggle] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [token, setToken] = useState(getLocal[Number(id)].tokenName);
  const [balance, setBalance] = useState(getLocal[Number(id)].value);
  getLocal[Number(id)].tokenName = token;
  getLocal[Number(id)].value = balance;

  const edit = () => {
    verify.splice(Number(id), 1)
    const findToken = verify.findIndex((element: { tokenName: string; value: number; }) => element.tokenName === token)
    if (!(findToken < 0)) setToggle(true)
    else {
      localStorage.setItem("wallet", JSON.stringify(getLocal));
      navigate("/")
    }
  };
  const remove = () => {
    const dell = getLocal
    dell.splice(id, 1)
    localStorage.setItem("wallet", JSON.stringify(dell));
    navigate("/")
  }
  return (
    <div className="form">
      <span className="title-token">
        <p><img src={star} className="wish-img" alt="wish" />Wish Wallet</p>
      </span>
      <span className="add-token">
        <p>Edit Token</p>
        <Button color="secondary" variant="contained" size="small" onClick={() => navigate('/')}>Voltar</Button>
      </span>
      <span className="token">
        <p>Token</p>
        <input
          type="text"
          value={token}
          id="token"
          name="token"
          onChange={({ target }) => {
            setToken(target.value);
          }}
        />
      </span>
      <span className="balance">
        <p>Balance</p>
        <input min="0"
          value={balance}
          type="number"
          id="balance"
          name="balance"
          onChange={({ target }) => {
            setBalance(target.value);
          }}
        />
      </span>
      <span className="save-edit">
        <Button color="error" size="small" variant="contained"  onClick={() => setConfirm(true)}>Remove</Button>
        <Button variant="contained" size="small" disabled={token.length === 0 || balance.length === 0 ? true : false} onClick={() => edit()}>
          Save
        </Button>
      </span>
      <Modal
        open={toggle}
        onClose={() => setToggle(false)}
      >
        <div className="token-exist">
          <p className="exist">Esse token ja Exite!!</p>
        </div>
      </Modal>
      <Modal
        open={confirm}
        onClose={() => setConfirm(false)}
      >
        <div className="token-exist">
          <p className="alert-title">Deseja realmente excluir o token?</p>
          <span>
            <Button color="secondary" variant="contained" size="small" onClick={() => setConfirm(false)}>Voltar</Button>
            <Button color="error" variant="contained" size="small" onClick={() => remove()}>Remove</Button>
          </span>
        </div>
      </Modal>
    </div>
  );
};
