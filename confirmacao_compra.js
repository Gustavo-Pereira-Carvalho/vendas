document.addEventListener('DOMContentLoaded', function () {
    const detalhesCarrinho = document.getElementById('detalhes-carrinho');
    const dadosCliente = document.getElementById('dados-cliente');
    const confirmarCompraForm = document.getElementById('confirmar-compra-form');

    // Função para exibir os detalhes da compra
    function exibirDetalhesCompra() {
        const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];

        carrinhoItens.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nome} x${item.quantidade}`;
            detalhesCarrinho.appendChild(listItem);
        });
    }

    // Função para exibir os dados do cliente
    function exibirDadosCliente() {
        const nome = localStorage.getItem('nome');
        const email = localStorage.getItem('email');
        const endereco = localStorage.getItem('endereco');

        const nomeItem = document.createElement('li');
        nomeItem.textContent = `Nome: ${nome}`;
        dadosCliente.appendChild(nomeItem);

        const emailItem = document.createElement('li');
        emailItem.textContent = `Email: ${email}`;
        dadosCliente.appendChild(emailItem);

        const enderecoItem = document.createElement('li');
        enderecoItem.textContent = `Endereço de Entrega: ${endereco}`;
        dadosCliente.appendChild(enderecoItem);
    }

    // Chamadas iniciais para exibir os detalhes da compra e os dados do cliente
    exibirDetalhesCompra();
    exibirDadosCliente();

    // Manipulador de evento para o envio do formulário de confirmação de compra
    confirmarCompraForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para finalizar a compra
        // Redirecionar o usuário para a página de agradecimento após a conclusão da compra
        window.location.href = 'agradecimento.html';
    });
});