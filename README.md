# Regular.js

A light and simple JavaScript Library

## hasClasses

Returns a boolean based on whether the element contains one or more of the given class names


#### Syntax

```
elementHasClass = Regular.hasClasses(el, classes, true)
```

#### Parametes

`el`

An element object

`classes`

A string or array of class names

`matchAll` [default = true]

A boolean whether the element should have all given classes or at least one.

#### Example

```
<div id="mydiv" class="foo bar"></div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.hasClasses(div, 'foo');
< true;

> Regular.hasClasses(div, 'baz');
< false

> Regular.hasClasses(div, 'bar baz');
< false

> Regular.hasClasses(div, ['bar', 'baz']);
< false

> Regular.hasClasses(div, ['bar', 'baz'], false);
< true
```



## addClasses

Adds given class name(s) to the element

#### Syntax

```
Regular.addClasses(el, classes)
```

#### Parametes

`el`

An element object

`classes`

A string or array of class names

#### Example

```
<div id="mydiv" class="foo"></div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.addClasses(div, 'bar');
> div.className
< "foo bar"

> Regular.addClasses(div, 'bar baz');
> div.className
< "foo bar baz"

> Regular.addClasses(div, ['bar', 'baz']);
> div.className
< "foo bar baz"

> Regular.addClasses(div, 'foo');
> div.className
< "foo"
```
