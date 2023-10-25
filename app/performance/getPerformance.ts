export interface Performance {
  description?: string;
  poster?: string;
  prfnm?: string;
  genrenm?: string;
  mt20id?: string;
  fcltynm?: string;
  prfpdfrom?: string;
  prfpdto?: string;
}

const xml2js = require("xml2js");
const AccessKey = "df773f58d0d842ea8cbd1ada32ebde21";

export const GetInformation = async () => {
  try {
    const res = await fetch(
      `openApi/restful/pblprfr?service=${AccessKey}&stdate=20230510eddate=20231022&rows=50&cpage=1`,
      {
        headers: {
          "Content-Type": "application/xml",
        },
      }
    );
    const textData = await res.text();
    const result = await xml2js.parseStringPromise(textData, {
      explicitArray: false,
    });

    console.log(result);
    return result as Performance[];
  } catch (err) {
    console.log(err);
    return [];
  }
};
