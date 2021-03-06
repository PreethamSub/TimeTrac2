import React, { useState, useEffect } from "react";

import AuthService from "../services/auth.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (AuthService.getCurrentUser()){
      setContent(AuthService.getCurrentUser().user.username);
    }
    else {
      setContent("Not Logged in");
    }
    
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>"{content}" Logged in successfully</h3>
      </header>
    </div>
  );
};

export default Home;
