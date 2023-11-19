# Função `sumOfInterger`

A função `sumOfInterger` calcula a soma dos valores que são divisíveis por 3 ou 5 até um número específico (excluindo esse número).

## Como usar

1. **Baixar o arquivo:** Baixe o arquivo `sumOfInterger.js` para o seu projeto.

2. **Importar a função:** Importe a função `sumOfInterger` no seu arquivo JavaScript:

    ```javascript
    // Importe a função sumOfInterger
    function sumOfInterger(num) {
      // ... (código da função)
    }
    ```

3. **Chamar a função no Node.js:**

    - No terminal, navegue até o diretório onde está o arquivo `sumOfInterger.js`.
    - Utilize a função `require` do Node.js para importar a função e executá-la com um número inteiro positivo:

    ```bash
    node sumOfInterger.js
    ```

    **Nota:** Certifique-se de substituir o valor dentro da função `sumOfInterger` pelo número desejado.

4. **Testando a função:**

    Para testar a função `sumOfInterger`, siga estas etapas:

    - Chame a função com diferentes números inteiros positivos para verificar a soma dos valores divisíveis por 3 ou 5.
    - Verifique se a função retorna a soma correta para diferentes valores.

## Exemplo de uso:

```javascript
sumOfInterger(10);
// Isso retornará no console:
// A soma dos valores divisíveis por 3 ou 5 é: 23
```

## Considerações


Certifique-se de fornecer um número inteiro positivo como argumento para a função sumOfInterger. Se o argumento não for um número inteiro positivo, a função exibirá uma mensagem indicando que é necessário fornecer um número válido.

Considerações
Validação de Entrada: A função inclui uma verificação para garantir que o número fornecido seja um inteiro positivo. Caso contrário, mostrará uma mensagem de erro.
Personalização: Adapte a função conforme necessário para integrá-la ao seu código ou projeto específico.

Este arquivo README.md fornece instruções claras sobre como utilizar a função sumOfInterger em um projeto JavaScript. Você pode ajustá-lo e expandi-lo conforme necessário para o contexto do seu próprio projeto.
