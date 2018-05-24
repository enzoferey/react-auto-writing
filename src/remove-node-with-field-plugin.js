"use strict";

module.exports = function() {
	return {
		visitor: {
			JSXElement: function JSXElement(path, state) {
				/**
				* path: the path of the visited node
				* state.opts: options that are passed to the plugin
				*
				*/

				var regexp = new RegExp(state.opts.regexp);

				var attributes = path.node.openingElement.attributes;
	      for (var i = 0; i < attributes.length; i++) {
	        if(regexp.test(attributes[i].name.name)) path.remove();
	      }
			}
		}
	}
}