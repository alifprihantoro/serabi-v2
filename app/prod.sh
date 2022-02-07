# babel
node app/babel.mjs &
# image
node app/image.js &
# hugo
rm src/public
hugo --minify -s src
rm resources &
# style
npx src/assets/scss/main.css -o public/main.css &
