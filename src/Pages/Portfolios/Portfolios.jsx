import React from "react";
import Portfolio from "./Portfolio";
import Grid from "@material-ui/core/Grid";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import "./Portfolio.css";

const post = {
  title: "Company Name",
  message: "about company",
  tags: ["tag1", "tag2", "tag3"],
};

function Portfolios() {
  const classes = useStyles();
  const navigate = useNavigate();

  // an api will get the data of all posts here, we will use a map to make all posts and they will be wrapped around div which will take post_id as input for Buy then inside buy using that id we can access further data from api

  // div posts.map(post)= {div onclick (post.id) {port}} div
  const id1 = "0";
  const id2 = "1";
  const id3 = "2";
  return (
    <div>
      <h1>portfolios</h1>
      <div className='portfolio-container'>
        <div onClick={() => navigate(`Buy/${id1}`)}>
          {" "}
          <Portfolio post={post} />
        </div>
        <div onClick={() => navigate(`Buy/${id3}`)}>
          {" "}
          <Portfolio post={post} />
        </div>
        <div onClick={() => navigate(`Buy/${id2}`)}>
          {" "}
          <Portfolio post={post} />
        </div>
        <div onClick={() => navigate(`Buy/${id3}`)}>
          {" "}
          <Portfolio post={post} />
        </div>
      </div>
    </div>
  );
}

export default Portfolios;