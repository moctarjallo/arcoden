import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";

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
    firstname: "",
    lastname: "",
    address: "",
    school: "",
    level: "",
    tel: ""
  });
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container direction="column" alignItems="center">
        <Grid item direction="row">
          <TextField
            id="firstname"
            label="Prenom"
            placeholder={student.firstname}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="lastname"
            label="Nom"
            placeholder={student.lastname}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <TextField
          id="school"
          label="Ecole"
          placeholder={student.school}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="level"
          label="Niveau"
          placeholder={student.level}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="address"
          label="Quartier"
          placeholder={student.address}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="phone"
          label="Telephone"
          placeholder={student.tel}
          className={classes.textField}
          margin="normal"
        />
      </Grid>
    </form>
  );
}

export default SignInUp;
