# 📦 Node Package Manager (NPM)

## 🏁 1. Introduction
- Node Package Manager (NPM) allows us to create and use Node modules.
- NPM is included with Node.js.
- To install a specific version of Node:
  ```sh
  npm i -g npm@5.5.1
  ```

## 📜 2. Package.json
- Contains metadata about the application.
- To create `package.json`, run:
  ```sh
  npm init
  ```

## 📥 3. Installing a Node Package
- Search for the package you need on [npmjs.com](https://www.npmjs.com/).
- Install a package (e.g., `underscore`):
  ```sh
  npm i underscore
  ```
- Packages are stored inside `node_modules/`.

## 🛠️ 4. Using a Package
```javascript
var _ = require('underscore');

// This is how require function understands your module.
// It looks in Core Modules, Files/Folders, and node_modules.

let obj = _.contains([1,2,3], 2);
console.log(obj);
```

## 🔗 5. Package Dependencies
- Installing a package also installs its dependencies.
- All dependencies are stored in `node_modules/`.

## ⚙️ 6. NPM Packages and Source Control
- Avoid pushing `node_modules/` to source control.
- Use `.gitignore` to ignore `node_modules/`.
- After cloning a project, run:
  ```sh
  npm i
  ```
  This will install all required dependencies from `package.json`.

## 🔢 7. Semantic Versioning
- Format: `Major.Minor.Patch` (e.g., `"mongoose": "^4.13.6"`).
  - **Patch**: Bug fixes.
  - **Minor**: New features (backward-compatible).
  - **Major**: Breaking changes.
- `^` allows minor and patch updates, while `~` allows only patch updates.

## 📋 8. Listing Installed Packages
- Use:
  ```sh
  npm list
  ```
  to see installed packages and versions.

## 🔍 9. Viewing Registry Info for a Package
- View package details:
  ```sh
  npm view mongoose
  ```
- View dependencies:
  ```sh
  npm view mongoose dependencies
  ```
- View available versions:
  ```sh
  npm view mongoose versions
  ```

## ⬇️ 10. Installing a Specific Version
- Install a specific version of a package:
  ```sh
  npm i mongoose@2.2.2
  ```

## 🔄 11. Updating Local Packages
- Check outdated versions:
  ```sh
  npm outdated
  ```
- Update to the latest stable version:
  ```sh
  npm update
  ```
- Use `npm-check-updates` (NCU):
  ```sh
  ncu -u
  ```

## 🛠️ 12. DevDependencies
- Used for development (e.g., testing tools), not in production.
- Install as a dev dependency:
  ```sh
  npm i package_name --save-dev
  ```

## 🗑️ 13. Uninstalling a Package
- Remove a package:
  ```sh
  npm un package_name
  ```
  Example:
  ```sh
  npm un mongoose
  ```

## 🌎 14. Working with Global Packages
- Install a package globally:
  ```sh
  npm i -g package_name
  ```

## 🚀 15. Publishing a Package
- Create and publish your own Node package.
- Use `npm publish` to upload it to the NPM registry.

## 🔄 16. Updating a Published Package
- After making changes, update your published package version and run:
  ```sh
  npm publish
  ```

