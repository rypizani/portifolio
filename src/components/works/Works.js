/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import malbart from '../../assets/recentprojects/MalbArt-transformed.png'
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Rhuna', 
      description: `Rhuna, a project management platform, I am a founding partner and developer of it.
      Technologies: Angular, Sequelize, Mysql, Theory of Graphs, Web Socket, Node.Js.`,
      alter: 'Rhuna',
      image: `${Startup}`,
    },
    { 
      id: 2,
      title: 'SoS Advogados', 
      description: `SoS Advogado, an app to hire lawyers wherever you are.Technologies: React Native, Mysql, Firebase, Sequelize.`,
      alter: 'SoS Advogado',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Portal Noivas', 
      description: `Portal Noivas, Website para cotação e organização do seu casamento.
      Tecnologias: React, Redux, Prisma, Postgres.`,
      alter: 'Portal Noivas',
      image: `${Portfolio}`,
    },
    { 
      id: 4,
      title: 'MalbArt App', 
      description: `Malbart App is designed to be used during the Malbart show where, depending on your choices, you can change the trajectory of the show.
      Technologies: React Native, Sequelizer, Mysql.`,
      alter: 'Malbart App',
      image: `${malbart}`,
    },
    { 
      id: 5,
      title: 'Solar Filter', 
      description: `Solar filter, an app developed to discover the ideal sun filter for your skin, based on a facial reading, your face is processed by an AI, searching for skin tones similar to yours and suggesting the sun filter. Technologies: React Native, Sequelizer, Mysql, Python.`,
      alter: 'Solar FIlter',
      image: `${Lofo}`,
    },
    { 
      id: 6,
      title: 'Lexical Analyzer', 
      description: `Lexical analyzer is responsible for transforming the source code into a sequence of tokens that will serve as input for the syntactic analyzer and the subsequent stages of the process of compiling or interpreting programming languages.`,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
