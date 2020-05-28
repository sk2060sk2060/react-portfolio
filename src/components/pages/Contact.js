import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";

function Contact(props) {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <p style={{marginLeft: "0px"}}>
        Your name
      <br></br>
        1234 E City Plaza,
      <br></br>
        Orlando, Florida 91608
      <br></br>
        123-456-7890
      <br></br>
        name@gmail.com
      </p>
    </Wrapper>
  );
}

export default Contact;