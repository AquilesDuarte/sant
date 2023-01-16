import styled from "styled-components";
import logo from "../imgs/logo.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Topo>
        <img src={logo} alt="Sant Pratas" />
      </Topo>

      <Botoes>

        <Link to={"/InstrucaoSemAnel"}>
          <button>Descubra o tamanho do seu anel</button>
        </Link>
      </Botoes>

      {/* <Dev>
        <p>
          <h1>Desenvolvido por: Aquiles Duarte</h1>
        </p>
      </Dev> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 60vw;
    height: auto;
    margin: 15px;
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

const Topo = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  img {
    width: 70%;
    max-width: 300px;
    height: auto;
    position: inherit;
    margin-bottom: 100px;
  }
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 20vh;
`;

const Botao2 = styled.button`
  background-color: #ffffff !important;
  color: #ca98e1 !important;
`;

const Dev = styled.h1`
  position: fixed;
  bottom: 2vh;
  color: red;

  h1 {
    color: rgba(0, 0, 0, 0.3);
  }
`;
