import React from "react";
import Itens from "../components/listaItens/itensCadastrados";
// import { authMiddleware } from "../middlewares/authMiddleware";

const ItensPage = () => {
  return <Itens sortingCriteria="id" />;
}

// export default authMiddleware(ItensPage);
export default ItensPage;