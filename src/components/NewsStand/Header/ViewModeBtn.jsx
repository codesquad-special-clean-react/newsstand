import React from 'react';
import { useSetRecoilState } from 'recoil';
import { MyNewsBtnWrap } from './Header.style';
import { routes } from '@router';
import { MODE } from '@utils/constant';
import { viewModeState } from '@recoilStore/news';

const ViewModeBtn = ({ path }) => {
  const setNewsMode = useSetRecoilState(viewModeState);
  const changeViewMode = ({ target: { name } }) => setNewsMode(name);

  if (path === routes.mynews.path) {
    return (
      <MyNewsBtnWrap>
        <button name={MODE.LIST} onClick={changeViewMode}>
          {MODE.LIST}
        </button>
        <button name={MODE.CARD} onClick={changeViewMode}>
          {MODE.CARD}
        </button>
      </MyNewsBtnWrap>
    );
  }

  return null;
};

export default ViewModeBtn;
