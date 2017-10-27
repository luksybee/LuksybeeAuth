# Luksybee Angular 2+ with Auth

This sample demonstrates how to add authentication to an Angular application using Auth0's Lock widget from the hosted login page. The sample uses the Angular CLI.

## Installation Instructions

[sign up](https://auth0.com) for free Auth0 account and create a new client in the [dashboard](https://manage.auth0.com). Find the **domain** and **client ID** from the settings area and add the URL for your application to the **Allowed Callback URLs** box. If you are using the server provided by the Angular CLI, that URL is `http://localhost:4200`.

After you Clone the repo or download, Install the Angular CLI and the dependencies for the app.

```bash
npm install -g @angular/cli
cd 01-Login
npm install
```

## Set the Client ID and Domain

In `src/app/auth/` path, rename the `auth0-variables.ts.example` file to `auth0-variables.ts` and provide the **client ID** and **domain**.

## Run the Application

The development server that comes with the Angular CLI can be used to serve the application.

```bash
npm start
```

The application will be served at `http://localhost:4200`.


## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

