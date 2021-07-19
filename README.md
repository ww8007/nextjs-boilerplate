# nextjs-boilerplate


- 참고 블로그

[blog1]'https://qnrjs42.github.io/react/redux/next_redux_toolkit/#pages_apptsx'
[blog2]'https://xploitdev.com/dev/next-redux-toolkit/'


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
