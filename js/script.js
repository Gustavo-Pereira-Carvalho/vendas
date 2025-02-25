document.addEventListener('DOMContentLoaded', function () {
    const botoesAdicionar = document.querySelectorAll('.adicionar-ao-carrinho');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const subtotalValor = document.getElementById('subtotal-valor');

    let carrinho = [];

    botoesAdicionar.forEach(function (botao) {
        botao.addEventListener('click', function (event) {
            const nome = botao.getAttribute('data-nome');
            const preco = parseFloat(botao.getAttribute('data-preco'));

            console.log('Nome do produto:', nome);
            console.log('Preço do produto:', preco);

            // Verificar se o produto já está no carrinho
            const produtoExistente = carrinho.find(item => item.nome === nome);

            if (produtoExistente) {
                // Se o produto já estiver no carrinho, atualize a quantidade
                produtoExistente.quantidade += 1;
            } else {
                // Se o produto não estiver no carrinho, adicione-o
                carrinho.push({ nome, preco, quantidade: 1 });
            }

            console.log('Carrinho:', carrinho);

            // Salvar carrinho no armazenamento local
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            // Atualizar exibição do carrinho na página
            atualizarCarrinho();
        });
    });

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';
        let total = 0;

        carrinho.forEach(function (item) {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nome} (Quantidade: ${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
            listaCarrinho.appendChild(listItem);
            total += item.preco * item.quantidade;
        });

        subtotalValor.textContent = total.toFixed(2);
    }
});
