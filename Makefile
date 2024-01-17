install:
	npm ci
publish:
	npm publish --dry-run
games:
	@node bin/brain-games.js
even:
	@node bin/brain-even.js
calc:
	@node bin/brain-calc.js
	@node src/index.js
gcd:
	@node bin/brain-gcd.js			
		