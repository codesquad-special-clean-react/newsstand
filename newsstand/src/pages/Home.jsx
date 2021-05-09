import React from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import newsState from "../atoms/newsState"
import CardsList from "../components/Cards/CardsList"


const Home = () => {
  const news = useRecoilValue(newsState)

  return (
    <>
      <CardsList pressList={news} />
    </>
  )
}

export default Home;