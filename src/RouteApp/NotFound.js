import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  // useState
  // useEffect
  const navigate = useNavigate();

  return (
    <>
      <h1>Not Found</h1>
      <p>
        Unfortunately the page you are looking for has been moved or deleted
      </p>
      <button onClick={() => navigate("/")}>Navigate to the Home page</button>
    </>
  );
}

export default NotFound;
