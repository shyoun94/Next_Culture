import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const MainNav = styled.nav``;

export const MainSection = styled.section`
  margin-bottom: 500px;
  & ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 40px;
  }
`;

export const Card = styled.article`
  width: 260px;
  min-height: 440px;
  height: fit-content;
  box-shadow: 0px 0px 5px 0px #0000004d;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 320px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 0 auto 11px;
  border-radius: 10px 10px 0 0;
  position: relative;
`;

export const PosterImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px 10px 0 0;
`;

export const CardContent = styled.div`
  width: 95%;
  margin: auto auto;
  h5 {
    width: 95%;
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 12px;
    margin-top: 0px;
    word-break: keep-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
    text-overflow: ellipsis;
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
