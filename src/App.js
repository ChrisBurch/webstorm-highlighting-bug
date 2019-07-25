import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";
import "./App.css";
import { useOtherStyles } from "./styles";

const useStyles = makeStyles({
  test: {
    backgroundColor: "blue"
  }
});

function App() {
  const classes = useStyles();
  const otherClasses = useOtherStyles();
  return (
    <div>
      {/*In Webstorm 2019.2, this highlights correctly */}
      <div className={classes.test}>Test1</div>
      {/*In Webstorm 2019.2, this highlights in yellow, saying "Unresolved variable test2" */}
      <div className={otherClasses.test2}>Test2</div>
    </div>
  );
}

export default App;
