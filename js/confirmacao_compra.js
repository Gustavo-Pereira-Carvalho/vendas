document.addEventListener('DOMContentLoaded', function () {
    const resumoCarrinho = document.getElementById('resumo-carrinho');
    const dadosCliente = document.getElementById('dados-cliente');

    // Função para exibir o resumo do carrinho e os dados do cliente
    function exibirResumo() {
        const cliente = JSON.parse(localStorage.getItem('cliente')) || {}; // Recupera dados do cliente
        const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Exibe os dados do cliente
        dadosCliente.innerHTML = `
            <p><strong>Nome:</strong> ${cliente.nome}</p>
            <p><strong>Email:</strong> ${cliente.email}</p>
            <p><strong>Endereço:</strong> ${cliente.endereco}</p>
        `;

        // Exibe os itens do carrinho
        resumoCarrinho.innerHTML = '';
        if (carrinhoItens.length === 0) {
            resumoCarrinho.innerHTML = '<p>O seu carrinho está vazio.</p>';
        } else {
            carrinhoItens.forEach((item) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.nome} x${item.quantidade}`;
                resumoCarrinho.appendChild(listItem);
            });
        }
    }

    // Chama a função para exibir os dados assim que a página for carregada
    exibirResumo();

    // Redireciona automaticamente após 5 segundos
    setTimeout(function () {
        window.location.href = 'agradecimento.html'; // Redireciona para a página de agradecimento
    }, 500000); // 5 segundos
});
