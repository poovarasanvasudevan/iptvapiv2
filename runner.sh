now=$(date)
node run.js &&
echo "Run Finish" &&
git add . &&
git commit -m "Changes in $now" &&
git push -u origin main &&
echo "Done..."