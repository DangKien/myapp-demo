import { Button, Container } from "@material-ui/core";
import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "./components/slider/slide";

const useStyles = makeStyles({
  title: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: 1.167,
    textAlign: "center",
    marginBottom: "0.35em",
  },
  header: {},
  content: {
    display: "flex",
    flexDirection: "column",
  },
  section: {},
  button: {
    margin: "8rem auto 0 !important" as "margin",
    borderRadius: "9999px !important" as "radius",
    padding: "10px 25px !important" as "padding",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.section}>
        <div className={classes.header}>
          <Typography
            className={classes.title}
            variant="h3"
            align="center"
            component="h3"
            gutterBottom
          >
            What we do
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </div>
        <div className={classes.content}>
          <Slide />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            View All Project
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
