import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <FaRobot size={40} className="image-inverted" />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "20px" }}>MICKY</span>
      </Typography>
    </div>
  );
};

export default Logo;
