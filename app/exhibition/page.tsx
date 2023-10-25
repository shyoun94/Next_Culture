// "use client";

// import React, { useEffect, useState } from "react";
// // import { GetInformation } from "../services/API";
// // import { useQuery } from "react-query";
// // import Image from "next/image";
// // import * as S from "./Exhibition.Style";
// // import { Suspense } from "react";
// // type Props = {};

// // type Information = {
// //   description: string;
// //   poster: string;
// //   prfnm: string;
// //   genrenm: string;
// //   mt20id: string;
// //   fcltynm: string;
// //   prfpdfrom: string;
// //   prfpdto: string;
// // };
// // const fetchExhibition = async () => {
// //   const res = await GetInformation();
// //   return res.dbs.db;
// // };
// // function Exhibition({}: Props) {
// //   const [information, setInformation] = useState<Information[] | undefined>();

// //   useEffect(() => {
// //     GetExhibition();
// //   }, []);

// //   const GetExhibition = async () => {
// //     try {
// //       const res = await GetInformation();
// //       console.log(res.dbs.db);
// //       setInformation(res.dbs.db);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   // console.log(information[0].referenceIdentifier);
// //   return (
// //     // <div>
// //     //   {/* {information?.map((item) => (
// //     //     <div key={item.rn}>
// //     //       <Image
// //     //         src={item.referenceIdentifier}
// //     //         alt={`포스터${item.rn}`}
// //     //         width={500}
// //     //         height={300}
// //     //         // unoptimized={true}
// //     //         priority
// //     //         crossOrigin="anonymous"
// //     //       />
// //     //     </div>
// //     //   ))} */}
// //     // </div>
// //     <S.Main>
// //       <S.MainNav>
// //         <ul>
// //           <li></li>
// //         </ul>
// //       </S.MainNav>
// //       <S.MainSection>
// //         <Suspense fallback={<p>Loading feed...</p>}>
// //           <ul>
// //             {information?.map((item) => (
// //               <li key={item.mt20id}>
// //                 <S.Card>
// //                   <S.ImgWrapper>
// //                     <Image
// //                       src={item.poster}
// //                       alt="연극 포스터"
// //                       width={180}
// //                       height={250}
// //                     />
// //                   </S.ImgWrapper>
// //                   <S.CardContent>
// //                     <h5>{item.prfnm}</h5>
// //                     <p>
// //                       <span>장르</span>
// //                       {item.genrenm}
// //                     </p>
// //                     <p>
// //                       <span>일정</span>
// //                       {`${item.prfpdfrom}~${item.prfpdto}`}
// //                     </p>
// //                     <p>
// //                       <span>장소</span>
// //                       {item.fcltynm}
// //                     </p>
// //                   </S.CardContent>
// //                 </S.Card>
// //                 {/* <div className="btn-group">
// //                 <button>예매하기</button>
// //                 <button>사이트</button>
// //               </div> */}
// //               </li>
// //             ))}
// //           </ul>
// //         </Suspense>
// //       </S.MainSection>
// //     </S.Main>
// //   );
// // }

// // export default Exhibition;
// import { useQuery } from "react-query";
// import { GetInformation } from "../services/API";
// import Image from "next/image";
// import * as S from "./Exhibition.Style";

// const fetchExhibition = async () => {
//   const res = await GetInformation();
//   return res.dbs.db;
// };

// function Exhibition() {
//   const { data: information } = useQuery("exhibition", fetchExhibition);

//   // Rest of your component
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <S.Main>
//         <S.MainNav>
//           <ul>
//             <li></li>
//           </ul>
//         </S.MainNav>
//         <S.MainSection>
//           <ul>
//             {information?.map((item) => (
//               <li key={item.mt20id}>
//                 <S.Card>
//                   <S.ImgWrapper>
//                     <Image
//                       src={item.poster}
//                       alt="연극 포스터"
//                       width={180}
//                       height={250}
//                     />
//                   </S.ImgWrapper>
//                   {/* ... Other item fields ... */}
//                 </S.Card>
//               </li>
//             ))}
//           </ul>
//         </S.MainSection>
//       </S.Main>
//     </React.Suspense>
//   );
// }

// export default Exhibition;
