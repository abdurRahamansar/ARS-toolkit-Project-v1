import React, { useState } from "react";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsSubmitting(true);

      // TODO: Call your API here
      // Example:
      // await axios.post("/api/signup", form);

      console.log("Form submitted:", form);
      alert("Signed up successfully (demo only)!");

      // Reset form
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        textAlign:"center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "24px 24px 32px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "4px",
            textAlign: "center",
          }}
        >
          Create an account
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div style={{ marginBottom: "14px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "8px",
                border: errors.name ? "1px solid #dc2626" : "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {errors.name && (
              <p style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: "14px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "8px",
                border: errors.email ? "1px solid #dc2626" : "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {errors.email && (
              <p style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div style={{ marginBottom: "14px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "8px",
                border: errors.password
                  ? "1px solid #dc2626"
                  : "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {errors.password && (
              <p style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "18px" }}>
            <label
              htmlFor="confirmPassword"
              style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "8px",
                border: errors.confirmPassword
                  ? "1px solid #dc2626"
                  : "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {errors.confirmPassword && (
              <p style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "9999px",
              border: "none",
              fontSize: "15px",
              fontWeight: "600",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              background: isSubmitting ? "#9ca3af" : "#2563eb",
              color: "#ffffff",
              transition: "background 0.15s ease",
            }}
          >
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p
          style={{
            marginTop: "16px",
            fontSize: "13px",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
