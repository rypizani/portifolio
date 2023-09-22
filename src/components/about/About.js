/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "200vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, with a three-year journey in the development market. My path as a full-stack developer has been marked by an unwavering passion for creating innovative technological solutions. During this period, I've had the opportunity to immerse myself in a variety of challenging projects, honing my skills in both front-end and back-end development. Additionally, I am a co-founder of the startup Rhuna, a project management platform. My constant pursuit of knowledge and my ability to work in multidisciplinary teams have allowed me to grow professionally and deliver high-quality products. I'm eager to continue contributing my talent and experience to drive the success of future projects.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize:500,
              height:500
            }}
          ></div>
          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
