# lambdadoro

Pomodoro Clock utilities written in the [functional programming style](https://en.wikipedia.org/wiki/Functional_programming) in [ReasonML](https://reasonml.github.io)/[ReasonReact](https://reasonml.github.io/reason-react) for use in Reason/Typescript/Javascript

and just to learn, obviously.

## Installation in Reason

```shell
# yarn from git
yarn add idkjs/bs-pomodoro

# or npm from git
npm install --save idkjs/bs-pomodoro
```

Then add it to `bsconfig.json`:

```json
"bs-dependencies": [
  "@idkjs/bs-pomodoro"
]
```

## Using Lambadoro in Reason

see [`examples/reason`](./examples/reason) or see it live ->[reason](reason.lambdadoro.surge.sh) 

`usePomodoro` takes an optional `initialTime` arg. If you have to pass in the arg even if you dont call it on your component. `usePomodoro` will look for the value and pass a default if not is provided.

```reason
[@react.component]
let make = (~initialTime:option(string)=?) => {
  let (time, startPomodoro, stopPomodoro, resetPomodoro) =
    UsePomodoro.usePomodoro(initialTime);

  <main className="app manager">
    <div className="timer-container">
      <h1 id="time" className="countdown"> {React.string(time)} </h1>
    </div>
    ...
  </main>;
};
```

## Installation in Typescript/Javascript 

```shell
# yarn from git
yarn add idkjs/bs-pomodoro

# or npm from git
npm install --save idkjs/bs-pomodoro
```

Then add it to `bsconfig.json`:

```json
"bs-dependencies": [
  "@idkjs/bs-pomodoro"
]
```

## Using Lambadoro in Typescript/Javascript

see [`examples/example-ts`](./examples/example-ts) or live ->[typescript](typescript.lambdadoro.surge.sh) 

see [`examples/example-js`](./examples/example-js) or live ->[javascript](javascript.lambdadoro.surge.sh) 



```reason
[@react.component]
let make = (~initialTime:option(string)=?) => {
  let (time, startPomodoro, stopPomodoro, resetPomodoro) =
    UsePomodoro.usePomodoro(initialTime);

  <main className="app manager">
    <div className="timer-container">
      <h1 id="time" className="countdown"> {React.string(time)} </h1>
    </div>
    ...
  </main>;
};
```

## Publishing to NPM

```sh
yarn publish --minor --access public
```

## Exportin ts files

1. Add `index.j` to `./src`
2. Export the `.bs.js` files.
3. In `package.json` add `"main": "src/index.js"`.