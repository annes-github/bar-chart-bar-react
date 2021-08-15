# bar-chart-bars-react   ![bar-chart-32](https://user-images.githubusercontent.com/80990739/129469078-fdaf4873-e5c4-4daf-880c-90cbe7d35902.png)


[![npm package][npm-badge]][npm]


[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

![7801538E-5BA8-4429-B4E8-D083E52EADE7](https://user-images.githubusercontent.com/80990739/129467799-2a862bd2-97bd-46ca-996e-19713fd906bb.jpeg)

[See chart bars demo here!](https://github.com/annes-github/bar-chart-bar-react/index.html)


## Installation

 
```bash

 npm install --save bar-chart-bar-react   # using NPM
 yarn add bar-chart-bar-react            # using yarn
```


## Example use

```javascript

import React, {Component} from 'react';
import {Bar} from 'bar-chart-bar-react';

 {
        Object.keys(data).filter((key, index) => {return index <= 5}).map(key =>
         {
          return(
            <Bar 
              barKey={key}
              data={data}
            />
           )
         })
        }
 ```       
 
## Contributions

Pull requests are welcome!
