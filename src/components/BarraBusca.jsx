import { useState } from 'react';
import { Form, FormControl, Container } from 'react-bootstrap';
import React, { useRef } from 'react';
import './BarraBusca.css'

export default function BarraBusca({ placeHolder, dados, campoChave, campoBusca, funcaoSelecao, valor }) {
   
  const inputBusca = useRef();
  const [termoBusca, setTermoBusca] = useState(valor ? valor : "");
  const [dadosLista, setDadosLista] = useState(dados);
  const [itemSelecionado, setItemSelecionado] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  function filtrarResultado() {
    const dadosFiltrados = dados.filter((item) => {
      return termoBusca.length > 1 ? item[campoBusca].toLowerCase().includes(termoBusca.toLowerCase()) : false;
    });

    setDadosLista(dadosFiltrados);
    setMostrarResultados(dadosFiltrados.length > 0);
  } 

  return (
    <Container>
      <div className='barra'>
      <Form.Control 
        type="text" 
        ref={inputBusca}
        placeholder={placeHolder} 
        value={termoBusca} 
        required 
        onChange={e => {
          setTermoBusca(e.target.value.toLowerCase());
          filtrarResultado();
          if(!itemSelecionado){
            e.target.setAttribute('aria-invalid', true);
            e.target.setCustomValidity('erro');
          }
          else{
            e.target.removeAttribute('aria-invalid');
            e.target.setCustomValidity('');
          }
        }}
      />
      <div onClick={() => {
        setTermoBusca('');
        filtrarResultado();
        setItemSelecionado(false);
        funcaoSelecao({});
        inputBusca.current.setAttribute('aria-invalid', true);
        inputBusca.current.setCustomValidity('erro');
      }}>
        x
      </div>
      </div>
      <div className='resultado'>
        {mostrarResultados && (
          <ul data-resultado>
            {dadosLista.map(item => (
              <li key={item[campoChave]}
                onClick={() => {
                  setTermoBusca(item[campoBusca]);
                  setItemSelecionado(true);
                  funcaoSelecao(item);
                  inputBusca.current.setCustomValidity("");
                  setMostrarResultados(false);
                }}>
                {item[campoChave] + '-' + item[campoBusca]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}
