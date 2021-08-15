# bar-chart-bars-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

![7801538E-5BA8-4429-B4E8-D083E52EADE7](https://user-images.githubusercontent.com/80990739/129467799-2a862bd2-97bd-46ca-996e-19713fd906bb.jpeg)

[Demo bars here!](https://github.com/annes-github/bar-chart-bar-react/index.html)


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
        
 
