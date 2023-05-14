---
sidebar_position: 8
---

# Other Projects

In the latest versions, HydroLang's architecture has been updated to follow ES6 parameter destructuring, making it easy to separate concerns and create new applications that can be powered by the library. These applications include HydroLang-ML and HydroLang-BMI.

## HydroLang-ML

The project was inspired and is based on a technology called [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), which is a system of technologies that allow the creation of reusable components that are portable throughout applications.

Following this ideology, HydroLang-ML has been developed as a tool for research and education that abstracts the requirement for a thorough understanding of web technologies and allows users to interact with the HydroLang library through HTML elements. [More info](https://doi.org/10.31223/X5NP9M).

```html
<hydrolang-ml>
  <data-mod method="retrieve">
    <parameters
      source="noaa"
      datatype="prec-hourly"
      output="iowacity_rainfall_hourly"
    >
    </parameters>
    <arguments
      stationid="COOP:134101"
      startdate="2008-04-02"
      enddate="2008-07-30"
      limit="1000"
    >
    </arguments>
  </data-mod>
</hydrolang-ml>
```

## HydroLang-BMI

Following the development and usage of the [Basic Model Interface](https://csdms.colorado.edu/wiki/BMI) (BMI) standard in the fields of hydrology and environmental sciences and the emergence of new web based client side technologies, UHILab has developed the [JavaScript-BMI standard](https://github.com/uihilab/BMI-JS). In HydroLang, the BMI was added as an additional interface that is follows the parameter destructuring structure previously described. To create a BMI model, the user implements helper methods through an instance of the BMI layer.

```js
class hydroBMIInstance extends HydroLangBMI {
  //helper methods implemented here
}
```

The configuration file that runs the simulations has the following structure:

```js
//config.js
{
  modelName: "some_model_name",
  modelCode: "some_model_code",
  moduleName: "HydroLang_module",
  functionname: "module_function",
  args:{
  //arguments required by the function(s)
  }
  params:{
  //parameters required by the function(s)
}
}
```
