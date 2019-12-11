/**
 * @package         RegularJS
 * @description     A light and simple JavaScript Library
 *
 * @author          Peter van Westen <info@regularlabs.com>
 * @link            https://github.com/regularlabs/regularjs
 * @copyright       Copyright © 2019 Regular Labs - All Rights Reserved
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */

/*jslint node: true */
"use strict";

if (typeof window.Regular === 'undefined'
	|| typeof Regular.version === 'undefined'
	|| Regular.version < 1.1) {

	window.Regular = {
		version: 1.1,

		/**
		 * Returns a boolean based on whether the element contains one or more of the given class names
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		hasClasses: function(el, classes) {
			if (!el) {
				return false;
			}

			if (typeof classes === 'string') {
				classes = classes.split(' ');
			}

			for (let i in classes) {
				if (el.classList.contains(classes[i])) {
					return true;
				}
			}

			return false;
		},

		/**
		 * Adds given class name(s) to the element
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		addClasses: function(el, classes) {
			this.doClasses('add', el, classes);
		},

		/**
		 * Removes given class name(s) to the element
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		removeClasses: function(el, classes) {
			this.doClasses('remove', el, classes);
		},

		/**
		 * Toggles given class name(s) to the element
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		toggleClasses: function(el, classes) {
			this.doClasses('toggle', el, classes);
		},

		/**
		 * Executes an action on the element to add/remove/toggle classes
		 * @param action  A string that identifies the action: add|remove|toggle
		 * @param el      An element object
		 * @param action  A string or array of class names
		 */
		doClasses: function(action, el, classes) {
			if (!el) {
				return;
			}

			if (typeof classes === 'string') {
				classes = classes.split(' ');
			}

			for (let i in classes) {
				el.classList[action](classes[i]);
			}
		},

		/**
		 * Shows the given element (switches to display: block)
		 * @param el  An element object
		 */
		show: function(el) {
			el.style.opacity = 1;

			if (el.style.display == 'none') {
				el.style.display = 'block';
			}
		},

		/**
		 * Hides the given element (switches to display: none)
		 * @param el  An element object
		 */
		hide: function(el) {
			el.style.opacity = 0;
			el.style.display = 'none';
		},

		/**
		 * Fades in the the given element
		 * @param el An       element object
		 * @param duration    The duration of the effect in milliseconds
		 * @param oncomplete  Callback function to execute when effect is completed
		 */
		fadeIn: function(el, duration = 250, oncomplete = '') {
			el.setAttribute('data-fading', 'in');

			const self = this;

			const wait        = 50; // amount of time between steps
			const nr_of_steps = duration / wait;
			const change      = 1 / nr_of_steps; // time to wait before next step

			if (!el.style.opacity || el.style.opacity == 1) {
				el.style.opacity = 0;
			}
			if (el.style.display == 'none') {
				el.style.display = 'block';
			}

			(function fade() {
				if (el.getAttribute('data-fading') == 'out') {
					return;
				}
				el.style.opacity = parseFloat(el.style.opacity) + change;
				if (el.style.opacity >= 1) {
					self.show(el);
					el.setAttribute('data-fading', '');
					if (oncomplete) {
						oncomplete.call();
					}
					return;
				}
				setTimeout(function() {
					fade.call();
				}, wait);
			})();
		},

		/**
		 * Fades out the the given element
		 * @param el          An element object
		 * @param duration    The duration of the effect in miliseconds
		 * @param oncomplete  Callback function to execute when effect is completed
		 */
		fadeOut: function(el, duration = 250, oncomplete = '') {
			el.setAttribute('data-fading', 'out');

			const self = this;

			const wait        = 50; // amount of time between steps
			const nr_of_steps = duration / wait;
			const change      = 1 / nr_of_steps; // time to wait before next step

			if (!el.style.opacity || el.style.opacity == 0) {
				el.style.opacity = 1;
			}

			(function fade() {
				if (el.getAttribute('data-fading') == 'in') {
					return;
				}
				el.style.opacity = parseFloat(el.style.opacity) - change;
				if (el.style.opacity <= 0) {
					self.hide(el);
					el.setAttribute('data-fading', '');
					if (oncomplete) {
						oncomplete.call();
					}
					return;
				}
				setTimeout(function() {
					fade.call();
				}, wait);
			})();
		},

		/**
		 * Runs a function when the document is loaded (on ready state)
		 * @param func  Callback function to execute when document is ready
		 */
		onReady: function(func) {
			/in/.test(document.readyState)
				? setTimeout(`Regular.onReady(${func})`, 9)
				: func();
		},

		/**
		 * Converts a string with HTML code to 'DOM' elements
		 * @param html  String with HTML code
		 */
		createElementFromHTML: function(html) {
			return document.createRange().createContextualFragment(html);
		},

		/**
		 * Loads a url with POST data and optionally calls a function hen ready
		 * @param url      String containing the url to load
		 * @param data     Optional string representing the POST data to send along
		 * @param success  Optional callback function to execute when the url loads successfully (status 200)
		 * @param fail     Optional callback function to execute when the url fails to load
		 */
		loadUrl: function(url, data = '', success = '', fail = '') {
			const xhttp = new XMLHttpRequest();

			xhttp.open("POST", url, true);

			xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			xhttp.onreadystatechange = function() {
				if (this.readyState != 4) {
					return;
				}

				let data   = this.responseText;
				let result = this.responseText;

				if (this.status == 200) {
					if (success) {
						eval(`${success};`);
					}
					return;
				}

				if (fail) {
					eval(`${fail};`);
				}
			};

			xhttp.send(data);
		},

		/**
		 * Alias of Regular.hasClass
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		hasClass: function(el, classes) {
			return this.hasClasses(el, classes);
		},

		/**
		 * Alias of Regular.addClasses
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		addClass: function(el, classes) {
			this.addClasses(el, classes);
		},

		/**
		 * Alias of Regular.removeClasses
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		removeClass: function(el, classes) {
			this.removeClasses(el, classes);
		},

		/**
		 * Alias of Regular.toggleClasses
		 * @param el       An element object
		 * @param classes  A string or array of class names
		 */
		toggleClass: function(el, classes) {
			this.toggleClasses(el, classes);
		},
	};
}
