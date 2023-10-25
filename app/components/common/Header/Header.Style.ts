import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  height: 31.25rem;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  & section {
    max-width: 95rem;
    z-index: 10;
    width: 85%;
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
  margin: 20px 0 0 0;
`;

export const HeaderNav = styled.nav`
  margin-top: 30px;
  ul {
    margin-top: 10px;
    display: flex;
    gap: 1.5rem;
    text-align: center;
    color: #fff;
  }
`;

export const NavLink = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  color: #fff;
  opacity: 0.6;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    opacity: 1;
    color: #fff;
    transition: opacity 350ms ease;
  }
  &.active {
    opacity: 1;
  }
`;
