import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import { registerNewUser } from '../../Services/LoginService';
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { FaUser, FaLock, FaEnvelope, FaIdCard, FaUserShield } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterUser = () => {
  const [campusUser, setCampusUser] = useState({
    username: "",
    password: "",
    personName: "",
    email: "",
    role: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const saveUser = (event) => {
    event.preventDefault();
    if (campusUser.password === confirmPassword) {
      registerNewUser(campusUser).then((response) => {
        alert("User is registered successfully...Go For Login");
        navigate('/');
      });
    }
  };

  const onChangeHandler = (event) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setCampusUser(values => ({ ...values, [name]: value }));
  };

  const handleValidation = (event) => {
    event.preventDefault();
    let tempErrors = {};
    let isValid = true;

    if (!campusUser.username.trim()) {
      tempErrors.username = "User Name is required";
      isValid = false;
    }
    if (!campusUser.password.trim()) {
      tempErrors.password = "Password is required";
      isValid = false;
    }
    else if (campusUser.password.length < 5 || campusUser.passwordlength > 10) {
      tempErrors.password = "Password must be 5-10 characters long";
      isValid = false;
    }
    else if (campusUser.password !== confirmPassword) {
      tempErrors.password = "Both the passwords are not matched";
      isValid = false;
    }

    if (!campusUser.personName.trim()) {
      tempErrors.personName = "Personal Name is required";
      isValid = false;
    }
    if (!campusUser.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    }
    else if (!emailPattern.test(campusUser.email)) {
      tempErrors.email = "Invalid Email Format";
      isValid = false;
    }

    if (!campusUser.role.trim()) {
      tempErrors.role = "Role is required";
      isValid = false;
    }
    if (!confirmPassword.trim()) {
      tempErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    }
    setErrors(tempErrors);
    if (isValid) {
      saveUser(event);
    }
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      background: "linear-gradient(135deg, #000000, #0044ff)",
      display: "flex"
    }}>
      {/* Left Side - Animated */}
      <div style={{
        flex: 1,
        background: "linear-gradient(135deg, #000428, #004e92)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Background Circles */}
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(0, 68, 255, 0.2)",
          borderRadius: "50%",
          top: "-100px",
          left: "-100px",
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(0, 136, 255, 0.15)",
          borderRadius: "50%",
          bottom: "-80px",
          right: "-80px",
          animation: "float 8s ease-in-out infinite reverse"
        }}></div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-30px) scale(1.05);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        <h1 style={{
          fontSize: "3rem",
          fontWeight: "800",
          color: "white",
          marginBottom: "15px",
          textShadow: "2px 2px 20px rgba(0, 68, 255, 0.5)",
          position: "relative",
          zIndex: 1,
          animation: "slideInLeft 0.8s ease-out"
        }}>
          Join Us!
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#66b3ff",
          textAlign: "center",
          maxWidth: "450px",
          position: "relative",
          zIndex: 1,
          animation: "slideInLeft 1s ease-out",
          lineHeight: 1.6
        }}>
          Create your account to report and find lost items on campus.
        </p>
      </div>

      {/* Right Side - Register Form */}
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        padding: "30px",
        overflow: "hidden"
      }}>
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          padding: "30px 35px",
          borderRadius: "24px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 20px 60px rgba(0, 68, 255, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          animation: "slideInRight 0.8s ease-out"
        }}>
          <h2 style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "2rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #001a66, #0044ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Register
          </h2>

          <div>
            {/* Username */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "10px 15px",
                border: "2px solid #e0e6ed",
                transition: "all 0.3s ease"
              }}>
                <FaUser style={{ color: "#0044ff", marginRight: "12px", fontSize: "1rem" }} />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={campusUser.username}
                  onChange={onChangeHandler}
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    background: "transparent",
                    fontSize: "0.9rem"
                  }}
                />
              </div>
              {errors.username && <p style={{ color: "#ff0000", fontSize: "0.75rem", marginTop: "3px", marginLeft: "5px" }}>{errors.username}</p>}
            </div>

            {/* Password */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "10px 15px",
                border: "2px solid #e0e6ed",
                transition: "all 0.3s ease"
              }}>
                <FaLock style={{ color: "#0044ff", marginRight: "12px", fontSize: "1rem" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={campusUser.password}
                  onChange={onChangeHandler}
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    background: "transparent",
                    fontSize: "0.9rem"
                  }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", color: "#0044ff" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <PasswordStrengthMeter password={campusUser.password} />
              {errors.password && <p style={{ color: "#ff0000", fontSize: "0.75rem", marginTop: "3px", marginLeft: "5px" }}>{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "10px 15px",
                border: "2px solid #e0e6ed",
                transition: "all 0.3s ease"
              }}>
                <FaLock style={{ color: "#0044ff", marginRight: "12px", fontSize: "1rem" }} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    background: "transparent",
                    fontSize: "0.9rem"
                  }}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: "pointer", color: "#0044ff" }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && <p style={{ color: "#ff0000", fontSize: "0.75rem", marginTop: "3px", marginLeft: "5px" }}>{errors.confirmPassword}</p>}
            </div>

            {/* Full Name */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "10px 15px",
                border: "2px solid #e0e6ed",
                transition: "all 0.3s ease"
              }}>
                <FaIdCard style={{ color: "#0044ff", marginRight: "12px", fontSize: "1rem" }} />
                <input
                  type="text"
                  name="personName"
                  placeholder="Full Name"
                  value={campusUser.personName}
                  onChange={onChangeHandler}
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    background: "transparent",
                    fontSize: "0.9rem"
                  }}
                />
              </div>
              {errors.personName && <p style={{ color: "#ff0000", fontSize: "0.75rem", marginTop: "3px", marginLeft: "5px" }}>{errors.personName}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "10px 15px",
                border: "2px solid #e0e6ed",
                transition: "all 0.3s ease"
              }}>
                <FaEnvelope style={{ color: "#0044ff", marginRight: "12px", fontSize: "1rem" }} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={campusUser.email}
                  onChange={onChangeHandler}
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    background: "transparent",
                    fontSize: "0.9rem"
                  }}
                />
              </div>
              {errors.email && <p style={{ color: "#ff0000", fontSize: "0.75rem", marginTop: "3px", marginLeft: "5px" }}>{errors.email}</p>}
            </div>

            {/* Role */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#f8f9fa",
                borderRadius: "12px",
                padding: "10px 15px",
                border: "2px solid #e0e6ed",
                transition: "all 0.3s ease"
              }}>
                <FaUserShield style={{ color: "#0044ff", marginRight: "12px", fontSize: "1rem" }} />
                <select
                  name="role"
                  value={campusUser.role}
                  onChange={onChangeHandler}
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    background: "transparent",
                    fontSize: "0.9rem",
                    cursor: "pointer"
                  }}
                >
                  <option value="">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              {errors.role && <p style={{ color: "#ff0000", fontSize: "0.75rem", marginTop: "3px", marginLeft: "5px" }}>{errors.role}</p>}
            </div>

            {/* Register Button */}
            <button
              onClick={handleValidation}
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #000000, #0044ff)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.4s ease",
                boxShadow: "0 8px 20px rgba(0, 68, 255, 0.4)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 30px rgba(0, 68, 255, 0.6)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 20px rgba(0, 68, 255, 0.4)";
              }}
            >
              Register
            </button>

            <p style={{
              textAlign: "center",
              color: "#4a5568",
              marginTop: "15px",
              fontSize: "0.85rem"
            }}>
              Already have an account?{" "}
              <span
                onClick={goToLogin}
                style={{
                  color: "#0044ff",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "underline"
                }}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;