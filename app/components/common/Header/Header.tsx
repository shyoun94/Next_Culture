"use client";

import React from "react";
import Logo from "../../../../public/images/Group 1 (3).png";
import HeaderBg from "../../../../public/images/animals-2739386_1920.jpg";
import * as S from "./Header.Style";
import { usePathname } from "next/navigation";

type Props = {};

function Home({}: Props) {
  const param = usePathname();

  console.log(param);
  return (
    <S.Header>
      <section>
        <a>
          <S.LogoImg src={Logo} alt="호두 문화 로고 이미지" />
        </a>
        <S.HeaderNav>
          <ul>
            <li>
              <S.NavLink
                href="/performance"
                className={`${param === "/performance" ? "active" : ""}`}
              >
                공연
              </S.NavLink>
            </li>
            <li>
              <S.NavLink
                href="/exhibition"
                className={`${param === "/exhibition" ? "active" : ""}`}
              >
                전시
              </S.NavLink>
            </li>
            <li>
              <S.NavLink href="/performance">위치정보</S.NavLink>
            </li>
            <li>
              <S.NavLink href="/performance">날씨정보</S.NavLink>
            </li>
          </ul>
        </S.HeaderNav>
      </section>
      <S.Bg src={HeaderBg} alt="Header 배경 이미지" fill priority />
    </S.Header>
  );
}

export default Home;
