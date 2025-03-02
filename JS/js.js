fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Após carregar o header, ativar o link correto
        const activePage = window.location.pathname;
        console.log(activePage);

        if (activePage.endsWith("/index.html") || activePage === "/") {
            const inicioHeader = document.getElementById("inicioHeader");
            if (inicioHeader) {
                inicioHeader.classList.add("active");
            } else {
                console.error("Elemento com ID 'inicioHeader' não encontrado.");
            }
        }

        if (activePage.endsWith("/carros.html") || activePage === "/") {
            const carrosHeader = document.getElementById("carrosHeader");
            if (carrosHeader) {
                carrosHeader.classList.add("active");
            } else {
                console.error("Elemento com ID 'carrosHeader' não encontrado.");
            }
        }

        if (activePage.endsWith("/funcionarios.html") || activePage === "/") {
            const funcionariosHeader = document.getElementById("funcionariosHeader");
            if (funcionariosHeader) {
                funcionariosHeader.classList.add("active");
            } else {
                console.error("Elemento com ID 'funcionarioHeader' não encontrado.");
            }
        }

        if (activePage.endsWith("/despesas.html") || activePage === "/") {
            const despesasHeader = document.getElementById("despesasHeader");
            if (despesasHeader) {
                despesasHeader.classList.add("active");
            } else {
                console.error("Elemento com ID 'despesasHeader' não encontrado.");
            }
        }

        if (activePage.endsWith("/indicadores.html") || activePage === "/") {
            const indicadoresHeader = document.getElementById("indicadoresHeader");
            if (indicadoresHeader) {
                indicadoresHeader.classList.add("active");
            } else {
                console.error("Elemento com ID 'indicadoresHeader' não encontrado.");
            }
        }

        
    })
    .catch(error => console.error('Erro ao carregar o header:', error));