install: 
	npm ci
run: 
	bin/brain-even.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .