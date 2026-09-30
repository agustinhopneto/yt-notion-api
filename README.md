<div align="center">

# 📒 Notion API Integration

**A Node.js CLI that creates and lists expenses in a Notion database.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

[![YouTube](https://img.shields.io/badge/Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=u2SMysbobYY)
[![DevClub PRO](https://img.shields.io/badge/Channel-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Video

This repository accompanies a video from the **[DevClub PRO](https://www.youtube.com/@DevClubPRO)** channel:

<div align="center">

<a href="https://www.youtube.com/watch?v=u2SMysbobYY" title="Notion API Integration! | NODE">
  <img src="https://img.youtube.com/vi/u2SMysbobYY/maxresdefault.jpg" alt="Notion API Integration! | NODE" width="720" />
</a>

**▶️ [Notion API Integration! | NODE](https://www.youtube.com/watch?v=u2SMysbobYY)**

<sub>🇧🇷 The video is in Brazilian Portuguese.</sub>

</div>

## 📖 About

In this project we use the official **`@notionhq/client`** SDK to turn a Notion database into a small expense tracker, straight from the terminal.

## 🎯 What you’ll learn

- Create a Notion integration and connect it to a database
- Authenticate with the official `@notionhq/client` SDK
- Create pages in a database (`notion.pages.create`)
- Query and transform database data (`notion.databases.query`)
- Read command-line arguments with `process.argv`

## 🗂️ Database structure

The Notion database must have these properties:

| Property | Type |
|---|---|
| `Nome` | Title |
| `Valor` | Number |
| `Origem` | Select |
| `Data` | Date |

## 💻 Usage

```bash
# List the expenses
node . list

# Create an expense
node . create '{"name":"Groceries","amount":150.9,"origin":"Credit card","date":"2024-03-14"}'
```

## 🚀 Getting started

> Prerequisite: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone the repository
git clone https://github.com/agustinhopneto/yt-notion-api.git
cd yt-notion-api

# 2. Install the dependencies
npm install

# 3. Set your integration token and database ID in src/config/notion.js
```

## 🛠️ Tech stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

---

<div align="center">

Enjoyed it? Leave a ⭐ on the repo and subscribe to the channel!

[![Subscribe](https://img.shields.io/badge/Subscribe-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Made with 💙 by **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
