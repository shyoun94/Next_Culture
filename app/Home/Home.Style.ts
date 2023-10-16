import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Main = styled.main`
  height: 100vh;
  margin-top: -100px;
  background-color: #fff;
  position: relative;
  z-index: 10;
  padding: 15px;
`;

export const MainUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 0.6fr;
  gap: 15px;
  & li:not(:last-of-type) {
    box-shadow: 5px 5px 10px 0 #c4c4c4;
  }
  & li:nth-child(1) {
    grid-column: span 3;
    height: 29.0625rem;
  }
  & li:nth-child(2) {
    grid-column: span 3;
    height: 29.0625rem;
  }
  & li:nth-child(3) {
    grid-column: span 2;
    height: 18.75rem;
  }
  & li:nth-child(4) {
    grid-column: span 2;
    height: 18.75rem;
  }
  & li:nth-child(5) {
    grid-column: span 2;
    height: 18.75rem;
  }
`;
export const MainLink = styled(Link)`
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  & h3 {
    color: white;
    position: absolute;
    bottom: 15px;
    left: 10px;
    font-size: 45px;
  }
`;

export const ImageWrapper = styled.div`
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
export const MainLinkImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
