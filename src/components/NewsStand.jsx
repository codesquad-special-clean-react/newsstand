import React from "react";
import { RecoilRoot } from "recoil";
import { NewsStandWrap } from "./NewsStandWrap.jsx";

export default function NewsStand() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <NewsStandWrap />
      </React.Suspense>
    </RecoilRoot>
  );
}
