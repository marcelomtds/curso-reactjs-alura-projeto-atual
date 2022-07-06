function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "O campo CPF deve ter 11 digitos." };
    } else {
        return { valido: true, texto: "" };
    }
}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "o campo senha deve ter entre 4 e 72 dígitos." };
    } else {
        return { valido: true, texto: "" };
    }
}

function validarNome(nome) {
    if (nome.length < 3 || nome.length > 72) {
        return { valido: false, texto: "O campo nome deve ter entre 3 e 72 dígitos." };
    } else {
        return { valido: true, texto: "" };
    }
}

export {validarCPF, validarSenha, validarNome}