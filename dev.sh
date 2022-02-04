# tailwind
npx postcss src/assets/scss/main.scss -o main.css --watch &
TAILWINDW=$!
# hugo start
hugo server -s src &
HUGOSERVE=$!
# image
mkdir src/static/img && node app/image.js
# babel
node app/babel.mjs &
# watch
node app/watch.mjs &
MYWATCHFILE=$!
