"use client";

import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl mx-auto px-2 md:px-10">{children}</div>;
};

export default Container;
