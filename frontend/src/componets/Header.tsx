import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                // bg="#c2fc03"
                bg="#00fffc"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavigationLink
                // bg="#c2fc03"
                bg="rgb(81, 83, 143)"
                // bg="#00fffc"

                to="/"
                text="logout"
                textColor="black"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              {" "}
              <NavigationLink
                bg="#00fffc"
                to="/login"
                text="login"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                to="/signup"
                text="signup"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
