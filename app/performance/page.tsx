import React from "react";
import PerformanceList from "./Components/PerformanceList";

type Information = {
  description?: string;
  poster?: string;
  prfnm?: string;
  genrenm?: string;
  mt20id?: string;
  fcltynm?: string;
  prfpdfrom?: string;
  prfpdto?: string;
};
const xml2js = require("xml2js");

export default async function Performance() {
  const AccessKey = "df773f58d0d842ea8cbd1ada32ebde21";
  const res = await fetch(
    `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${AccessKey}&stdate=20230510eddate=20231022&rows=20&cpage=1`
  );
  const info = await res.text();
  const result = await xml2js.parseStringPromise(info, {
    explicitArray: false,
  });

  console.log(result);

  return (
    <>
      <PerformanceList list={result.dbs.db} />
    </>
  );
}
