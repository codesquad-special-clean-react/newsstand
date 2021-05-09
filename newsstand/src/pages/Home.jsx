import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { subscribeState, mySubscribeNews } from "../atoms/myNewsState"
import CardsList from "../components/Cards/CardsList"


const Home = () => {
  const setSubscribeState = useSetRecoilState(subscribeState)

  useEffect(() => {
    setSubscribeState("All")
  }, [])

  return (
    <>
      <CardsList />
    </>
  )
}

export default Home;