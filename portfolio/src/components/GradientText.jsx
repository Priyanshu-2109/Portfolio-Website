import React from "react";

const GradientText = ({ children, colors, animationSpeed, className }) => {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% 100%",
        animation: `gradientMove ${animationSpeed}s infinite alternate`,
      }}
    >
      {children}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </span>
  );
};

export default GradientText;
