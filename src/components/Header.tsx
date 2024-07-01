"use client";

import styled from "styled-components";

const HeaderComponent = styled.header`
  height: 10vh;
  background: #000;
  color: #fff;
  border-top: 3px solid #0c6eb7;
  border-bottom: solid 1px #eee;
`;

const Header = () => (
  <HeaderComponent>
    <p>ヘッダー</p>
  </HeaderComponent>
);

export default Header;
