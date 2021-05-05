import { useContext } from 'react';
import { HistoryContext } from './Router';

export const Route = ({ path, children, ...props }) => {
  const { currentPath } = useContext(HistoryContext);
  if (path !== currentPath) {
    return null;
  }
  return <div {...props}>{children}</div>;
};
