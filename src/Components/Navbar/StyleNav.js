import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    font: "700 normal 1.37rem/1rem var(--poppins)",
    flexGrow: 1,
    fontSize: "1.5em",
    color: "#fc462d",
    fontWeight: "bold",
  },
  AppBarBackg: {
    background: "#0AC763",
  },
  Button: {
    fontSize: "1.1em",
    color: "white",
  },
}));
