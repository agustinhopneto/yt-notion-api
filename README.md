<div align="center">

# 📒 Integração com a API do Notion

**Um CLI em Node.js que cria e lista despesas em um database do Notion.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

[![YouTube](https://img.shields.io/badge/Assista_no_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=u2SMysbobYY)
[![DevClub PRO](https://img.shields.io/badge/Canal-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Vídeo

Este repositório acompanha o vídeo do canal **[DevClub PRO](https://www.youtube.com/@DevClubPRO)**:

<div align="center">

<a href="https://www.youtube.com/watch?v=u2SMysbobYY" title="Integração com a API do Notion! | NODE">
  <img src="https://img.youtube.com/vi/u2SMysbobYY/maxresdefault.jpg" alt="Integração com a API do Notion! | NODE" width="720" />
</a>

**▶️ [Integração com a API do Notion! | NODE](https://www.youtube.com/watch?v=u2SMysbobYY)**

</div>

## 📖 Sobre

Neste projeto usamos o SDK oficial **`@notionhq/client`** para transformar um database do Notion em um pequeno controle de despesas, direto pelo terminal.

## 🎯 O que você vai aprender

- Criar uma integração no Notion e conectá-la a um database
- Autenticar com o SDK oficial `@notionhq/client`
- Criar páginas em um database (`notion.pages.create`)
- Consultar e transformar os dados de um database (`notion.databases.query`)
- Ler argumentos da linha de comando com `process.argv`

## 🗂️ Estrutura do database

O database no Notion precisa ter estas propriedades:

| Propriedade | Tipo |
|---|---|
| `Nome` | Título |
| `Valor` | Número |
| `Origem` | Seleção |
| `Data` | Data |

## 💻 Uso

```bash
# Lista as despesas
node . list

# Cria uma despesa
node . create '{"name":"Mercado","amount":150.9,"origin":"Cartão","date":"2024-03-14"}'
```

## 🚀 Como rodar

> Pré-requisito: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone o repositório
git clone https://github.com/agustinhopneto/yt-notion-api.git
cd yt-notion-api

# 2. Instale as dependências
npm install

# 3. Configure o token da integração e o ID do database em src/config/notion.js
```

## 🛠️ Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

---

<div align="center">

Curtiu? Deixa um ⭐ no repositório e se inscreva no canal!

[![Inscreva-se](https://img.shields.io/badge/Inscreva--se-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Feito com 💙 por **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
