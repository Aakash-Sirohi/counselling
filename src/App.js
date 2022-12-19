import "./App.css";
import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function App() {
  return Navbar();
}

function MyButton() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
function Navbar() {
  const navBarContent = {
    index1: "Home",
    index2: "Home",
    index3: "Home",
    index4: "Home",
    index5: "Home",
  };

  return (
    <div lassName="cont">
      <Container className="main-header">
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <div className="logo">
              <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  <img src="./logo.svg" width="70" height="70" alt="" />
                </a>
              </nav>
            </div>
          </Grid>
          <a href="home">
          <div className="GridItem">
              <Grid item xs={1}>
                <h3
                  style={{
                    color: "#25164b",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                >
                  <a>Home</a>
                </h3>
              </Grid>
          </div>
          </a>

          <a href="career">
          <div className="GridItem">
           
              <Grid item xs={2}>
                <h3
                  style={{
                    color: "#25164b",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    
                  }}
                >
                 Career Explorer
                </h3>
              </Grid>
            
          </div>
          </a>
          <div className="GridItem">
          <a href="liveC">
            <Grid item xs={2}>
              <h3
                style={{
                  color: "#25164b",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                <a>Live Counselling</a>
              </h3>
            </Grid>
          </a>
          </div>

          <div className="GridItem">
          <a href="hub">
            <Grid item xs={2}>
              <h3
                style={{
                  color: "#25164b",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                <a>Learning Hub</a>
              </h3>
            </Grid>
          </a>
          </div>
          <div className="GridItem">
          <a href="abroad">
            <Grid item xs={1}>
              <h3
                style={{
                  color: "#25164b",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                <a>Study Abroad</a>
              </h3>
            </Grid>
          </a>
          </div>

          <Grid item xs={1}>
            <h3>
              <a></a>
            </h3>
          </Grid>
          <div className="GridItem">
          <a href="Login">
            <Grid item xs={1}>
              <h3
                style={{
                  color: "#25164b",
                  fontSize: "10px",
                  fontFamily: "monospace",
                }}
              >
                <a>Login</a>
              </h3>
            </Grid>
          </a>
                </div>
          <div className="GridItem">
          <a href="Sign Up">
            <Grid item xs={1}>
              <h3
                style={{
                  color: "#25164b",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                <a>Sign Up</a>
              </h3>
            </Grid>
          </a>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
