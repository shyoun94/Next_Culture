"use client";

import React from "react";
import * as S from "./Home/Home.Style";
import ShowImg from "../public/images/orchestra-2098877_1280.jpg";
import ExhibitionImg from "../public/images/student-1258137_1280.jpg";
import LocationImg from "../public/images/eyeglasses-8227429_1280.jpg";
import WeatherImg from "../public/images/rainbow-5108122_1280.jpg";
type Props = {};

function Home({}: Props) {
  return (
    <S.Main>
      <section className="main-section">
        <S.MainUl>
          <li>
            <S.MainLink href="/performance">
              <S.ImageWrapper>
                <S.MainLinkImage src={ShowImg} alt="공연 이미지" />
              </S.ImageWrapper>
              <h3>공연</h3>
            </S.MainLink>
          </li>
          <li>
            <S.MainLink href="/exhibition">
              <S.ImageWrapper>
                <S.MainLinkImage src={ExhibitionImg} alt="전시 이미지" />
              </S.ImageWrapper>
              <h3>전시</h3>
            </S.MainLink>
          </li>
          <li>
            <S.MainLink href="">
              <S.ImageWrapper>
                <S.MainLinkImage src={LocationImg} alt="위치정보" />
              </S.ImageWrapper>
              <h3>위치정보</h3>
            </S.MainLink>
          </li>
          <li>
            <S.MainLink href="">
              <S.ImageWrapper>
                <S.MainLinkImage src={WeatherImg} alt="날씨정보" />
              </S.ImageWrapper>
              <h3>날씨</h3>
            </S.MainLink>
          </li>
          <li></li>
        </S.MainUl>
      </section>
    </S.Main>
  );
}

export default Home;
