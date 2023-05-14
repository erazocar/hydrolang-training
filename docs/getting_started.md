---
sidebar_position: 3
---

# Getting Started

To use HydroLang, you need to load the library in your HTML file first. You can do this by adding the following code to your HTML file:

```html
<script type="module" src="path/to/hydrolang.js"></script>
```

Make sure to replace `"path/to/hydrolang.js"` with the actual path to the Hydrolang library file.

Once the library is loaded, you can create a new instance of the library and start using its modules and functions. To create a new instance, use the following code:

```js
const hydrolang = new Hydrolang();
```
This will create a new instance of the library, and each of the modules and functions within will be available for usage. From there onwards, it works just like any other JavaScript library through its API.

To use any of the functions within the HydroLang library, you would use the following command:

```js
hydro[module][function]({params:{}, args:{}, data: []})
```

Here, module refers to the module you want to use, function refers to the function within that module that you want to call, params refers to any general configurations required for the function, args refers to specific configurations for the function, and data refers to the data associated with the function run. Most of the functions deal with 1D arrays, but ND arrays can also be used.

We will be using `Codesandbox` for the tutorial. However, you are welcome to use your own preferred editor. You can use HydroLang either as the repo library or as a CDN from [this link](https://cdn.jsdelivr.net/npm/hydrolang@1.1.7/hydrolang.js).
