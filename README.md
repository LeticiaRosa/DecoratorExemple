# Decorator Example

Este repositório demonstra o uso do **padrão de projeto Decorator** com **TypeScript**, de forma simples e didática. O objetivo é ilustrar como adicionar funcionalidades a objetos de forma flexível e dinâmica, sem modificar sua estrutura original.

## 📚 Sobre o Padrão Decorator

O padrão **Decorator** permite estender o comportamento de objetos de maneira modular, utilizando composição ao invés de herança. Ele é ideal para situações em que diferentes funcionalidades podem ser combinadas de forma dinâmica.

## 🛠️ Tecnologias

- TypeScript

## 📂 Estrutura do Projeto

DecoratorExemple/ ├── decorators/ │ ├── BoldDecorator.ts │ ├── ItalicDecorator.ts │ └── UnderlineDecorator.ts ├── interfaces/ │ └── TextFormatter.ts ├── models/ │ └── PlainText.ts ├── main.ts └── tsconfig.json

- `interfaces/TextFormatter.ts`: Interface base que define o contrato para os formatadores de texto.
- `models/PlainText.ts`: Implementação concreta da interface, que representa o texto simples.
- `decorators/`: Contém os decoradores que adicionam formatações como **negrito**, *itálico* e _sublinhado_.
- `main.ts`: Ponto de entrada da aplicação, onde os decoradores são utilizados e encadeados.

## ▶️ Como Executar

1. **Clone o repositório**
```bash
git clone https://github.com/LeticiaRosa/DecoratorExemple.git
cd DecoratorExemple
```
2. **Instale o TypeScript (caso ainda não tenha)**
  ```bash
  npm install -g typescript
  ```
3. **Compile o código TypeScript**
  ```bash
  tsc
  ```
4. **Execute o código**
  ```bash
  node main.js
  ```

## 💡 Exemplo de Saída

<b><i><u>Hello, world!</u></i></b>


## 🧠 Conceitos Envolvidos

Interface e implementação concreta

Composição de decoradores

Encadeamento de objetos

Princípio Aberto/Fechado (SOLID)


## 📄 Licença
Este projeto está sob a licença MIT.

Desenvolvido com 💙 por Letícia Rosa
