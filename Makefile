install: 
	npm ci
run-even: 
	bin/brain-even.js
run-prime:
	bin/brain-prime.js
run-progression:
	bin/brain-progression.js
run-calc:
	bin/brain-calc.js
run-gcd:
	bin/brain-gcd.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .