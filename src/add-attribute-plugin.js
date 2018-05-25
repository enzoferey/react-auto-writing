module.exports = function({ types: t }) {
  var counter = 0;
  return {
    visitor: {
      JSXElement: function JSXElement(path, state) {
        /**
        * path: the path of the visited node
        * state.opts: options that are passed to the plugin
        *
        */
        var label = state.opts.label;

        var attributes = path.node.openingElement.attributes;

        console.log(path.node.openingElement);

        attributes.push(t.jSXAttribute(t.jSXIdentifier(label), t.stringLiteral(path.node.openingElement.name.name + "-" + counter)));

        counter++;
      }
    }
  }
}