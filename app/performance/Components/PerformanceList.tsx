"use client";
import React from "react";
import * as S from "./Performance.Style";
import { Suspense } from "react";
type Information = {
  description: string;
  poster: string;
  prfnm: string;
  genrenm: string;
  mt20id: string;
  fcltynm: string;
  prfpdfrom: string;
  prfpdto: string;
};

export default function PerformanceList({ list }: { list: Information[] }) {
  console.log(list);
  return (
    <S.Main>
      <S.MainNav>
        <ul>
          <li>공연중</li>
          <li>공연예정</li>
        </ul>
      </S.MainNav>
      <S.MainSection>
        <Suspense fallback={<p>Loading feed...</p>}>
          <ul>
            {list?.map((item) => (
              <li key={item.mt20id}>
                <S.Card>
                  <S.ImgWrapper>
                    <S.PosterImg
                      src={item.poster}
                      alt="연극 포스터"
                      fill
                      sizes="(max-width:260px), (min-height:320px)"
                    />
                  </S.ImgWrapper>
                  <S.CardContent>
                    <h5>{item.prfnm}</h5>
                    <p>
                      <span>장르</span>
                      {item.genrenm}
                    </p>
                    <p>
                      <span>일정</span>
                      {`${item.prfpdfrom}~${item.prfpdto}`}
                    </p>
                    <p>
                      <span>장소</span>
                      {item.fcltynm}
                    </p>
                  </S.CardContent>
                </S.Card>
                {/* <div className="btn-group">
                  <button>예매하기</button>
                  <button>사이트</button>
                </div> */}
              </li>
            ))}
          </ul>
        </Suspense>
      </S.MainSection>
    </S.Main>
  );
}
