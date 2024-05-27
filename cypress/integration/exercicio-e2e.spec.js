/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')  
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('S', 'Green', 1)

        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('S', 'Black', 1)
        
        produtosPage.buscarProduto('Atlas Fitness Tank')
        produtosPage.addProdutoCarrinho('M', 'Blue', 1)

        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Green', 1)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.page-title').should('contain', 'Checkout')

    });

})
