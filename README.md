<a href="https://badge-generator.glitch.me/">
<h1 align=center>Badge Generator
<img src="https://version-badge.glitch.me/alestor123/BADGE-GENERATOR/text">
</h1>
</a>
</a>
<p align=center>
<img src="https://img.shields.io/github/license/alestor123/BADGE-GENERATOR" alt=views >
<a href="https://github.com/alestor123/BADGE-GENERATOR/issues">
<img src="https://img.shields.io/github/issues-raw/alestor123/BADGE-GENERATOR"></a>
<a href="https://www.npmjs.com/package/version-badge"><img src="https://version-badge.glitch.me/alestor123/BADGE-GENERATOR/green"></a>
</p>

#
> This is a simple badge generator


# 

<p align=center>
<a href="https://npmjs.org/package/git-badge-generator">
<img src="https://nodei.co/npm/git-badge-generator.png"></a>
</p>

# Documentation

# Quick use

``npx git-badge-generator``

# Installation

``npm i git-badge-generator -g ``

# Usage

``git-badge-generator <port number> ``


`https://version-badge.glitch.me/badge?<params>`

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


# Example
``git-badge-generator 3000``

# Env

## Creating Env
``touch .env``

# Env Example

## Usage
```
PORT=<Port>
```
## Example


```
PORT=3000
```