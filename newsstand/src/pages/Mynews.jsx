import React, { useEffect } from 'react';
import CardsList from "../components/Cards/CardsList"
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { subscribeState, mySubscribeNews } from "../atoms/myNewsState"
import NewsListSection from '../components/News/NewsListSection';

const Mynews = (props) => {
  const setSubscribeState = useSetRecoilState(subscribeState)

  useEffect(() => {
    setSubscribeState("Subscribed")
  }, [])

  return (
    <>
      <NewsListSection />
      {/* <CardsList /> */}
    </>
  )
}

export default Mynews;