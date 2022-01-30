# google-sheet-api-app

Simple Full-stack app using Google Sheet API

# Tech Stack

- [NestJS](https://nestjs.com/)
- [React](https://reactjs.org/)
- [Google Sheet API](https://developers.google.com/sheets/api/quickstart/nodejs)

# Configuring Google Cloud Console

- Create Google Cloud Console account in https://console.cloud.google.com/
- Create and setup the project following this video - https://www.loom.com/share/476c1b67f8234199941396bc76266aa1
- Create a new Google Sheet. Click `Share` button.
- Assign the created service account(created in Google Cloud Console) as Editor role. Click `Done` button.

# Running the APP

- Create .env file inside server folder, set the env variables. Use .env.example file as reference. You can get the spreadsheetId from the google sheet url.
- Rename the downloaded Key file(downloaded in Google Cloud Console) as `credentials.json` and place the file inside server folder.
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
