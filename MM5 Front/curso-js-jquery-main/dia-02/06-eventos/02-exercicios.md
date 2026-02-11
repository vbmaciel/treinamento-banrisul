# Exercícios: Eventos

## 1. Interação Visual com Mouse e Teclado
- Utilize o código HTML base disponível no arquivo [./_assets/01-exercicio1-boilerplate.html](./_assets/01-exercicio1-boilerplate.html).
- Implemente o código necessário para que, ao **mover o mouse sobre** a `div` com o `id="caixa-hover"`, sua cor de fundo mude para **`#add8e6` (azul claro)** e o texto mude para **"Você está dentro!"**.
- Quando o mouse **sair** da `div`, a cor de fundo e o texto devem ser restaurados ao estado original.

- Implemente o código necessário para que, **sempre que uma tecla for solta** no campo de texto com o `id="campo-feedback"`, o `<span>` com o `id="contador"` seja atualizado com o **número exato de caracteres** que estão dentro do campo.

---

## 2. Controle de Formulário e Prevenção

- Utilize o código HTML base disponível no arquivo [./_assets/02-exercicio2-boilerplate.html](./_assets/02-exercicio2-boilerplate.html).
- Implemente o código necessário para **impedir** que o formulário com o `id="form-pedido"` seja enviado (o que causaria o recarregamento da página) ao clicar no botão "Finalizar Pedido". 
- Em vez de enviar, o `<span>` com o `id="status-envio"` deve exibir a mensagem: **"Pedido interceptado! (Não enviado para o servidor)"**.

- Implemente o código para que, **sempre que o usuário mudar a opção** no campo `<select>` com o `id="tipo"`, o `<span>` com o `id="status-envio"` seja atualizado com a mensagem: **"Seleção alterada para: [VALOR SELECIONADO]"**. (O valor exibido deve ser o `value` da opção que foi selecionada).
