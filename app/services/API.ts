import axios from "axios";

// const AccessKey = "a3ece4dd-c43b-493a-a287-6f45471449f7";
// const Base_Url = "http://api.kcisa.kr/openapi/CNV_060/request";

// export const GetInformation = async () => {
//   try {
//     const res = await axios.get(
//       `${Base_Url}?serviceKey=${AccessKey}&numOfRows=30&pageNo=1`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const AccessKey = "85c8b4bf-de1f-493c-8b78-acd8ae36311e";
// const Base_Url =
//   "http://api.kcisa.kr/openapi/service/rest/meta2020/getKOCAperf";

// export const GetInformation = async () => {
//   try {
//     const res = await axios.get(
//       `${Base_Url}?serviceKey=${AccessKey}&numOfRows=30&pageNo=1`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const AccessKey = "54de07a8-5e27-49e8-a6dd-93140d9e9e61";
// const Base_Url = "http://api.kcisa.kr/openapi/service/rest/convergence/conver6";

// export const GetInformation = async () => {
//   try {
//     const res = await axios.get(
//       `${Base_Url}?serviceKey=${AccessKey}&numOfRows=200&pageNo=1`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const AccessKey = "ea5510bd9873706b00312ea9117b4bf7";
// const Base_Url =
//   "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json";

// export const GetInformation = async () => {
//   try {
//     const res = await axios.get(
//       `${Base_Url}?key=${AccessKey}&targetDt=20231014`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const AccessKey = "JlTVAu5XTLmE4TpIoj6wgUz9KlvsP4220xFzmeg9";
// const Base_Url =
//   "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json";

// export const GetInformation = async () => {
//   try {
//     const res = await axios.get(
//       `${Base_Url}?key=${AccessKey}&targetDt=20231014`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const axios = require("axios");
// const xml2js = require("xml2js");

// const AccessKey = "df773f58d0d842ea8cbd1ada32ebde21";
// const Base_Url = "openApi/restful/pblprfr";

// export const GetInformation = async () => {
//   try {
//     const res = await axios.get(
//       `${Base_Url}?service=${AccessKey}&stdate=20230510eddate=20231022&rows=50&cpage=1`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const result = await xml2js.parseStringPromise(res.data, {
//       explicitArray: false,
//     });

//     console.log(result);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
const xml2js = require("xml2js");

const AccessKey = "df773f58d0d842ea8cbd1ada32ebde21";
const Base_Url = "openApi/restful/pblprfr";

export const GetInformation = async () => {
  try {
    const res = await fetch(
      `openApi/restful/pblprfr?service=${AccessKey}&stdate=20230510eddate=20231022&rows=20&cpage=1`,
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
    return result;
  } catch (err) {
    console.log(err);
  }
};
