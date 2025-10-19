import React, { useRef, useEffect, useState } from "react";

export default function SmartForm() {
  // Refs for login inputs
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Refs for OTP inputs (4 digits)
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    otp: ["", "", "", ""],
  });

  // Auto focus the first input (username)
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  // Handle input change for login fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Move focus to the next login input when Enter is pressed
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter" && nextRef?.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  // Handle OTP input logic
  const handleOtpChange = (e, index) => {
    const value = e.target.value.slice(-1); // Only take last character
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData({ ...formData, otp: newOtp });

    // Move to next box automatically
    if (value && otpRefs[index + 1]) {
      otpRefs[index + 1].current.focus();
    }
  };

  // Simple form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username) {
      usernameRef.current.focus();
      usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!formData.email.includes("@")) {
      emailRef.current.focus();
      emailRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (formData.password.length < 6) {
      passwordRef.current.focus();
      passwordRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (formData.otp.includes("")) {
      alert("Please complete all OTP fields!");
      return;
    }

    alert(" Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6 transition-all"
      >
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-2">
          Smart Login Form 
        </h1>

        {/* Username */}
        <input
          ref={usernameRef}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, emailRef)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform focus:scale-105"
        />

        {/* Email */}
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, passwordRef)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform focus:scale-105"
        />

        {/* Password */}
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password (min 6 characters)"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 transition-transform focus:scale-105"
        />

        {/* OTP Section */}
        <div className="mt-6">
          <p className="text-gray-700 mb-2">Enter 4-digit OTP:</p>
          <div className="flex justify-between">
            {otpRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref}
                type="text"
                maxLength="1"
                value={formData.otp[index]}
                onChange={(e) => handleOtpChange(e, index)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform focus:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition-all focus:ring-4 focus:ring-indigo-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
