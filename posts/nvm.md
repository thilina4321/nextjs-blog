---
title: Node Version Manager
excerpt: NVM allows you to quickly install and use different versions of Node.js via the command line.
image: nvm.png
isFeatured: true
date: '2023-01-30'
---

# Node Version Manager (NVM)

NVM allows you to quickly install and use different versions of Node.js via the command line. When working with several projects, sometimes those projects use different Node.js versions. So, to quickly switch between node versions, we can use NVM.

Install NVM using this curl command:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Here's how you can use NVM:

- Install Node.js versions:
  - `nvm install 16.13.2`
  - `nvm install 14.17.1`

- Check your Node.js version:
  - `node -v`

- Suppose your Node.js version is currently shown as 14.17.1, but you want to switch to version 16.13.2. Use the following command:
  - `nvm use 16.13.2`

- Now, check your Node.js version again using `node -v`. It will be shown as 16.13.2.

So, NVM can be a great tool to use when you're working with several projects. You can learn more about NVM from [here](https://github.com/nvm-sh/nvm).
