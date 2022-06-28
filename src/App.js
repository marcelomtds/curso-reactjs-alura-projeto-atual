import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto/400.css';

class App extends Component {

  render() {
    return (
      //o Fragment não é renderizado, nesse caso serve apenas para agrupar os elementos filhos e retornar um elemento pai
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O campo CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
