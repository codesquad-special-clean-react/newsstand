import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { MyNewsBtnWrap } from './Header.style';
import { routes } from '@router';
import { MODE } from '@utils/constant';
import { viewModeState } from '@recoilStore/news';

const ViewModeBtn = ({ path }) => {
  const [newsMode, setNewsMode] = useRecoilState(viewModeState);
  const changeViewMode = useCallback(({ target: { name } }) => setNewsMode(name), [newsMode]);

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

export default React.memo(ViewModeBtn);
