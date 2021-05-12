import { useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { HistoryContext } from '@router';
import { pathState } from '@recoilStore/news';

export const usePath = () => {
  const { currentPath } = useContext(HistoryContext);
  const [path, setPath] = useRecoilState(pathState);

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

  return {
    path,
  };
};
