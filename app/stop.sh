kill $HUGOSERVE 
kill $MYWATCHFILE &
kill $MYWATCHDEV &
rm resources &
rm static/* &
# copy config tailwind
cp assets/dev/js/tailwind.config.js ./tailwind.config.js &

