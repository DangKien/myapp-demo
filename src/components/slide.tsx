import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SlideItem from "./slideItem";
import { SlideType } from "../types/slide";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "50px 0",
  },
  control: {
    padding: theme.spacing(2),
  },
  items: {
    justifyContent: "center",
  },
  item: {
    paddingLeft: "0 !important" as "paddingLeft",
  },
}));

const slides: SlideType[] = [
  {
    id: 1,
    title: "Cutting edge",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    image:
      "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
    isActive: false,
  },
  {
    id: 2,
    title: "Cutting edge",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    image:
      "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
    isActive: true,
  },
  {
    id: 3,
    title: "Cutting edge",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    image:
      "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
    isActive: false,
  },
];

export default function Slide() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={3} className={classes.items}>
            {slides.map((value) => (
              <Grid
                key={value.id}
                item
                className={classes.item + ` ${value.id === 2 && "active"}`}
              >
                <SlideItem slide={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
