
# see this for example build..  C:\n\Dropbox\csd\computer\2018\bash353\catmany\cat many files together sorted by filename numerically,know.txt

# assemble files. cat many files together sorted by filename numerically..

# the folder containing the js code.
d=js
#
cd $d
find ./*   | sort -V | xargs cat  > ../shoppinglist.js
cd ..




