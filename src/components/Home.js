import React, { useState, useEffect } from "react";

import AuthService from "../services/auth.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser().user.username
    if (user){
      setContent({user});
    }
    else {
      setContent("Not Logged in");
    }
    
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content} Logged in successfully</h3>
      </header>
    </div>
  );
};

export default Home;
