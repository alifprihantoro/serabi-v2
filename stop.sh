kill $HUGOSERVE &
kill $MYWATCHFILE &
kill $MYWATCHDEV &
kill -s SIGKILL $TAILWINDW 
# rm resources &
# rm static/* &
# # copy config tailwind
# cp assets/dev/js/tailwind.config.js ./tailwind.config.js &
#
