// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Development environment
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC7i8GOocAbWdWec1UsLrjbKV8FDG-3zyc",
    authDomain: "my-cookbookapp.firebaseapp.com",
    databaseURL: "https://my-cookbookapp.firebaseio.com",
    projectId: "my-cookbookapp",
    storageBucket: "my-cookbookapp.appspot.com",
    messagingSenderId: "562366002068"
  }
};
