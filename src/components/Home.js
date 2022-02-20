import React, { useState, useEffect } from "react";

import AuthService from "../services/auth.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (AuthService.getCurrentUser()){
      var result = [];
      var data = AuthService.getCurrentUser();
      for(var i in data)
        {result.push([i, data[i]]);}
      setContent(result);
    }
    else {
      setContent("Not Logged in");
    }
    
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content.map((a) => <div>{a}</div>)}Logged in successfully</h3>
      </header>
    </div>
  );
};

export default Home;
