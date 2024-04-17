$(document).ready(function () {

    const tel = '(00) 00000-0000';
    const cpf = '000.000.000-00';
    const cep = '00000-000';

    $('#telefone').mask(tel);
    $('#cpf').mask(cpf);
    $('#number-cep').mask(cep);

    $.validator.addMethod("fullAddress", function(value, element) {
        return /[a-zA-Z]/.test(value);
    }, "Por favor, digite um endereço completo.");

    $.validator.addMethod("fullName", function(value, element) {
        return value.trim().split(/\s+/).length >= 2;
    }, "Por favor, digite seu nome completo.");

    $('form').validate({
        rules: {
            nome: {
                required: true,
                fullName: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true,
                fullAddress: true
            },
            bairro: {
                required: true
            },
            numero: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, digite seu nome',
                fullName: 'Por favor, digite seu nome completo'
            },
            telefone: 'Digite o número de telefone',
            cpf: 'Digite o número de CPF',
            cep: 'Digite o número CEP',
            email: 'Digite o seu E-mail',
            endereco: {
                required: 'Digite o seu endereço',
                fullAddress: 'Digite um endereço completo'
            },
            bairro: 'Digite o bairro',
            numero: 'Digite numero do endereço'
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            alert(`Formulário enviado com sucesso`);
            $('input').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

});
