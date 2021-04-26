import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SlideType } from "../types/slide";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 250,
  },
  title: {
    padding: "15px 0",
  },
  button: {
    margin: "25px auto !important" as "margin",
    borderRadius: "9999px !important" as "radius",
    padding: "10px 25px !important" as "padding",
  },
  active: {},
});

type propsType = {
  slide: SlideType;
};

const SlideItem: React.FC<propsType> = React.memo(({ slide }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={slide.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.title}
            align="center"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {slide.title}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {slide.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Read more
          </Button>
        </CardActions>
      </Card>
    </>
  );
});

export default SlideItem;
