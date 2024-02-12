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
gcd:
	@node bin/brain-gcd.js
prog:
	@node bin/brain-progression.js
prime:
	@node bin/brain-prime.js		
lint:
	npx eslint 
p:
	@node bin/pr.js	
calc2:
	@node bin/brain-calc2.js