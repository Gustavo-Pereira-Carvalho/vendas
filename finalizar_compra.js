document.addEventListener('DOMContentLoaded', function () {
    const formularioCompra = document.getElementById('formulario-compra');
    const resumoCarrinho = document.getElementById('resumo-carrinho');

    // Função para exibir o resumo do carrinho na página de finalização de compra
    function exibirResumoCarrinho() {
        // Limpe o conteúdo anterior do resumo do carrinho
        resumoCarrinho.innerHTML = '';

        // Recupere os itens do carrinho do armazenamento local (ou de onde você os armazenou)
        const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Verifique se o carrinho está vazio
        if (carrinhoItens.length === 0) {
            resumoCarrinho.innerHTML = '<p>O seu carrinho está vazio.</p>';
            return;
        }

        // Exiba cada item do carrinho no resumo
        carrinhoItens.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nome} x${item.quantidade}`;
            resumoCarrinho.appendChild(listItem);
        });
    }

    // Chamada inicial para exibir o resumo do carrinho
    exibirResumoCarrinho();

    // Manipule o envio do formulário
    formularioCompra.addEventListener('submit', function (event) {
        event.preventDefault();

        // Aqui, você pode adicionar a lógica para processar a compra
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;

        // Simule uma mensagem de sucesso
        const mensagem = `Compra finalizada com sucesso!\n\nDetalhes da Compra:\nNome: ${nome}\nEmail: ${email}\nEndereço: ${endereco}`;
        alert(mensagem);

        // Redirecione o usuário para a página inicial ou de agradecimento
        window.location.href = 'agradecimento.html';
    });
});
