# Check in App

[https://www.yarnpkg.cn/](https://www.yarnpkg.cn)

> 用法 [https://www.yarnpkg.cn/getting-started/usage](https://www.yarnpkg.cn/getting-started/usage)
```sh
npm install -g yarn

yarn help

yarn init

yarn
yarn install

yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies

yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]

yarn remove [package]

yarn set version latest
yarn set version from sources
```

`yarn add`: adds a package to use in your current package.
`yarn init`: initializes the development of a package.
`yarn install`: installs all the dependencies defined in a package.json file.
`yarn publish`: publishes a package to a package manager.
`yarn remove`: removes an unused package from your current package.