import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/living-room-ideas-rds-work-malibu-04-1594225307.webp";
import img2 from "../assets/Images/cutlery-about.jpg";
import img3 from "../assets/Images/kitchen-about.jpg";

const Section = styled.div`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  font-family: "Oleo Script Swash Caps", cursive;
  font-weight: 400;
  font-size: 190px;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig}-5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 90%;
    height: auto;
  }
  .small-img-1 {
    width: 50%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 50%;
    position: absolute;
    left: 72%;
    bottom: 45%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10;
    }

    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 10;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About us.
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We're kitchen and home-ware store based in kenya. We provide high-end
        quality home products that will blow your mind. We ensure each product
        is unique piece of art. Why have a boring home while you can turn it to
        an ART master piece.
        <br />
        <br />
        We are very dedicated to providing our products. We offer unique and
        creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in providing things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a commerce business, we do our best
        to create amazing experiences for all people. We are always looking to
        make something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          className="small-img-2"
          alt="About Us"
        />
      </Right>
    </Section>
  );
};

export default About;
