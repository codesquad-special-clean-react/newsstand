import React from "react";
import { useRecoilValue } from "recoil"
import { mySuscribeNews } from "../atoms/myNewsState"
import CardsList from "../components/Cards/CardsList"


const Home = () => {
  const news = useRecoilValue(mySuscribeNews)

  return (
    <>
      <CardsList pressList={news} />
    </>
  )
}

export default Home;