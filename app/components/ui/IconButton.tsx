'use client'

import React from "react";

interface IconButtonProps {
  onClick?: () => void;
  icon: React.ReactElement;
  calssName?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  calssName,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-2 bg-white border hover:scale-110 shadow-md transition"
    >
      {icon}
    </button>
  );
};

export default IconButton;
