## Black Friday - Evolution Force

Landing page de Black Friday para academia: Permite aos usuários visualizar os benefícios dos planos de treino e avançar na compra. A página conta com um contador de tempo da promoção e uma seção de perguntas frequentes.

### Estrutura do Projeto
O projeto está organizado da seguinte forma:

* **index.html**: Estrutura do site.
* **styles.css**: Arquivo CSS responsável pelo estilo visual do aplicativo, incluindo layout, cores e tipografia.
* **scripts.js**: Arquivo JavaScript que contém a lógica de interatividade e funcionalidades do projeto.

### Funcionalidades Principais

* **Temporizador de Contagem Regressiva**
  * Mostra o tempo restante da promoção da Black Friday, com dias, horas, minutos e segundos.
  * Ao término do prazo, exibe a mensagem "OFERTA ENCERRADA".

* **Seção de Perguntas Frequentes (FAQ)**
  * Os usuários podem alternar entre as perguntas para mostrar ou ocultar as respostas, com animações suaves.

* **Rolagem Suave**
  * Botão dedicado para rolar a página suavemente até a seção de planos.

* **Modal de Checkout**
  * Modal interativo que aparece quando um plano é selecionado.
  * Exibe os detalhes do plano, incluindo nome, preço original, preço com desconto e percentual de desconto.

* **Seleção de Método de Pagamento**
  * Opções para escolher o método de pagamento, destacando o selecionado.
  * Exibe campos específicos para cartão de crédito quando a opção é escolhida.

* **Validação do Formulário de Compra**
  * Impede o envio do formulário caso o campo CPF esteja vazio.
  * Exibe uma mensagem de sucesso ao finalizar a compra e fecha o modal.

* **Modal de Termos e Condições**
  * Mostra os termos de uso específicos para cada plano.
  * Usuários precisam aceitar os termos antes de prosseguir com a compra.

* **Modal de Saída (Exit Intent)**
  * Detecta quando o usuário tenta sair da janela e exibe um modal incentivando a continuar navegando.

* **Prevenção de Comportamento Padrão nos Links**
  * Links das redes sociais têm o comportamento padrão desativado para manter o foco na página.


### Instrução de Uso

* **Abra o arquivo index.html em qualquer navegador para visualizar o projeto.**
