"use client";

import React from "react";
import Logo from "../../../../public/images/Group 1 (3).png";
import HeaderBg from "../../../../public/images/national-history-museum-4314035_1920.jpg";
import * as S from "./Header.Style";
type Props = {};

function Home({}: Props) {
  return (
    <S.Header>
      <section>
        <a>
          <S.LogoImg src={Logo} alt="호두 문화 로고 이미지" />
        </a>
        <S.HeaderNav>
          <ul>
            <li>공연</li>
            <li>전시</li>
            <li>위치정보</li>
            <li>날씨정보</li>
          </ul>
        </S.HeaderNav>
      </section>
      <S.Bg src={HeaderBg} alt="Header 배경 이미지" fill />
    </S.Header>
  );
}

export default Home;
