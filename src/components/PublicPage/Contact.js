import React from "react";
import { Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <h1 className="contact__title">Contact Daniel</h1>
        <h5 className="contact__description">
          Thank you for taking the time to explore my project.
        </h5>
        <p className="contact__description2">
          This project was first started with intention in practicing
          <strong> OAuth and MongoDB </strong>. It was expanded to an auto
          dealership-like web site because I like cars. Due to short man-power,
          most of the links are external. self-built pages include /home,
          /vehicles, /contact, and /FAQ. Tech used:{" "}
          <strong>
            HTML, Sass, Bootstrap, JavaScript, React, Express, Node, OAuth,
            MongoDB
          </strong>
        </p>

        <form className="contact__form">
          <label for="name" id="name-label">
            Name
          </label>
          <input type="text" id="name" placeholder="Enter your name" required />
          <label for="email" id="email-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
          />
          <label for="role-label">
            Which option best describes your current role
          </label>
          <select id="dropdown">
            <option value="" disabled selected>
              Select current role
            </option>
            <option value="student">Student</option>
            <option value="hr">HR Manager</option>
            <option value="tech">Tech Manager</option>
            <option value="learner">Full time learner</option>
            <option value="prefer">Prefer not to say</option>
          </select>
          <label for="radio">Are you a sports car enthusiast?</label>
          <div className="radio-div">
            <input type="radio" name="sportscar" value="def" />
            {"  "}Definitely
          </div>
          <div className="radio-div">
            <input type="radio" name="sportscar" value="maybe" />
            {"  "}Maybe
          </div>
          <div className="radio-div">
            <input type="radio" name="sportscar" value="not" />
            {"  "}Not at all
          </div>
          <label for="textarea">Any comments or suggestions?</label>
          <textarea
            placeholder="Enter your comment here..."
            id="textarea"
          ></textarea>
          By submitting, you will be sending emails to Daniel
          <Button id="submit" variant="outline-secondary">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
}
