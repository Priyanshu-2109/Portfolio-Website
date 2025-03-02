import React from "react";

const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 text-lg font-medium ${
        active ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
