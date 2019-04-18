import React from "react";
import "./Content.css";

export default function Content({ children }) {
  return <div className="markdown">{children}</div>;
}
