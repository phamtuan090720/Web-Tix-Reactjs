import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
}));
export const DefaultButton = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" {...props}>
        {children}
      </Button>
    </div>
  );
};
