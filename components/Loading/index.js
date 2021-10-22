import React from "react";
import { LoadinghWrapper } from "./styles";

function Loading(props) {
  return (
    <LoadinghWrapper>
        <div className="lds_ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </LoadinghWrapper>
  );
}

export default Loading;
