import { useState } from "react";
import styled from "styled-components";

// STYLED COMPONENTS
const Container = styled.div`
  background-color: #525252;
  padding: 10px 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 3rem;
  color: #3ac92d;
  font-family: "Passions Conflict", cursive;
  cursor: context-menu;
`;

// SIGNIN AND SIGNUP
const Auth = styled.div``;
const SignUp = styled.button`
  font-size: 1.2rem;
  border: none;
  margin: 0px 10px;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
`;
const SignIn = styled.button`
  font-size: 1.2rem;
  border: none;
  padding: 5px 8px;
  margin: 0px 10px;
  border-radius: 5px;
  cursor: pointer;

`;

// AVATAR
const AvatarCont = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid red;
`;

const AvatarImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
   // eslint-disable-next-line
  const [auth, setAuth] = useState(true);
  return (
    <Container>
      <Nav>Bio Generator</Nav>
      <Auth>
        {auth ? (
          <AvatarCont>
            <AvatarImg src="https://images.unsplash.com/photo-1664293272875-2cfa64e687c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </AvatarCont>
        ) : (
          <SignIn>SignIn</SignIn>
        )}
        {auth ? null : <SignUp>SignUp</SignUp>}
      </Auth>
    </Container>
  );
};

export default Navbar;
