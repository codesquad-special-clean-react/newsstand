import { useCallback, useContext } from 'react';
import { HistoryContext } from './Router';

export const Link = ({ to, children, ...props }) => {
  const { currentPath, setCurrentPath } = useContext(HistoryContext);
  const handleLinkClick = useCallback(
    (e) => {
      e.preventDefault();
      if (currentPath === to) {
        return;
      }
      history.pushState({ to }, '', to);
      setCurrentPath(to);
    },
    [currentPath]
  );
  return (
    <a {...props} onClick={handleLinkClick}>
      {children}
    </a>
  );
};
