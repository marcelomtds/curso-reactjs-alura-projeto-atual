import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                id="email"
                name="email"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={event => setEmail(event.target.value)}
                fullWidth
                required />

            <TextField
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                value={senha}
                onChange={event => setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                fullWidth
                required />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;
