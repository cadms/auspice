/* eslint-disable no-multi-spaces */
import React from "react"; // eslint-disable-line

const logoPNG = require("./bioportal-logo-small.png");

/* This code is straight from the auspice repo.
 * There are theme props available if one used styled components here
 */

const getStyles = () => ({
  flexColumns: {
    display: "flex",
    flexDirection: "row",
    whiteSpace: "nowrap",
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {
    padding: "5px 5px",
    width: "50px",
    cursor: "pointer"
  }
});

const NavBar = ({sidebar, width}) => {
  const styles = getStyles({minified: sidebar, width});
  return (
    <div style={styles.flexColumns}>
      <a id="Logo" style={styles.logo} href="/">
        <img alt="splashPage" width="40px" src={logoPNG}/>
      </a>
    </div>
  );
};

export default NavBar;
