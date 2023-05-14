---
sidebar_position: 9
---

# Contribution Guide

HydroLang was thought of as an open source software that serves the community of hydrologist and environmental scientists to be served with ready-to-go functionalities for their web applications or client-side functionality. However, we need the community of users to help grow the library to enable a more resilient and robust tool. Based on this, please consider the following:

* If you want to add a functionality not included in the base code or any subsequent releases, please raise an issue with the functionality you would like to add.
* Follow the code styles within any of the modules of the framework to get sense of how we like to format.
* Share your insights based on our community guidelines and code of conduct.

## Non Github Contributions

We are continously using HydroLang for the development of research and education tools. If you would like to contribute please let us know by sending an email, joining us on online and onsite Hackathons and other events announced on the lab's [twitter page](https://twitter.com/uihilab).

## Submitting Changes (Github)
Send a Github Pull Request with a detailed list of your contributions. We would appreciate it if you could provide any examples of how the features you are adding might be used whenever you submit a request. Any new functionality and development must adhere to our code standards. Last but not least, make sure to include one feature each commit along with concise log statements. Larger commits must resemble the following:

    $ git commit -m "Summary of the changes including large modules or functions.
    > some additional comment.
    > more information about the function"

### Coding Conventions

Please read our code at any of the included modules to have a hang of it. We try to maintain consistency with ES5 for function definition in the main modules, and ES6 for the inner scope of each function. We optimize for readability and functionality in the following:
* Each function should be written with the `params:{}, args:{}, data:[]` ontology, but not all options are required for to be used.We believe that parameter destructuring will work better when the project expands to include new features in the future. 
* We indent using two spaces.
* Please define any variables for your function using multiple variable definitions in the top part of the function (`const someVar, someVar2, someVar3; var myVar1, myVar2, myVar3;`).
* We implement [JSDocs](https://jsdoc.app/) syntax to produce straightforward and understandable documentation for each function. Please look at the definition of any variable to see the structure. Basic explanation with references if needed, function name, parameters, returns, and an example are the minimum requirements. 
