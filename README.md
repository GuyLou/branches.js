# branches.js
set and populate variables embeded in an html
a running example <a href="https://guylou.github.io/branches/">here</a>

Set your html as a template Use ajax and create super-light-onepage-webapps

POssible uses can strat with changing the page's language without reloading the page, or any other specific content

Usage:
plant variables inside the html as follows: {$variable}
mark the tags containting the variables with the "branches" class
variables are treated as global - i.e can be repeated but updated at once

Use initbranches to start enable the script
and one of two functions to plant values into the variables:

plantHTML(variablename - string,value - string);
used to update a specific variable

climbABranch(JSON);
used to udpate a set of variables with a set of values, by values pass in a JSON
