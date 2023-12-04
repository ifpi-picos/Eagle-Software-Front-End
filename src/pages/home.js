import React from "react";
import Itens from "../components/listaItens/itensCadastrados";
import { authMiddleware } from "../middlewares/authMiddleware";

const Home = () => {
  return <Itens sortingCriteria="recentes" />;
};

export default authMiddleware(Home);
