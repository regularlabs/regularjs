# Regular.js

### *A light and simple JavaScript Library*

This library contains a number of simply static javascript functions.

[hasClasses](#hasclasses)<br>
[addClasses](#addclasses)<br>
[removeClasses](#removeclasses)<br>
[toggleClasses](#toggleclasses)<br>
[show](#show)<br>
[hide](#hide)<br>
[fadeIn](#fadein)<br>
[fadeOut](#fadeout)<br>
[createElementFromHTML](#createelementfromhtml)<br>
[onReady](#onready)<br>
[loadUrl](#loadurl)<br>
<br>
[Aliases](#aliases)


<br><br>
## hasClasses

Returns a boolean based on whether the element contains one or more of the given class names

#### Syntax

```javascript
elementHasClass = Regular.hasClasses(el, classes, true)
```

| Parameter  | Description                      | Default |
| ---------- | -------------------------------- | :-----: |
| `el`       | An element object                |         |
| `classes`  | A string or array of class names |         |
| `matchAll` | Optional boolean whether the element should have all given classes (true) or at least one (false) | `true` |

#### Examples

```html
<div id="mydiv" class="foo bar">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.hasClasses(div, 'foo');
// => true

Regular.hasClasses(div, 'baz');
// => false

Regular.hasClasses(div, 'bar baz');
// => false

Regular.hasClasses(div, ['bar', 'baz']);
// => false

Regular.hasClasses(div, ['bar', 'baz'], false);
// => true
```


<br><br>
## addClasses

Adds given class name(s) to the element

#### Syntax

```javascript
Regular.addClasses(el, classes)
```

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `el`       | An element object                |
| `classes`  | A string or array of class names |

#### Examples

```html
<div id="mydiv" class="foo">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.addClasses(div, 'bar');
// => class="foo bar"

Regular.addClasses(div, 'foo');
// => class="foo"

Regular.addClasses(div, 'bar baz');
// => class="foo bar baz"

Regular.addClasses(div, ['bar', 'baz']);
// => class="foo bar baz"
```


<br><br>
## removeClasses

Removes given class name(s) from the element

#### Syntax

```javascript
Regular.removeClasses(el, classes)
```

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `el`       | An element object                |
| `classes`  | A string or array of class names |

#### Examples

```html
<div id="mydiv" class="foo bar baz">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.removeClasses(div, 'bar');
// => class="foo baz"

Regular.removeClasses(div, 'bar baz');
// => class="foo"

Regular.removeClasses(div, ['bar', 'baz']);
// => class="foo"

Regular.removeClasses(div, 'qux');
// => class="foo bar baz"
```


<br><br>
## toggleClasses

Toggles given class name(s) of the element

#### Syntax

```javascript
Regular.toggleClasses(el, classes)
```

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `el`       | An element object                |
| `classes`  | A string or array of class names |

#### Examples

```html
<div id="mydiv" class="foo bar baz">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.toggleClasses(div, 'bar');
// => class="foo baz"

Regular.toggleClasses(div, 'bar baz');
// => class="foo"

Regular.toggleClasses(div, ['bar', 'qux']);
// => class="foo baz qux"

Regular.toggleClasses(div, 'qux');
// => class="foo bar baz qux"
```


<br><br>
## show

Shows the given element (changes opacity and display attributes)

#### Syntax

```javascript
Regular.show(el)
```

| Parameter  | Description               |
| ---------- | ------------------------- |
| `el`       | An element object         |

#### Examples

```html
<div id="mydiv" style="display:none;">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.show(div);
```


<br><br>
## hide

Hides the given element (changes opacity and display attributes)

#### Syntax

```javascript
Regular.hide(el)
```

| Parameter  | Description               |
| ---------- | ------------------------- |
| `el`       | An element object         |

#### Examples

```html
<div id="mydiv">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.hide(div);
```


<br><br>
## fadeIn

Fades in the the given element

#### Syntax

```javascript
Regular.fadeIn(el, duration, oncomplete)
```

| Parameter    | Description                                                     | Default |
| ------------ | --------------------------------------------------------------- | :-----: |
| `el`         | An element object                                               |         |
| `duration`   | Optional duration of the effect in milliseconds                 | `250`   |
| `oncomplete` | Optional callback function to execute when effect is completed  |         |

#### Examples

```html
<div id="mydiv" style="display:none;">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.fadeIn(div);

Regular.fadeIn(div, 1000, () => console.log('Faded in'));
```


<br><br>
## fadeOut

Fades out the the given element

#### Syntax

```javascript
Regular.fadeOut(el, duration, oncomplete)
```

| Parameter    | Description                                                     | Default |
| ------------ | --------------------------------------------------------------- | :-----: |
| `el`         | An element object                                               |         |
| `duration`   | Optional duration of the effect in milliseconds                 | `250`   |
| `oncomplete` | Optional callback function to execute when effect is completed  |         |

#### Examples

```html
<div id="mydiv">...</div>
```
```javascript
const div = document.querySelector('#mydiv');

Regular.fadeOut(div);

Regular.fadeOut(div, 1000, () => console.log('Faded out'));
```


<br><br>
## createElementFromHTML

Converts a string with HTML code to 'DOM' elements

#### Syntax

```javascript
Regular.createElementFromHTML(html)
```

| Parameter    | Description           |
| ------------ | --------------------- |
| `html`       | String with HTML code |

#### Example

```javascript
const mydiv = Regular.createElementFromHTML(`<div id="mydiv" class="foo">My <strong>cool</strong> element!</div>`);
```


<br><br>
## onReady

Runs a function when the document is loaded (on ready state)

#### Syntax

```javascript
Regular.onReady(func)
```

| Parameter    | Description                                         |
| ------------ | --------------------------------------------------- |
| `func`       | Callback function to execute when document is ready |

#### Example

```
Regular.onReady(`console.log('Document is ready!')`);
```


<br><br>
## loadUrl

Converts a string with HTML code to 'DOM' elements

#### Syntax

```javascript
Regular.loadUrl(url, data, success, fail)
```

| Parameter | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `url`     | String containing the url to load                                                   |
| `data`    | Optional string representing the POST data to send along                            |
| `success` | Optional callback function to execute when the url loads successfully (status 200)  |
| `fail`    | Optional callback function to execute when the url fails to load                    |

The result (responseText), status and the full XMLHttpRequest object will be passed to the callback functions. 

#### Example

```javascript
Regular.loadUrl('my/url.php');

Regular.loadUrl(
	'my/url.php', 
	'id=123&format=ajax', 
	(result) => {
		console.log('Yeah!'); 
		console.log(result); 
	}, 
	(result, status) => console.log(`Oh no! Failed with status: ${status}`)
);
```


<br><br>
## Aliases

There are some aliases for some of the functions:

| Function    | Alias for     |
| ----------- | ------------- |
| hasClass    | hasClasses    |
| addClass    | addClasses    |
| removeClass | removeClasses |
| toggleClass | toggleClasses |
