import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SlideItem from "./slideItem";
import { SlideType } from "../../types/slide";
import Slider, { Settings } from "react-slick";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";

const slides: SlideType[] = [
  {
    id: 1,
    title: "Cutting edge 3",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    image:
      "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
    isActive: false,
  },
  {
    id: 2,
    title: "Cutting edge 2",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    image:
      "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
    isActive: true,
  },
  {
    id: 3,
    title: "Cutting edge 1",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    image:
      "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
    isActive: false,
  },
];

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

const settings: Settings = {
  className: "center",
  centerMode: true,
  slidesToShow: 1,
  speed: 500,
  infinite: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        variableWidth: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        variableWidth: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        variableWidth: false,
      },
    },
  ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Slide() {
  const classes = useStyles();

  return (
    <>
      <Slider {...settings}>
        {slides.map((value) => (
          <Grid key={value.id} item className={classes.item}>
            <SlideItem slide={value} />
          </Grid>
        ))}
      </Slider>
    </>
  );
}
