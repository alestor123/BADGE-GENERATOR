#!/usr/bin/env node
require('dotenv').config()
var express = require('express'),
    app = express(),
    { validate, ValidationError: RequestValidationError, Joi } = require('express-validation'),
    { makeBadge } = require('badge-maker'),
  argv = process.argv[2],
pck = require('./package.json'),  
port = process.env.PORT || argv || 3000;
if(argv== '-v' ||argv == '--version'){
    console.log( `${pck.version}`)
  process.exit(1);
}
else if (argv =='-h'|| argv == '--help') { // checking undifined args
    console.log(`
    Usage: badge-generator <Port> 
`);
}
else if (argv =='-i'|| argv == '--issue') { // checking undifined args
  console.log(`
  Issues at ${pck.bugs.url} 
`);
}

else if (argv =='-a'|| argv == '--author') { // checking undifined args
  console.log(`
  Author: ${pck.author} 
`);
}

else if (argv =='-d'|| argv == '--docs') { // checking undifined args
  console.log(`
  Docs at ${pck.homepage} 
`);}

else{
    app.listen(port, () => console.log(`server running at ${port}`))
}
app.use(function(err, req, res, next) {
    console.error(err)
    if (err instanceof RequestValidationError) {
      return res.status(err.statusCode).json(err)
    }
   
    return res.status(500).json(err)
  })
const colorRegex = /((?:[0-9a-fA-F]{2}){2,4}$|([0-9a-fA-F]{3}$)|(rgb|hsl)a?\\((-?\\d+%?[,\\s]+){2,3}\\s*[\\d\\.]+%?\\)$|black$|silver$|gray$|whitesmoke$|maroon$|red$|purple$|fuchsia$|green$|lime$|olivedrab$|yellow$|navy$|blue$|teal$|aquamarine$|orange$|aliceblue$|antiquewhite$|aqua$|azure$|beige$|bisque$|blanchedalmond$|blueviolet$|brown$|burlywood$|cadetblue$|chartreuse$|chocolate$|coral$|cornflowerblue$|cornsilk$|crimson$|darkblue$|darkcyan$|darkgoldenrod$|darkgray$|darkgreen$|darkgrey$|darkkhaki$|darkmagenta$|darkolivegreen$|darkorange$|darkorchid$|darkred$|darksalmon$|darkseagreen$|darkslateblue$|darkslategray$|darkslategrey$|darkturquoise$|darkviolet$|deeppink$|deepskyblue$|dimgray$|dimgrey$|dodgerblue$|firebrick$|floralwhite$|forestgreen$|gainsboro$|ghostwhite$|goldenrod$|gold$|greenyellow$|grey$|honeydew$|hotpink$|indianred$|indigo$|ivory$|khaki$|lavenderblush$|lavender$|lawngreen$|lemonchiffon$|lightblue$|lightcoral$|lightcyan$|lightgoldenrodyellow$|lightgray$|lightgreen$|lightgrey$|lightpink$|lightsalmon$|lightseagreen$|lightskyblue$|lightslategray$|lightslategrey$|lightsteelblue$|lightyellow$|limegreen$|linen$|mediumaquamarine$|mediumblue$|mediumorchid$|mediumpurple$|mediumseagreen$|mediumslateblue$|mediumspringgreen$|mediumturquoise$|mediumvioletred$|midnightblue$|mintcream$|mistyrose$|moccasin$|navajowhite$|oldlace$|olive$|orangered$|orchid$|palegoldenrod$|palegreen$|paleturquoise$|palevioletred$|papayawhip$|peachpuff$|peru$|pink$|plum$|powderblue$|rosybrown$|royalblue$|saddlebrown$|salmon$|sandybrown$|seagreen$|seashell$|sienna$|skyblue$|slateblue$|slategray$|slategrey$|snow$|springgreen$|steelblue$|tan$|thistle$|tomato$|transparent$|turquoise$|violet$|wheat$|white$|yellowgreen$|rebeccapurple$)/i
const querySchema = {
    query: Joi.object({
      label: Joi.string(),
      message: Joi.string().required(),
      labelColor: Joi.string().regex(colorRegex),
      color: Joi.string().regex(colorRegex),
      style: Joi.string().valid('plastic', 'flat', 'flat-square', 'for-the-badge', 'social')
    }).unknown(true)
  }
  const stripProperties = (original, allowedProperties) =>
  Object.entries(original).reduce((obj, [property, value]) => {
    if (allowedProperties.includes(property)) {
      obj[property] = value
    }
    return obj
  }, {})
app.get('/github', (req, res) => {
    res.redirect('https://github.com/alestor123/BADGE-GENERATOR')
})

app.get('/', (req, res) => {
    res.json({info:"Badge Generator"})
})
app.get('/badge', validate(querySchema, {}, {}), (req, res) => {
    const badgeData = stripProperties(req.query, [...querySchema.query._ids._byKey.keys()])
    const svg = makeBadge(badgeData)
    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(svg)
  })
