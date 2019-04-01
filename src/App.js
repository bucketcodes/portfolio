import React, { Component } from "react";
import "./App.css";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import Hero from "./components/Hero";

import About from "./components/About";
import barrel from "./assets/barrel.jpg";
import submit from "./assets/submit.jpg";
import lessons from "./assets/lessons.jpg";

class App extends Component {
  state = {
    theposition: "",
    portfolio: [
      {
        title: "Barrel Developer Test - WIP",
        photoURL: barrel,
        codeURL: "https://github.com/bucketsec/Barrel-DeveloperTest-FrontEnd",
        viewURL: "http://dev-test-barrel-tim-terminus.pantheonsite.io/",
        skills: [
          "ReactJS Front End",
          "Headless Wordpress CMS",
          "Pantheon Host",
          "Wordpress RestAPI",
          "HTML & CSS - No visual libraries"
        ]
      },
      {
        title: "DIGICOM Film Festival Submissions",
        photoURL: submit,
        codeURL: "Placeholder",
        viewURL: "Placeholder",
        skills: [
          "ReactJS Front End",
          "Firebase - Firestore Backend",
          "NodeJS - Hosted on Azure",
          "AWS S3 Storage (Videos)",
          "Material UI"
        ]
      },
      {
        title: "Teacher Lesson Plan Builder",
        photoURL: lessons,
        codeURL: "placeholder",
        viewURL: "placeholder",
        skills: [
          "ReactJS Front End",
          "Firebase - Firestore Backend",
          "Authentication",
          "Redux",
          "React Router",
          "Material UI"
        ]
      }
    ]
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      theposition: scrolled
    });
  };

  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <section className="portfolio-container">
          <Grid className="portfolio-item-container" container spacing={24}>
            <Grid item xs={12}>
              <Typography
                style={{ color: "white", textAlign: "center" }}
                variant="h4"
              >
                My Portfolio
              </Typography>
            </Grid>
            {this.state.portfolio.map(item => (
              <Grid className="portfolio-item" item xs={6}>
                <Card style={{ backgroundColor: "white" }}>
                  <CardMedia
                    style={{ objectFit: "cover" }}
                    component="img"
                    alt="Image"
                    height="200"
                    image={item.photoURL}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <ul>
                      {item.skills.map(skill => (
                        <li>
                          <Typography variant="p">{skill}</Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "#1C77C3" }}>
                      View Project
                    </Button>
                    <Button size="small" style={{ color: "#1C77C3" }}>
                      View Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </div>
    );
  }
}

export default App;
