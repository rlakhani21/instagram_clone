// import { useEffect } from "react";
import "./App.css";
import faceIO from '@faceio/fiojs';
import { Link } from 'react-router-dom';


function App() {
  let faceio;
  // useEffect(() => {
  faceio = new faceIO("fioaab39");
  // }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "rlakhani759@rku.ac.in",
          pin: "1234",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`
      );
      <Link to='www.google.com'>go dashboard</Link>
      window.location.replace("http://localhost:5175/");

    } catch (error) {
      console.log(error);
    }
  };
  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
      window.location.replace("http://localhost:5173/");

    } catch (error) {
      console.log("error");
    }
  };


  return (

    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={handleLogIn}>Log-in</button>
      <button onClick={handleSignIn}>Sign-in</button>
    </section>
  );
}

export default App;

