Meteor-session-bind
===================

Two way data bindings between Meteor session variables and handlebars template html forms. 

#### Install

```
mrt add handlebar-bind
```
*Requires ```Meteorite```. Get it at [atmosphere.meteor.com](https://atmosphere.meteor.com)*

## Basic Usage
In your javascript just add the following to the target template:
```js
sessionBind(Template.hello);
```

And then in your handlebars template to bind a form element to the session variable ```seshVar```:
```handlebars
<input type="text" {{bindSession "seshVar"}}>
```

The helper generates an id and keeps the value up to date, so you should not set either on your element. To set a default value on the input just do the following before template rendering:
```js
Session.set("seshVar", "default text")
```

## Advanced Usage

If you want to keep your session namespace clean then you can bind to a session object instead of a variable:
```handlebars
<input type="text" {{bindSession "seshVar" "seshObj"}}>
```
Then to get back the var:
```js
var obj = Session.get("seshObj");
obj.seshVar; //is your variable
```
This is especially useful when you have multiple forms, as you can come up with an object per form.

##Problems

This is early software. Feel free to file an [issue](https://github.com/nikhilbobb/Meteor-session-bind/issues). I will deal with it as soon as I have time.

##Credits

Inspired by [Meteor-handlebar-bind](https://github.com/raix/Meteor-handlebar-bind)
