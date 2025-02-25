document.addEventListener('DOMContentLoaded', function () {
    const formularioCompra = document.getElementById('formulario-compra');
    const resumoCarrinho = document.getElementById('resumo-carrinho');

    // Função para exibir o resumo do carrinho na página de finalização de compra
    function exibirResumoCarrinho() {
        resumoCarrinho.innerHTML = ''; // Limpa o conteúdo do resumo

        const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];

        if (carrinhoItens.length === 0) {
            resumoCarrinho.innerHTML = '<p>O seu carrinho está vazio.</p>';
            return;
        }

        // Exibe os itens do carrinho
        carrinhoItens.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nome} x${item.quantidade}`;
            resumoCarrinho.appendChild(listItem);
        });
    }

    // Chama a função para exibir o resumo do carrinho
    exibirResumoCarrinho();

    // Manipula o envio do formulário
    formularioCompra.addEventListener('submit', function (event) {
        event.preventDefault();

        // Coleta os dados do cliente
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;

        // Exibe uma mensagem de sucesso
        const mensagem = `Compra finalizada com sucesso!\n\nDetalhes da Compra:\nNome: ${nome}\nEmail: ${email}\nEndereço: ${endereco}`;
        alert(mensagem);

        // Redireciona para a página de agradecimento
        window.location.href = 'agradecimento.html';
    });
});
