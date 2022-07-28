import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logot } from "../sections/AllSvgs";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  .abs {
    @media (max-width: 48em) {
      width: 4em;
      height: 4em;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 2.6rem;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
    padding-bottom: 1.4rem;
  }
`;
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      duration: 2,
      delay: 7,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <Logot className="abs" width="7em" height="7em" fill="#ffff" />
        <Text variants={textVariants} initial="hidden" animate="visible">
          Mwiku
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
