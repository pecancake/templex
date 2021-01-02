# templex
Very lightweight string templating library

## usage
<pre>
const templex = require("pecas-templex");
var str = "This is a [obj] that needs replacing"`;
templex.compile(str, {"obj": "piece of data"});
// result -> "This is a piece of data that needs replacing"
</pre>
