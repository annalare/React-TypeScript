import React from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
export default function Cronometro() {
  return (
    <React.Fragment>
      <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio />
        </div>
        <Botao> Começar!</Botao>
      </div>
    </React.Fragment>
  );
}
