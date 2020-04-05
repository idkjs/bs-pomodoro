# bs-pomodoro

Pomodoro Clock utilities written in ReasonML

## Installation

```shell
# yarn
yarn add @idkjs/bs-pomodoro

# or npm
npm install --save @idkjs/bs-pomodoro
```

Then add it to `bsconfig.json`:

```json
"bs-dependencies": [
  "bs-pomodoro"
]
```

## Publishing to NPM

```sh
yarn publish --minor --access public
```

## Exportin ts files

1. Add `index.j` to `./src`
2. Export the `.bs.js` files.
3. In `package.json` add `"main": "src/index.js"`.