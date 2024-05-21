import { lazy, useEffect, memo, useState, useReducer } from "react";
import "./App.css";

import OtpInput from "./Comps/OtpInput";
import { submitOtp } from "./apis/otpApis";
import { Button } from "./Comps/Styles";

function App() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (value) => {
    setLoading(true);
    submitOtp(value)
      .then((response) => {
        if (response.verified) {
          setMsg(response.status);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setMsg(error);
        setLoading(false);
      });
  };
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  return (
    <>
      <OtpInput
        valueLength={6}
        value={otp}
        handleInputChange={handleOtpChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {loading ? <p>Loading...</p> : msg && <p>{msg}</p>}
    </>
  );
}

export default App;
