import { motion } from "framer-motion";
import React, { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import { Logot } from "./AllSvgs";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Water Brush", cursive;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;
const FooterComponent = styled(motion.footer)`
  width: 80vw;
  @media (max-width: 48em) {
    width: 80vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }
  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transform: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;
const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0.4rem 0;
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Smooch", cursive;

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 34px;
    @media (max-width: 48em) {
      font-size: calc(64px - 5vw);
    }
  }
  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    font-size: ${(props) => props.theme.fontxl};

    span {
      transform: none !important;
    }
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <Section>
      <LogoContainer>
        <Logot
          data-Scroll
          data-scroll-speed="2"
          width="10vw"
          height="auto"
          alt="Logo"
          fill="#ffff"
        />
        <h3 data-Scroll data-scroll-speed="-1">
          Mwiku
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>Home</li>
          <li onClick={() => handleScroll(".about")}>About</li>
          <li onClick={() => handleScroll("#products")}>Our Products</li>
          <li onClick={() => handleScroll("#best")}>Best seller's</li>
          <li onClick={() => handleScroll("shop")}>Shop</li>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noreferrer">
              our location
            </a>
          </li>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noreferrer">
              review
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-Scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy;{new Date().getFullYear()}.All Rights Reserved.
          </span>
          <span
            data-Scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            {" "}
            made by &nbsp;
            <a
              href="http://www.georgeokello.me"
              target="_blank"
              rel="noreferrer"
            >
              George Okello
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
