import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import CustomizedInput from "../componets/shared/CustomizedInput";
import { CiLogin } from "react-icons/ci";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signing In Successfully", { id: "login" });
    } catch (error) {
      console.log(error);

      toast.error("Signing In Failed", { id: "login" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {" "}
      <Box width={"100%"} height={"100%"} display="flex" flex={1}>
        <Box
          padding={8}
          mt={8}
          display={{ md: "flex", sm: "none", xs: "none" }}
        >
          {/* <img src={ai} alt="Robot" style={{ width: "400px" }} /> */}
        </Box>
        <Box
          display={"flex"}
          flex={{ xs: 1, md: 0.5 }}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          ml={"auto"}
          mt={16}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "10px 10px 20px #000",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                padding={2}
                fontWeight={600}
              >
                Login
              </Typography>
              <CustomizedInput type="email" name="email" label="Email" />

              <div style={{ position: "relative" }}>
                <CustomizedInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                />

                <div
                  onClick={handleTogglePassword}
                  style={{
                    position: "absolute",
                    right: "10px",
                    padding: "10px",
                    top: "55%",
                    fontSize: "19px",
                    backgroundColor: "transparent",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <Button
                type="submit"
                sx={{
                  px: 2,
                  py: 2,
                  mt: 2,

                  width: "400px",
                  borderRadius: 2,
                  color: "black",

                  bgcolor: "#00fffc",
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
                endIcon={<CiLogin />}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
