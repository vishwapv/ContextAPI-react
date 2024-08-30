import { React, useContext } from "react";

import { WareHouse } from "../context/Context";

const Client2 = () => {
  const { books } = useContext(WareHouse);
  return <p>I order this product : {books}</p>;
};

export default Client2;
