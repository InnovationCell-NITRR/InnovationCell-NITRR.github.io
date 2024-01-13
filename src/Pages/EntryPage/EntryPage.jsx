import React, {useEffect, useRef} from "react";
import "./EntryPage.css";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, login} from "../../actions/userActions.js";
import logo from "./NITrr.png";
import logox from "./logoX.png";
import logoy from "./Icell4.png";
function EntryPage() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const codeRef = useRef(null);
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.entryReducer);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/portfolios");
    }
    if (error) {
      alert(error);
    }

    dispatch(isLoggedIn());
  }, [isAuthenticated, error, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const code = codeRef.current.value;

    console.log(code, name);
    dispatch(login(code, name));
  };

  return (
    <div className="entry">
      <div className="container">
        <div className="nit-logo">
          <img src={logo} alt="" width="140px" height="150px" />
        </div>
        <div className="card">
          <form className="content" onSubmit={(e) => handleSubmit(e)}>
            {/* <div className="logos">
              <div>
                {" "}
                <img src={logo} alt="" />
              </div>
              <div>
                {" "}
                <img src={logoy} alt="" />
              </div>
            </div> */}

            <h3>Sign In</h3>
            <p>
              <input type="text" placeholder="Name" ref={nameRef} />
            </p>
            <p>
              <input type="text" placeholder="Code" ref={codeRef} />
            </p>
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
