# explanation of what the entry points in package.json do

Basically, 
we are pointing out the root of our package and where the types are (by type field). 
Even if it's not the full explanation, 
we can basically think that 

when someone uses our package by using import ... from 'my-ts-lib' 
and if it runs in an environment which supports ECMAScript modules (ESM), more modern ESM version of our code will be used. 

Otherwise, if someone uses our package by using require('my-ts-lib'), it will use the CommonJS (CJS) version.


And lastly, we need to add a files field to package.json to indicate npm what we want to be in the final package. 
We just need to point dist folder here. 

README.md, LICENSE and package.json will be automatically included. 
If we come across any problem, we can put them in this array too.