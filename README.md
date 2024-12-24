# Projeto Sort Visualizer

![alt text](image.png)

## Informações do Aluno
| Matrícula  | Nome                             |
|------------|----------------------------------|
| 170140717 | Eduarda Rodrigues Tavares       |
| 211030747 | Filipe Carvalho da Silva        |

---

## Sobre o Projeto
Este projeto foi desenvolvido como uma ferramenta interativa para demonstrar o funcionamento de diferentes algoritmos de ordenação, com foco na estratégia "Dividir e Conquistar". Ele visa facilitar o aprendizado de algoritmos como **Merge Sort** e **Quick Sort**, permitindo que os usuários acompanhem visualmente os passos do processo de ordenação.

### Funcionalidades
1. **Gerar Lista de Números**: Um botão que gera uma lista aleatória de números, geralmente com 10 a 30 elementos.
2. **Escolha do Algoritmo**: Um menu dropdown para selecionar o algoritmo de ordenação desejado, como Merge Sort ou Quick Sort.
3. **Visualização Passo a Passo**: O aplicativo mostra como a lista é dividida, sublistas são ordenadas e combinadas em tempo real.
4. **Controle de Velocidade**: Um controle deslizante para ajustar a velocidade da animação, de acordo com a preferência do usuário.
5. **Reiniciar**: Um botão que permite reiniciar a lista e experimentar novamente.

---

## Como Executar o Projeto

### Pré-requisitos
Para executar o projeto, você precisará de:
- Node.js (versão 14 ou superior)
- NPM (geralmente incluído com o Node.js)
- React (instalado automaticamente com o projeto)

### Passo a Passo para Execução

1. **Clonar o Repositório**:
   - Abra o terminal e clone o repositório com o comando:
      ```bash
      git clone https://github.com/projeto-de-algoritmos-2024/SortVisualizer.git
      ```
   - Navegue até a pasta do projeto com:
     ```bash
     cd SortVisualizer
     ```

2. **Instalar Dependências**:
   - No diretório do projeto, instale as dependências com:
     ```bash
     npm install
     ```

3. **Iniciar o Projeto**:
   - Execute o comando para iniciar o servidor de desenvolvimento:
     ```bash
     npm start
     ```
   - O projeto estará disponível em `http://localhost:3000`.

### Como Usar a Aplicação

1. **Gerar Lista**
   - Clique no botão "Gerar Lista" para criar uma lista aleatória de números a serem ordenados.

2. **Escolher Algoritmo**
   - Use o menu dropdown para selecionar um dos algoritmos disponíveis, como Merge Sort ou Quick Sort.

3. **Iniciar a Visualização**
   - Observe o algoritmo dividir a lista em sublistas e ordená-las passo a passo.
   - A animação destacará as partes sendo processadas no momento.

4. **Ajustar Velocidade**
   - Use o controle deslizante para modificar a velocidade da animação, de mais lento para mais rápido.

5. **Reiniciar**
   - Clique no botão "Reiniciar" para gerar uma nova lista e repetir o processo com outro algoritmo ou velocidade.

---

## Tecnologias Utilizadas
- **React**: Para a interface interativa e implementação da lógica dos algoritmos de ordenação.
- **JavaScript**: Para a lógica dos algoritmos e animações.
- **HTML/CSS**: Para estilização e estrutura da interface.

## Considerações
Este projeto exemplifica como conceitos abstratos, como algoritmos de ordenação, podem ser apresentados de maneira prática e visual. É uma ferramenta educativa poderosa que conecta teoria e prática de forma intuitiva.

## Demonstração em Vídeo
Para mais detalhes, confira a [demonstração em vídeo do projeto](https://youtu.be/MoMc3qC1j1c).
