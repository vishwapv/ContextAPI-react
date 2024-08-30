import { React, useContext } from "react";

import { WareHouse } from "../context/Context";

const Client1 = () => {
  const { bags } = useContext(WareHouse);
  return <p>I order this product : {bags}</p>;
};

export default Client1;
