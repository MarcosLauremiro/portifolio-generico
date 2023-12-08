# Projeto Portfolio Genérico

Este é um projeto de portfólio genérico desenvolvido em React. Ele inclui seções como cabeçalho, banner, sobre mim, tecnologias, projetos e rodapé. O portfólio é alimentado com dados de usuário, tornando-o fácil de personalizar.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`/src`**: Contém todos os arquivos relacionados ao código-fonte.
  - **`/componentes`**: Armazena os componentes React utilizados no projeto.
  - **`/data`**: Contém dados de usuário e outras informações estáticas.
  - **`/styles`**: Inclui arquivos CSS para estilos globais, botões e redefinição de estilos.
  - **`App.js`**: Arquivo principal que integra todos os componentes para renderizar o portfólio.

## Componentes

### HeaderTop

O componente de cabeçalho que pode conter elementos de navegação ou outras informações importantes.

### BannerSection

Exibe um banner personalizado com o nome do usuário.

### About

Uma seção que fornece informações detalhadas sobre o usuário.

### Techs

Mostra as tecnologias com as quais o usuário está familiarizado.

### Projects

Apresenta os projetos realizados pelo usuário.

### Footer

O rodapé que pode incluir informações de contato ou links sociais.

## Utilização

1. **HeaderTop**: Personalize o componente conforme necessário, adicionando links de navegação ou outras informações relevantes.

2. **BannerSection**: Altere o nome do usuário passando a propriedade `userName`.

3. **About**: Atualize esta seção com detalhes específicos sobre o usuário.

4. **Techs**: Adicione ou remova tecnologias de acordo com as habilidades do usuário.

5. **Projects**: Inclua os projetos do usuário, fornecendo detalhes relevantes.

6. **Footer**: Personalize o rodapé adicionando informações de contato ou links sociais.

## Estilos

Os estilos globais estão divididos em três arquivos:

- **`reset.css`**: Reseta os estilos padrão do navegador para garantir uma aparência consistente.

- **`index.css`**: Fornece estilos específicos para o componente `index`.

- **`globalStyle.css`**: Inclui estilos globais compartilhados por vários componentes.

- **`button.css`**: Estilos específicos para botões.

## Executando o Projeto

1. Certifique-se de ter o Node.js instalado.

2. Execute `npm install` para instalar as dependências.

3. Execute `npm start` para iniciar o servidor de desenvolvimento.

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o portfólio.

Sinta-se à vontade para personalizar e expandir este projeto de acordo com suas necessidades específicas.
