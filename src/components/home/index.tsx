import React from "react";
import Button from "@mui/material/Button"
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import star from'../../img/shooting-star.svg';
import edit from'../../img/edit.png';



export const Home = () => {
    const navigate = useNavigate();
    const getLocal = JSON.parse(localStorage.getItem('wallet') || "[]");
    return (
        <div className="form">
            <span className="title-token">
                <p><img src={star} className="wish-img"alt="wish"/>Wish Wallet</p>
                <Button variant="contained" size="small" onClick={() => navigate('/addtoken')
                }>Add Token</Button>
            </span>
            <span className="info">
                <div>Tokens</div>
                <div>Balance</div>
            </span>
            {getLocal.map((element: { tokenName: string; value: number; }, index: string) => (
                <>
                    <span className="tokens">
                        <span>
                            <div className="edit" onClick={() => navigate(`/edittoken/${index}`)
                            }>
                                <img src={edit} className="edit-img"alt="edit"/>
                                </div>
                            <div className="name">{element.tokenName}</div>
                        </span>
                        <span>
                            <div className="value" >{element.value}</div>
                        </span>
                    </span>
                </>
            ))}
        </div>
    );
};

