# React useLocalStorage

[![npm package][npm-badge]][npm] ![npm-bundle-size] ![Module formats][module-formats] ![npm-download-count]

- It is an custom hook for browser localstorage management.
- For the same localstorage `key` It is consistent across the component (synchronize values between components).
- serializer (JSON.stringify)
- deserializer (JSON.parse)

### Demo

https://codesandbox.io/s/react-localstorage-hook-yfj5f

### Installation

Add `react-localstorage-hook` dependency

```bash
yarn add react-localstorage-hook
npm install react-localstorage-hook --save
```

### Usage

```js
import useLocalStorage from 'react-localstorage-hook'
```

```js
const [values, setValue] = useLocalStorage(key, initialValue)
```

### Options

| Name             | Type   | Default | Required | Description                                                                                   |
| ---------------- | ------ | ------- | -------- | --------------------------------------------------------------------------------------------- |
| **key**          | String | null    | true     | The key that will be used when calling localStorage.setItem(key)and localStorage.getItem(key) |
| **initialValue** | any    | ''      | false    | The initial value of the data.                                                                |

### License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[npm-download-count]: https://img.shields.io/npm/dm/react-localstorage-hook
[npm-bundle-size]: https://img.shields.io/bundlephobia/min/react-localstorage-hook
[npm-badge]: https://img.shields.io/npm/v/react-localstorage-hook?style=flat-square
[npm]: https://www.npmjs.com/package/react-localstorage-hook
[module-formats]: https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg?style=flat-square
