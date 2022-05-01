clean:
	rm -rf dist || exit 0

bundle: clean
	npx spack
	cp ./manifest.json dist/

build: bundle
	npx web-ext build --source-dir dist
