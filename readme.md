# Ideia inicial

## Obrigatório
    > API RESTful
        - StatusCode
        - MVC, (frontend separado, react + ts )
        - FireBase/FireStore (Para login de admin)
        - JWT (Para autenticação de usuario) ??
        - Chamada para API externa de produtos: https://dummyjson.com/products
        - logger
        - Envio de E-mail
        - Download de PDF
        - Implementar testes(jest)
        - documentação com swagger
        - Verificar a implantação do rabbitMQ / Kafka

    > SPA
        - Tela de login (sem cadastro, pois será feito com database)
        - Tela de exibição dos produtos da API
        - Store pra criar um carrinho com produtos

### Processo
    > A API local deve acessar a API externa de produtos e retornar no frontend
    >
    > Fazer login, selecionar os produtos e colocar num carrinho (salvar sessao com produtos), gerar um total com os valores
    > Ao clicar em 'concluir compra', receber um e-mail informando que foi feita com sucesso
    > No email deve ter a opção de baixar em PDF a nota da compra


