import React from "react";
import styled from "styled-components";
import Button from "../Ui/Button";


const Header = ({ isLoggedIn, setIsLoggedIn, setPage }) => {
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const userPageHandler = () => {
    setPage(true);
  };
  const timerPageHandler = () => {
    setPage(false);
  };

  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {isLoggedIn && (
        <Navigation>
          <Button onClick={userPageHandler}>Users</Button>
          <Button onClick={timerPageHandler}>Timer</Button>
          <Button onClick={logoutHandler}>Logout</Button>
        </Navigation>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #741088;
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.div`
  width: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
