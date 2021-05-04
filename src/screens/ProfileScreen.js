import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: Premium)</h3>
              <h4>Renewal Date: 04/03/2021</h4>
              <div className="plan__1">
                <div class="plan__11">
                  <p>Netflix Standard</p>
                  <p>1080p</p>
                </div>
                <button className="subscribe__button">Subscribe</button>
              </div>
              <div className="plan__1">
                <div class="plan__11">
                  <p>Netflix Basic</p>
                  <p>480p</p>
                </div>
                <button className="subscribe__button">Subscribe</button>
              </div>
              <div className="plan__1">
                <div class="plan__11">
                  <p>Netflix Premium</p>
                  <p>14k + HDR</p>
                </div>
                <button className="current__button">Current Package</button>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
