import React, { useEffect, useState } from 'react';
import BarraBusca from '../components/BarraBusca';
import { Cabecalho } from '../components/Cabecalho';

export function CadastroAnimal(props) {
  const [animalSelecionado, setAnimalSelecionado] = useState({});
  const [listaAnimais, setListaAnimais] = useState([]);

  useEffect(()=>{
    fetch("https://129.146.68.51/aluno34-pfsii/animais", { method: "GET"}).then((resposta) => {
      return resposta.json();
    }).then((dados)=>{
      setListaAnimais(dados);
    });
  },[])

  return (
    <>
      <Cabecalho />
      <BarraBusca 
        placeHolder='Informe o nome do animal'
        dados={listaAnimais}
        campoChave="genero"
        campoBusca="nome"
        funcaoSelecao={setAnimalSelecionado}
        valor={""}
      />
    </>
  );
}
