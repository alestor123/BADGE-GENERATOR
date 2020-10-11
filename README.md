# Badge Generator 
> This is a simple badge generator
## Usage
`http://localhost/badge?<params>`

### Params
name | value | required
--- | --- | ---
message | text | yes
label | text
labelColor | valid css color
color | valid css color
style | `plastic`, `flat`, `flat-square`, `for-the-badge`, `social`

### Examples
params | badge
--- | ---
`message=test` | ![](http://localhost:3000//badge?message=test)
`message=test&color=cc0` | ![](http://localhost:3000//badge?message=test&color=cc0)
`message=test&color=red` | ![](http://localhost:3000//badge?message=test&color=red)
`message=test&label=cool` | ![](http://localhost:3000//badge?message=test&label=cool)
`message=test&label=cool&labelColor=c0c` | ![](http://localhost:3000//badge?message=test&label=cool&labelColor=c0c)
`message=test&label=lol&style=flat` | ![](http://localhost:3000//badge?message=test&label=lol&style=social)
`labelColor=c00&color=0c0&label=test%20wiadomości%20push&message=eśąźć` | ![](http://localhost:3000//badge?labelColor=c00&color=0c0&label=test%20wiadomości%20push&message=eśąźć)