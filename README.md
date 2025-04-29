# 🚀 Projeto FIAP - Educação e Tecnologia

Este projeto foi desenvolvido para a empresa de educação FIAP. Ele tem como objetivo apresentar uma página interativa e responsiva, rica de informações, aplicando tecnologias front-end de altíssimo nível.

---

## 🌐 Link do Projeto Online

Você pode visualizar o projeto em funcionamento acessando o link abaixo:

🔗 [https://fiap-projeto.vercel.app](https://fiap-projeto.vercel.app)

---

## Tecnologias Utilizadas

### ⚙️ React
Biblioteca JavaScript para criação de interfaces dinâmicas e componentizadas. Utilizada para organizar e estruturar a interface de forma escalável.

### ⚡ Vite
Ferramenta de build extremamente rápida, usada para otimizar o ambiente de desenvolvimento e produção do React.

### 💅 styled-components
Biblioteca que permite escrever CSS diretamente dentro dos componentes, utilizando a abordagem de CSS-in-JS para maior modularidade e manutenibilidade.

### 🎥 GSAP (GreenSock Animation Platform)
Biblioteca de animações utilizada para criar transições suaves e interativas. Foi aplicada para:
- Animações de entrada (fade-in) em seções e componentes.
- Movimentação de elementos com base no scroll do usuário.
- Efeitos dinâmicos em botões e imagens.

### 🖼️ Modal com imagem
Implementado com controle de estado (`useState`) e eventos de clique, permitindo que uma imagem seja ampliada ao ser clicada.

### ⬆️ Scroll to Top Button
Um botão fixo que aparece após o usuário rolar a página, utilizando `window.scrollTo` para retornar ao topo com efeito suave.

### 📦 Lucide React
Biblioteca de ícones moderna baseada em SVG. Utilizada para fornecer ícones visuais nos cursores de interação (como "plus" e "minus").

### 🖋️ Gotham e Roboto (fontes locais)
Fontes utilizadas para compor o estilo visual do projeto. As fontes Gotham foram importadas localmente para personalização da identidade visual, e Roboto como fonte secundária.

---

## 🛠️ Estrutura do Projeto

Abaixo está a estrutura detalhada do projeto, com explicação das principais pastas e componentes:

```
fiap-projeto/
├── src/
│   ├── components/      # Componentes reutilizáveis da aplicação
│   │   ├── Header/      # Componente do cabeçalho
│   │   ├── HeroSection/ # Componente principal da seção hero
│   │   ├── ServicesSection/ # Componente da seção de serviços
│   │   ├── ContactSection/ # Componente da seção de contato
│   │   └── Modal/ # Componente para efeito modal em imgs
│   ├── styles/          # Estilos globais e variáveis CSS
│   │   └── global.css   # Estilos globais do projeto
└── ...
```

### Principais Componentes

- **Header**: Contém o título principal e o subtítulo, com estilização personalizada.
- **HeroSection**: Apresenta a seção inicial com título, subtítulo, parágrafos e uma imagem ampliável.
- **ServicesSection**: Exibe os serviços oferecidos, com um layout responsivo e interativo.
- **ContactSection**: Contém informações de contato e um formulário (se aplicável).
- **Modal**: Aplica o efeito modal em imagens que o usuário deseja ampliar.

---

## 📁 Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/fiap-projeto.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd fiap-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```

O projeto estará disponível no navegador em: [http://localhost:3000](http://localhost:3000)

---

## 👽 Autor

Projeto desenvolvido por **Eliseu Santos**.

- **E-mail**: [eliseu.fesantos@gmail.com](mailto:eliseu.fesantos@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/eliseu-fesantos/](https://www.linkedin.com/in/eliseu-fesantos/)

