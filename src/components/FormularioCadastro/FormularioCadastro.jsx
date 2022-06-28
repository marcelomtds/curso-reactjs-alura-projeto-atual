import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { useState } from 'react';

function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
        }}>
            <TextField
                value={nome}
                onChange={event => setNome(maxLength(event.target.value, 20))}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                value={sobrenome}
                onChange={event => setSobrenome(maxLength(event.target.value, 30))}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(formatarCPF(event.target.value));
                }}
                onBlur={() => setErros({ cpf: validarCPF(cpf) })}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={event => setPromocoes(event.target.checked)}
                        name="promocoes"
                        color="primary" />
                } />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={event => setNovidades(event.target.checked)}
                        name="novidades"
                        color="primary" />
                } />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Cadastrar
            </Button>
        </form >
    );
}

function formatarCPF(cpf) {
    return maxLength(cpf.replace(/\D/g, ""), 11);
}

function maxLength(value, length) {
    return value.slice(0, length);
}

export default FormularioCadastro;
