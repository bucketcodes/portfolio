import React from 'react'
import {Typography, Grid} from '@material-ui/core'
import code from "../code.svg";
import pencil from "../pencil.svg";
import book from "../book.svg";
import tim from "../tim-blue-cut.jpg";

export default function About() {
  return (
    <Grid
          container
          spacing={24}
          style={{ maxWidth: 1100, margin: "auto", padding: "60px 0px" }}
        >
          <Grid className="skill" item sm={12} md={4}>
            <span className="icon">
              <img src={code} />
            </span>
            <Typography variant="p" className="skill-text">
              Excellent and growing skills in <strong>ReactJS</strong>, using
              tools such as
              <strong> Redux, Firebase, and RestAPI's</strong>. Established
              development skills in <strong>Javascript, HTML, and CSS</strong>.
              Developing skills in <strong>Node.JS, GraphQL, PHP</strong>, and
              anything else that is <strong>"Cutting Edge"</strong>.
            </Typography>
          </Grid>
          <Grid className="skill" item sm={12} md={4}>
            <span className="icon">
              <img src={pencil} />
            </span>
            <Typography variant="p" className="skill-text">
              Experience using applications such as{" "}
              <strong>Adobe Photoshop, Premiere Pro, Adobe XD</strong>, and{" "}
              <strong>Sketch</strong>. Strong follower of design trends such as{" "}
              <strong>Material UI</strong>. Lover of{" "}
              <strong>mobile first development, responsive,</strong> and{" "}
              <strong>user friendly designs</strong>.
            </Typography>
          </Grid>
          <Grid className="skill" item sm={12} md={4}>
            <span className="icon">
              <img src={book} />
            </span>
            <Typography variant="p" className="skill-text">
              Strong interpersonal skills. <strong>Public Speaking</strong> in
              front of 1-500 people. Practice{" "}
              <strong>managing and organizing</strong> a small team to obtain
              singular goals. Believer in task management applications such as{" "}
              <strong>Monday, Trello, Slack,</strong> and <strong>Teams</strong>
              . I'm ready to get a coffee with everyone.
            </Typography>
          </Grid>
          <Grid
            style={{
              posiition: "relative",
              display: "block",
              textAlign: "center",
              marginTop: 30
            }}
            item
            xs={4}
          >
            <img
              style={{ margin: "0px auto", width: "50%", borderRadius: "50%" }}
              alt="Hi"
              src={tim}
            />
          </Grid>
          <Grid style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={8}>
            <Typography variant="p" style={{textAlign: 'justify'}}>
              I never say "no". I say that because my main philosophy is being
              above the line of accountability. When you ask me to do something,
              even if I'm not confident with it, I will always try my best
              because it opens doors of opportunity for me to learn something
              new. Taking my experience as Director of Technology for 5 years in
              a small organization, I am ready to leap into my next career as a
              Front End Web Developer.
            </Typography>
          </Grid>
        </Grid>
  )
}
