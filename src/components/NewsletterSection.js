import React from "react";
import { Button } from "./Button";
import "./NewsletterSection.css";
import { useState } from "react";

function NewsletterSection() {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const handdleClick = () => {
    if (email.length > 0) {
      setError(false);
      setSubscribe(true);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      return null;
    }
    console.log("submitted!");
    setEmails([...emails, email]);
    console.log(email);
    console.log(emails);

    setEmail("");
  };

  return (
    <div className="newsletter" id="newsletter">
      <div className="newsletter-container">
        <div className="contact-wrapper">
          <div className="contact-agent">
            <h3>WORK WITH US</h3>
            <p>Call or email Alex to schedule a private showing</p>
            <Button
              className="btn"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              path="#newsletter"
            >
              CONTACT
            </Button>
          </div>
        </div>

        <div className="newsletter-wrapper">
          <div className="newsletter-subscribe">
            <h3>NEWSLETTER</h3>
            <p>
              Sign up for our newsletter for exclusive news and market updates.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="newsletter-input"
                name="email"
                placeholder="Your Email"
              />
              <p className={error ? "" : "hidden"}>Please enter your email</p>
              <button className="newsletter-btn" onClick={handdleClick}>
                SUBMIT
              </button>
              <p className={subscribe ? "" : "hidden"}>
                {" "}
                Thank you for submitting your email
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
