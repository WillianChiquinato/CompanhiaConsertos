function showForm(formName) {
    // Esconde todos os formulários
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.classList.remove('active-form');
    });

    const selectedForm = document.getElementById(formName);
    selectedForm.classList.add('active-form');

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`button[onclick="showForm('${formName}')"]`);
    activeButton.classList.add('active');
}


// Exibe o formulário inicial
showForm('equipamentos');


//Tratamento da máscara de valores
function formatarValor(input) {
    let valor = input.value.replace(/\D/g, '');
    
    if (valor.length > 2) {
        valor = valor.replace(/(\d)(\d{2})$/, '$1,$2');
    }
    valor = valor.replace(/(\d)(\d{2})(?=\d)/g, '$1.$2');
    
    input.value = valor;
}

