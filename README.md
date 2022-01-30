# google-sheet-api-app

Simple Full-stack app using Google Sheet API

# Tech Stack

- [NestJS](https://nestjs.com/)
- [React](https://reactjs.org/)
- [Google Sheet API](https://developers.google.com/sheets/api/quickstart/nodejs)

# Running the APP

- Create .env file inside server folder, set the env variables. Use .env.example file as reference. You can get the spreadsheetId from the google sheet url.
- Rename the downloaded Key file as `credentials.json` and place the file inside server folder.
- Run the app using following commands

## Server

```bash
$ cd server
$ yarn install
$ yarn start:dev
```

## Client

```bash
$ cd client
$ yarn install
$ yarn start
```
