import qs from 'qs';

import BlockList from '@blockView/BlockList';
import ListView from '@listView/ListView';
import { VIEW_MODE } from '@src/utils/constant';

const MyPress = ({ location: { search } }) => {
  const query = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const viewMode = query.viewMode;
  let ViewMode = viewMode === VIEW_MODE.BLOCK || !viewMode ? <BlockList /> : <ListView />;

  return <div>{ViewMode}</div>;
};

export default MyPress;
