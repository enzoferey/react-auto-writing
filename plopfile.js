module.exports = function (plop) {
	// controller generator
	plop.setGenerator('controller', {
		description: 'React <p> componente generator',
		prompts: [{
			type: 'input',
			name: 'componentName',
			message: 'component name please'
		}],
		actions: [{
			type: 'add',
			path: 'src/{{componentName}}.js',
			templateFile: 'templates/template-p-component.hbs'
		}, {
			type: 'add',
			path: 'src/{{lowerCase componentName}}.css',
			templateFile: 'templates/template-css.hbs'
		}]
	});
};