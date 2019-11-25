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

if (typeof window.Regular == 'undefined'
	|| typeof Regular.version == 'undefined'
	|| Regular.version < 1.0) {
	window.Regular = {
		version: 1.0,

		addClass: function(el, clss) {
			if (!el) {
				return;
			}

			el.className += ' ' + clss;

			var classes = el.className.split(' ');

			classes = classes.filter(function(value, index, classes) {
				return classes.indexOf(value) === index;
			});

			el.className = classes.join(' ');
		},

		removeClass: function(el, remove_classes) {
			if (!el) {
				return;
			}

			var classes = el.className.split(' ');

			classes = classes.filter(function(value, index, classes) {
				return classes.indexOf(value) === index;
			});

			remove_classes = remove_classes.split(' ');

			for (var i in remove_classes) {
				var index = classes.indexOf(remove_classes[i]);

				if (index != -1) {
					classes.splice(index, 1);
				}
			}

			el.className = classes.join(' ');
		},

		hasClass: function(el, clss) {
			if (!el) {
				return false;
			}

			var classes = el.className.split(' ');

			return classes.indexOf(clss) > -1;
		},

		toggleClass: function(el, clss) {
			if (!el) {
				return;
			}

			if (this.hasClass(el, clss)) {
				this.removeClass(el, clss);
				return;
			}

			this.addClass(el, clss);
		},

		show: function(el) {
			el.style.opacity = 1;

			if (el.style.display == 'none') {
				el.style.display = 'block';
			}
		},

		hide: function(el) {
			el.style.opacity = 0;
			el.style.display = 'none';
		},

		fadeIn: function(el, duration, oncomplete) {
			el.setAttribute('data-fading', 'in');

			var self = this;

			duration = duration ? duration : 250; // total time to fade from 1 to 0 opacity

			var wait        = 50; // amount of time between steps
			var nr_of_steps = duration / wait;
			var change      = 1 / nr_of_steps; // time to wait before next step

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

		fadeOut: function(el, duration, oncomplete) {
			el.setAttribute('data-fading', 'out');

			var self = this;

			duration = duration ? duration : 250; // total time to fade from 1 to 0 opacity

			var wait        = 50; // amount of time between steps
			var nr_of_steps = duration / wait;
			var change      = 1 / nr_of_steps; // time to wait before next step

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

		onReady: function(func) {
			/in/.test(document.readyState)
				? setTimeout('Regular.onReady(' + func + ')', 9)
				: func();
		},

		loadUrl: function(url, success, fail) {
			var xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function() {
				if (this.readyState != 4) {
					return;
				}

				var data   = this.responseText;
				var result = this.responseText;

				if (this.status == 200) {
					if (success) {
						eval(success + ';');
					}
					return;
				}

				if (fail) {
					eval(fail + ';');
				}
			};

			xhttp.open("GET", url, true);
			xhttp.send();
		},
	};
}
