import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import emailjs from "@emailjs/browser";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ContactWrapper = styled.div`
   background: #FAFAFF;
  padding: 120px 0 50px 0; /* Increase the top padding */
  display: flex;
  justify-content: center;
 
`;

const Container = styled.div`
  width: 90%;
  max-width: 600px;
  text-align: center;
  
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const BigCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0px 4px 10px rgba(108, 99, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  resize: none;
  height: 120px;
  transition: 0.3s;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0px 4px 10px rgba(108, 99, 255, 0.3);
  }
`;

const Button = styled.button`
  background: #6c63ff;
  color: #fff;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #554ee1;
    box-shadow: 0px 5px 15px rgba(108, 99, 255, 0.5);
  }
`;

const Message = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ success }) => (success ? "green" : "red")};
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
  transition: opacity 1s ease-in-out;

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      animation: ${fadeOut} 1s ease-in-out forwards;
    `}
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_iu0lrao", // Your EmailJS Service ID
        "template_kq8vvwo", // Your EmailJS Template ID
        formData,
        "m9a5ynjzxkJ3FCGAB" // Your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setError(false);
          setFadeOut(false); // Reset fade out effect
          setFormData({ name: "", email: "", message: "" });

          // Hide the success message smoothly after 3 seconds
          setTimeout(() => setFadeOut(true), 2000); // Start fade effect at 2 sec
          setTimeout(() => setSuccess(false), 3000); // Remove message at 3 sec
        },
        (err) => {
          console.log("FAILED...", err);
          setSuccess(false);
          setError(true);
          setFadeOut(false);

          // Hide the error message smoothly after 3 seconds
          setTimeout(() => setFadeOut(true), 2000);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <ContactWrapper id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ScrollAnimation animateIn="fadeIn">
          <BigCard>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextArea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></TextArea>
              <Button type="submit">Send</Button>
            </form>
            {success && (
              <Message success fadeOut={fadeOut}>
                Message sent successfully!
              </Message>
            )}
            {error && (
              <Message fadeOut={fadeOut}>Failed to send message. Try again.</Message>
            )}
          </BigCard>
        </ScrollAnimation>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;
