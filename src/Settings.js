import React, { useState, useEffect } from "react";

const timeOut = t => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

const Settings = () => {
  const [result, setResult] = useState("Nothing");

  useEffect(() => {
    const getSomething = async () => {
      setResult(await timeOut(10000));
    };
    getSomething();
  }, []);

  return (
    <div>
      This is the settings page and result is: {result}
      <img
        src="https://edmullen.net/test/rc.jpg"
        className="App-logo"
        alt="logo"
      />
    </div>
  );
};

export default Settings;
