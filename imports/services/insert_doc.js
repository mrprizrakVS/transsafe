export default insertDocument = (root, initTarget) => {
	let target = $(initTarget),
			inputs = target.find('.form-control'),
			parent = root || {},
			parentTopLevel = parent;

	inputs.each((index, el) => {
		let elementValue = el.value,
				elementName = el.name,
				parts = elementName.split('.');

		for(let i = 0; i < parts.length; i++) {

			if(parent[parts[i]] == null && i < parts.length - 1) {
				parent[parts[i]] = {};
			} else if(i === parts.length - 1) {
				parent[parts[i]] = elementValue;
			}

			parent = parent[parts[i]];
		}

		parent = parentTopLevel;
	});

	return parent;
};
