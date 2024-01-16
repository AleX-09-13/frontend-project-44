install:
	npm ci
publish:
	npm publish --dry-run
bg:
	@node bin/brain-games.js
be:
	@node bin/brain-even.js
bc:
	@node bin/brain-calc.js
	@node src/index.js		
		