import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

function SignInUp() {
  const classes = useStyles();
  const [student, setStudent] = React.useState({
    firstname: "Prenom",
    lastname: "Nom"
  });
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="firstname"
        label="Prenom"
        placeholder={student.firstname}
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}

export default SignInUp;
