rm public
hugo
rm resources &
# babel
node app/bin/babel-prod &
# style
npx assets/scss/main.css -o public/main.css
