# Regular.js

### *A light and simple JavaScript Library*

This library contains a number of simply static javascript functions.

[hasClasses](#hasclasses)

[addClasses](#addclasses)
[removeClasses](#removeclasses)
[toggleClasses](#toggleclasses)
[show](#show)
[hide](#hide)
[fadeIn](#fadein)
[fadeOut](#fadeout)
[createElementFromHTML](#createelementfromhtml)
[onReady](#onready)
[loadUrl](#loadurl)

[Aliases](#aliases)


## hasClasses

Returns a boolean based on whether the element contains one or more of the given class names

#### Syntax

```
elementHasClass = Regular.hasClasses(el, classes, true)
```

| Parameter  | Description                      | Default |
| ---------- | -------------------------------- | :-----: |
| `el`       | An element object                |         |
| `classes`  | A string or array of class names |         |
| `matchAll` | Optional boolean whether the element should have all given classes (true) or at least one (false) | `true` |

#### Examples

```
<div id="mydiv" class="foo bar">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.hasClasses(div, 'foo');
< true

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

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `el`       | An element object                |
| `classes`  | A string or array of class names |

#### Examples

```
<div id="mydiv" class="foo">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.addClasses(div, 'bar');
> div.className;
< "foo bar"

> Regular.addClasses(div, 'foo');
> div.className;
< "foo"

> Regular.addClasses(div, 'bar baz');
> div.className;
< "foo bar baz"

> Regular.addClasses(div, ['bar', 'baz']);
> div.className;
< "foo bar baz"
```


## removeClasses

Removes given class name(s) from the element

#### Syntax

```
Regular.removeClasses(el, classes)
```

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `el`       | An element object                |
| `classes`  | A string or array of class names |

#### Examples

```
<div id="mydiv" class="foo bar baz">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.removeClasses(div, 'bar');
> div.className;
< "foo baz"

> Regular.removeClasses(div, 'bar baz');
> div.className;
< "foo"

> Regular.removeClasses(div, ['bar', 'baz']);
> div.className;
< "foo"

> Regular.removeClasses(div, 'qux');
> div.className;
< "foo bar baz"
```


## toggleClasses

Toggles given class name(s) of the element

#### Syntax

```
Regular.toggleClasses(el, classes)
```

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `el`       | An element object                |
| `classes`  | A string or array of class names |

#### Examples

```
<div id="mydiv" class="foo bar baz">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.toggleClasses(div, 'bar');
> div.className;
< "foo baz"

> Regular.toggleClasses(div, 'bar baz');
> div.className;
< "foo"

> Regular.toggleClasses(div, ['bar', 'qux']);
> div.className;
< "foo baz qux"

> Regular.toggleClasses(div, 'qux');
> div.className;
< "foo bar baz qux"
```


## show

Shows the given element (changes opacity and display attributes)

#### Syntax

```
Regular.show(el)
```

| Parameter  | Description               |
| ---------- | ------------------------- |
| `el`       | An element object         |

#### Examples

```
<div id="mydiv" style="display:none;">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.show(div);
```


## hide

Hides the given element (changes opacity and display attributes)

#### Syntax

```
Regular.hide(el)
```

| Parameter  | Description               |
| ---------- | ------------------------- |
| `el`       | An element object         |

#### Examples

```
<div id="mydiv">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.hide(div);
```


## fadeIn

Fades in the the given element

#### Syntax

```
Regular.fadeIn(el, duration, oncomplete)
```

| Parameter    | Description                                                     | Default |
| ------------ | --------------------------------------------------------------- | :-----: |
| `el`         | An element object                                               |         |
| `duration`   | Optional duration of the effect in miliseconds                  | `250`   |
| `oncomplete` | Optional callback function to execute when effect is completed  | `""`    |

#### Examples

```
<div id="mydiv" style="display:none;">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.fadeIn(div);

> Regular.fadeIn(div, 1000, `console.log('Faded in')`);
```


## fadeOut

Fades out the the given element

#### Syntax

```
Regular.fadeOut(el, duration, oncomplete)
```

| Parameter    | Description                                                     | Default |
| ------------ | --------------------------------------------------------------- | :-----: |
| `el`         | An element object                                               |         |
| `duration`   | Optional duration of the effect in miliseconds                  | `250`   |
| `oncomplete` | Optional callback function to execute when effect is completed  | `""`    |

#### Examples

```
<div id="mydiv">...</div>
```
```
> const div = document.querySelector('#mydiv');

> Regular.fadeOut(div);

> Regular.fadeOut(div, 1000, `console.log('Faded out')`);
```


## createElementFromHTML

Converts a string with HTML code to 'DOM' elements

#### Syntax

```
Regular.createElementFromHTML(html)
```

| Parameter    | Description           |
| ------------ | --------------------- |
| `html`       | String with HTML code |

#### Example

```
> const mydiv = Regular.createElementFromHTML(`<div id="mydiv" class="foo">My <strong>cool</strong> element!</div>`);
```


## onReady

Runs a function when the document is loaded (on ready state)

#### Syntax

```
Regular.onReady(func)
```

| Parameter    | Description                                         |
| ------------ | --------------------------------------------------- |
| `func`       | Callback function to execute when document is ready |

#### Example

```
> Regular.onReady(`console.log('Document is ready!')`);
```


## loadUrl

Converts a string with HTML code to 'DOM' elements

#### Syntax

```
Regular.loadUrl(url, data, success, fail)
```

| Parameter | Description                                                                         | Default |
| --------- | ----------------------------------------------------------------------------------- | :-----: |
| `url`     | String containing the url to load                                                   |         |
| `data`    | Optional string representing the POST data to send along                            | `""`    |
| `success` | Optional callback function to execute when the url loads successfully (status 200)  | `""`    |
| `fail`    | Optional callback function to execute when the url fails to load                    | `""`    |

#### Example

```
> Regular.loadUrl('my/url.php');

> Regular.loadUrl('my/url.php', 'id=123&format=ajax', `console.log('Yeah!')`, `console.log('Oh no!')`);
```


## Aliases

There are some aliases for some of the functions:

| Function    | Alias for     |
| ----------- | ------------- |
| hasClass    | hasClasses    |
| addClass    | addClasses    |
| removeClass | removeClasses |
| toggleClass | toggleClasses |
