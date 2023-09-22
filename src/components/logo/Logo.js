import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={classes.svgHover}
    >

      {/* Letra P (centralizada mais para a esquerda) */}
      <rect className="cls-1" x="60" y="40" width="10" height="120" rx="5" />
      <rect className="cls-1" x="60" y="40" width="60" height="10" rx="5" />
      <rect className="cls-1" x="115" y="40" width="10" height="60" rx="5" />
      <rect className="cls-1" x="60" y="90" width="60" height="10" rx="5" />
    </svg>
  );
};
