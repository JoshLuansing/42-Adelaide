echo "The arguments passed to this script are:"

if [ $# -eq 0 ]; then
  echo "No arguments provided."
elif [ $# -eq 1 ]; then
  echo "1. $1"
elif [ $# -eq 2 ]; then
  echo "1. $1"
  echo "2. $2"
else
  echo "1. $1"
  echo "2. $2"
  echo "3. $3"
fi
