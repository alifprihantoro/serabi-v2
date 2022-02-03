# copy config tailwind
cp ./tailwind.config.js assets/dev/js/tailwind.config.js &
# reset static
rm static/*
# hugo start
hugo server &
HUGOSERVE=$!
# babel
node bin/app/babel &
# watch
node bin/app/watch &
MYWATCHFILE=$!
