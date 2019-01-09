
# see this for example build..  C:\n\Dropbox\csd\computer\2018\bash353\catmany\cat many files together sorted by filename numerically,know.txt

# assemble files. cat many files together sorted by filename numerically..

# the folder containing the html/css/js code.

d=code
#
cd $d
find ./*   | sort -V | xargs cat  > ../index.html
find ./*   | sort -V  > ../codelist.txt
cd ..




