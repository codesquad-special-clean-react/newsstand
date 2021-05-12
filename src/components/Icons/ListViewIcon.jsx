import * as React from "react";

function ListViewIcon(props) {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M492 236H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 86H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 386H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
      <circle cx={27} cy={106} r={27} />
      <circle cx={27} cy={256} r={27} />
      <circle cx={27} cy={406} r={27} />
    </svg>
  );
}

export default React.memo(ListViewIcon);
