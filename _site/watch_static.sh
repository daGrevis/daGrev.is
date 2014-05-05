set -e

coffee --watch --compile static/scripts/ &
sass --watch static/styles/:static/styles/ &
read

trap 'kill $(jobs -p)' EXIT
