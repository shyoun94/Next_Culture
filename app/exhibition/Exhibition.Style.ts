import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Main = styled.main`
  box-shadow: inset 0 0 10px 0 blue;
  width: 100%;
  height: 100vh;
`;

export const MainNav = styled.nav``;

export const MainSection = styled.section`
  box-shadow: inset 0 0 10px 0 black;
  & ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
  }
`;

export const Card = styled.article`
  box-shadow: inset 0 0 10px 0 black;
  width: 220px;
  height: 440px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  width: 180px;
  height: 250px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 0 auto 11px;
`;

export const CardContent = styled.div`
  h5 {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 12px;
    margin-top: 0px;
  }
  span {
    color: #828282;
    font-size: 13px;
    margin-right: 5px;
  }
  p {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;
