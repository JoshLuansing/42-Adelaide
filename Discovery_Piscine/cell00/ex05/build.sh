if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

# Loop through all arguments and create folders with "ex" prefix
for dir_name in "$@"; do
  ex_dir_name="ex${dir_name}"
  mkdir "$ex_dir_name"
  echo "Created directory: $ex_dir_name"
done

