import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { validateUser } from '../../Services/LoginService';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validateLogin = () => {
    let tempErrors = {};
    if (!loginData.username.trim()) {
      tempErrors.username = "Username is required";
    }
    if (!loginData.password.trim()) {
      tempErrors.password = "Password is required";
    }
    
    setErrors(tempErrors);
    
    if (Object.keys(tempErrors).length === 0) {
      validateUser(loginData.username, loginData.password)
        .then((response) => {
          let role = String(response.data);
          console.log(role);
          if (role === "Admin") {
            navigate('/AdminMenu');
          } else if (role === "Student") {
            navigate('/StudentMenu');
          } else {
            alert("Invalid credentials. Please check your username and password.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Login failed. Please try again.");
        });
    }
  };

  const registerNewUser = () => {
    navigate('/Register');
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #4b4949ff, #464875ff, #3e5288ff)",
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Sign Up Button in Top Right Corner */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "30px",
        zIndex: 1000
      }}>
        <button
          onClick={registerNewUser}
          style={{
            padding: "10px 25px",
            background: "transparent",
            color: "#d6d9deff",
            border: "2px solid #2185e9ff",
            borderRadius: "25px",
            fontSize: "0.95rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 4px 15px rgba(30, 144, 255, 0.3)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.background = "#054a8fff";
            e.target.style.color = "white";
            e.target.style.boxShadow = "0 6px 20px rgba(30, 144, 255, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.background = "transparent";
            e.target.style.color = "#d9dee4ff";
            e.target.style.boxShadow = "0 4px 15px rgba(30, 144, 255, 0.3)";
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Main Content Container */}
      <div style={{
        display: "flex",
        flex: 1,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}>
        {/* Left Side - Title Section */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "60px",
          paddingRight: "40px"
        }}>
          <h1 style={{
            color: "white",
            fontSize: "3.5rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "2px 2px 8px rgba(30, 144, 255, 0.5)",
            marginBottom: "15px"
          }}>
            🔍 Lost and Found Locator
          </h1>
          <p style={{
            color: "#87ceeb",
            fontSize: "1.2rem",
            margin: 0,
            marginBottom: "10px"
          }}>
          </p>
          <p style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "1rem",
            maxWidth: "500px",
            lineHeight: "1.6"
          }}>
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "60px"
        }}>
          <div style={{
            background: "rgba(30, 144, 255, 0.05)",
            backdropFilter: "blur(10px)",
            padding: "40px",
            borderRadius: "20px",
            width: "100%",
            maxWidth: "450px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(30, 144, 255, 0.3)"
          }}>
            {/* User Icon */}
            <div style={{
              width: "80px",
              height: "80px",
              background: "rgba(30, 144, 255, 0.15)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 25px",
              backdropFilter: "blur(10px)",
              border: "3px solid #1e90ff",
              boxShadow: "0 0 20px rgba(30, 144, 255, 0.4)"
            }}>
              <FaUser size={40} color="#1e90ff" />
            </div>

            <h2 style={{
              color: "#1e90ff",
              textAlign: "center",
              marginBottom: "10px",
              fontSize: "2rem",
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(30, 144, 255, 0.5)"
            }}>
              Welcome Back
            </h2>
            <p style={{
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "0.9rem"
            }}>
              Sign in to access your account
            </p>

            <div>
              {/* Username */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "10px",
                  padding: "12px 15px",
                  border: "2px solid transparent",
                  transition: "all 0.3s"
                }}>
                  <FaUser style={{ color: "#1e90ff", marginRight: "12px" }} />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={handleChange}
                    style={{
                      border: "none",
                      outline: "none",
                      flex: 1,
                      background: "transparent",
                      fontSize: "0.95rem",
                      color: "#000"
                    }}
                  />
                </div>
                {errors.username && (
                  <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: "4px", marginLeft: "5px" }}>
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "10px",
                  padding: "12px 15px",
                  border: "2px solid transparent",
                  transition: "all 0.3s"
                }}>
                  <FaLock style={{ color: "#1e90ff", marginRight: "12px" }} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    style={{
                      border: "none",
                      outline: "none",
                      flex: 1,
                      background: "transparent",
                      fontSize: "0.95rem",
                      color: "#000"
                    }}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer", color: "#1e90ff" }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <p style={{ color: "#ff6b6b", fontSize: "0.8rem", marginTop: "4px", marginLeft: "5px" }}>
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Login Button */}
              <button
                onClick={validateLogin}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "linear-gradient(135deg, #1e90ff, #0066cc)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(30, 144, 255, 0.4)"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(30, 144, 255, 0.6)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(30, 144, 255, 0.4)";
                }}
              >
                Login
              </button>

              <p style={{
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "15px",
                fontSize: "0.85rem"
              }}>
                Secure access to your account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;