import styled from "styled-components";
import { Link } from "react-router-dom";

import gif from "../imgs/medir-com-barbante.gif";

export default function Calibragem() {
  return (
    <Container>
      <ImgGif>
        <img src={gif} alt="instrucao" />
      </ImgGif>

      <Botoes>
        <Link to={"/MedicaoSemAnel"}>
          <button>Descobrir o tamanho</button>
        </Link>
        <Link to={"/"}>
          <Voltar>Voltar</Voltar>
        </Link>
      </Botoes>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-weight: bold;
    line-height: 40px;
    font-size: 20px;
  }

  h3 {
    line-height: 22px;
    font-size: 16px;
  }
`;

const ImgGif = styled.div`
  width: 80vw;
  height: auto;
  margin: 3vh 0;

  img {
    border-radius: 10px;
    max-height: 100%;
    max-width: 100%;
  }
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 5vh;

  button {
    width: 60vw;
    height: auto;
    margin: 20px;
    padding: 20px;
    background-color: #ca98e1;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Voltar = styled.div`
  display: flex;
  align-items: center;
  color: #ca98e1;
  cursor: pointer;
  font-size: 20px;
`;

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
`;
