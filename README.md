# nextjs-boilerplate

## 구성

- nextjs + typescript + redux-toolkit + styled-components

## 최초 세팅

> next 설정

    yarn create next-app .

> typescript 설정

    touch ./next-env.d.ts
    yarn add --dev typescript @types/react @types/node

## styled-components

> `.babelrc`

    touch .babelrc

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

> `webpack`

    code ./next.config.js
