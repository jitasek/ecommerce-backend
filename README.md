# E-Commerce Back End (ORM)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
<br>

This app builds the back end for an e-commerce site by modifying starter code. The task is to configure a working Express.js API to use Sequelize to interact with a MySQL database.
As a user of this app you can view, add, update, and delete products, product categories and product tags.

<br>

## User Story

As a manager at an internet retail company
I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies

<br>

## Motivation

The purpose of this app is to practice working with mySQL, Express.js, Sequelize, npm, Insomnia, and more.

<br>

## Installation and Usage

Clone this repository to your local environment using the following command in your terminal:

`git clone git@github.com:jitasek/ecommerce-backend.git`

Install all dependencies (dotenv, express, mysql2, sequelize) by using typing in the terminal:

`npm i`

Open the mysql shell, connect to mysql and run the following command to create the database:

`db/schema.sql`

Go back to your terminal and seed data in the database running:

`npm run seed`

Now start the server using:

`npm run start`

<br>
For the usage, please watch this [demonstration video](https://) to see how to set up the server and use Insomnia for sending queries.

<br>

## Acceptance Criteria

Given a functional Express.js API:
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file, I am able to connect to a database using Sequelize.

WHEN I enter schema and seed commands, a development database is created and is seeded with test data.

WHEN I enter the command to invoke the application, my server is started and the Sequelize models are synced to the MySQL database.

WHEN I open API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.

WHEN I test API POST, PUT, and DELETE routes in Insomnia, I am able to successfully create, update, and delete data in my database.

<br>

## Mockup

![Image](./images/13-orm-demo-01.gif)

![Image](./images/13-orm-demo-02.gif)

![Image](./images/13-orm-demo-03.gif)
