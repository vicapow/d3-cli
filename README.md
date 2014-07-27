# D3 CLI

D3 CLI is simple shortcut command line interface to D3 to make one off data
wrangling a bit easier.

## Installation

````
npm install -g d3-cli
````

## To use

````
d3
>
````

## Usage example

````
> var data = d3.parse.csv(load('data.csv'));
> console.log('Ids', data.map(function(d){ return d.id; }));
> 1, 2, 3, 4
````

## Notes

+ D3 cli is just the Node.JS CLI with `d3` available by default and a `load()`
  helper function.
+ `load()` is just a shortcut to `require('fs').readFileSync(file).toString()`.

