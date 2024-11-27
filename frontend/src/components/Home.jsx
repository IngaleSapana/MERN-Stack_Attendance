// Home.js
import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } 
from '../styles/styles';
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from 'react-router-dom';

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  const handleSignUpClick = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <h1 className="font-Lobster text-3xl text-black">Welcome to Our Institution</h1>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleSignUpClick}>Sign Up</GuestButton> {/* Updated here */}
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>Attendance Management System</Title>
          <LoremTextContainer>
            <p>Welcome to the Attendance Management System! Our platform is designed to efficiently track and manage student attendance. With an intuitive interface, teachers can easily mark attendance, while administrators can monitor attendance trends and generate reports. This system ensures accurate record-keeping and helps improve student management and school operations.</p>
          </LoremTextContainer>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />
      </HomeContainer>
    </>
  );
};

export default Home;
