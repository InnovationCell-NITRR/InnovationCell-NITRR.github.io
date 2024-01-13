import React from "react";
import Portfolio from "./Portfolio";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import "./Portfolio.css";
import {useSelector} from "react-redux";
import {getPortfolio} from "../../actions/portfolio";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { isLoggedIn } from "../../actions/userActions";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  color: '#000',
  position: 'absolute',
  top: '53%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '78%',
  height: '64%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};


const post = {
  title: "Company Name",
  message: "about company",
  tags: ["tag1", "tag2", "tag3"],
};

function Portfolios() {
  const classes = useStyles();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.portfolios);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getPortfolio());
    dispatch(isLoggedIn());
  }, [dispatch]);

  return !posts.length ? (
    <div className='portfolio-container'>
      <h1>Portfolios</h1>
    </div>
  ) : (
    <div className='portfolio-container'>
      {" "}
      <h1>Portfolios </h1>
      <Button onClick={handleOpen}>Open modal</Button>
      {posts.map((post) => (
        <div className='card-div' onClick={() => navigate(`Buy/${post._id}`)}>
          <Portfolio post={post} />
        </div>
      ))}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="instructions" sx={style}>
          <Typography id="instruction-title" variant="h6" component="h2">
            Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Portfolios;
