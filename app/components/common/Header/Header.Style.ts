import Image from "next/image";
import styled from "styled-components";

export const Header = styled.header`
  height: 31.25rem;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  & section {
    z-index: 10;
    width: 76%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
export const Bg = styled(Image)`
  z-index: -10;
  object-fit: cover;
  object-position: center;
`;
export const LogoImg = styled(Image)`
  width: 270px;
  height: auto;
  margin: 20px 0 0 10px;
`;

export const HeaderNav = styled.nav`
  ul {
    margin-top: 30px;
    display: flex;
    gap: 1rem;
    text-align: center;
    color: #fff;
  }
`;
