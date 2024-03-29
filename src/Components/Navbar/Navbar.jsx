import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, IconButton} from "@material-ui/core";
import MoneyIcon from "@material-ui/icons/Money";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import logo from "./logoX.png";
import "./Navbar.css";
import {useDispatch, useSelector} from "react-redux";
import { isLoggedIn } from "../../actions/userActions";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#161622",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 55,
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none" /* hide title on screens smaller than 600px */,
    },
  },
  mainContent: {
    marginTop: theme.spacing(8),
  },
}));

const displayUserStock = (stock) => {
  let div = document.getElementById("userStockNav");
  div.textContent = stock;
};

function Navbar({socket}) {
  const classes = useStyles();
  const {user} = useSelector((state) => state.entryReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHistory = () => {
      navigate("/portfolios/history");
  }

  useEffect(() => {
    console.log("nav useffect");
    dispatch(isLoggedIn());

    socket &&
      socket.on("show-userStock", (stock) => {
        displayUserStock(stock[1]);
      });
    return () => {
      console.log("socket disconnecting in nav");
      socket && socket.disconnect();
    };
  }, [socket]);

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <img src={logo} alt='Nitrr Logo' className={classes.logo} />
        <IconButton color='inherit'>
          <MoneyIcon />
          <Typography variant='subtitle1' >
            $ <span onClick={handleHistory} id='userStockNav'>{user && user.userStock}</span>
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
