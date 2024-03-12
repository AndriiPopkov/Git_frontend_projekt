import React, { useEffect } from "react";
import pic1 from "./media/4.png";
import pic2 from "./media/0.png";
import { useNavigate } from "react-router-dom";
import ButtonElem from "../../UI/ButtonElem/ButtonElem";
import s from './NotFoundPage.module.css'

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  const styles = {
    marginTop: '92px'
  }

  return (
    <div className={[s.not_found, 'wrapper'].join(' ')} style={styles}>
      <div className={s.image}>
        <img src={pic1} alt="4"></img>
        <img src={pic2} alt="0"></img>
        <img src={pic1} alt="4"></img>
      </div>
      <h2>Page Not Found</h2>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <ButtonElem
        onClick={() => navigate("/")}
        text={"Go Home"}
        style={{ width: "210px", border: 'none' }}
      />
    </div>
  );
}

export default NotFoundPage;
