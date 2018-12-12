
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#  current folder
#     Can be.. 2018-11-26.. Just share the whole srv folder, and var/www  with www-data group...
fold=/root
sudo groupadd www-data ; sudo usermod -a -G www-data  $userv  # add the user to the www-data group
echo after group add
# sudo mkdir -p ${fold}
sudo chown -hR www-data:www-data  ${fold}
sudo chmod -R u+rw,g+rws,o-rw  ${fold}  #also set the group sticky bit, so group is set for new files. chmod g+s . – jris198944 May 13 '14 8:43 
sudo find ${fold} -type d -exec chmod g+x {} +  # make only folders +x so they can be cd into.
#
 groupadd www-data ;  usermod -a -G www-data  $userv  # add the user to the www-data group
echo after group add
#  mkdir -p ${fold}
 chown -hR www-data:www-data  ${fold}
 chmod -R u+rw,g+rws,o-rw  ${fold}  #also set the group sticky bit, so group is set for new files. chmod g+s . – jris198944 May 13 '14 8:43 
 find ${fold} -type d -exec chmod g+x {} +  # make only folders +x so they can be cd into.
#

fold=/crib
sudo groupadd www-data ; sudo usermod -a -G www-data  $userv  # add the user to the www-data group
echo after group add
# sudo mkdir -p ${fold}
sudo chown -hR www-data:www-data  ${fold}
sudo chmod -R u+rw,g+rws,o-rw  ${fold}  #also set the group sticky bit, so group is set for new files. chmod g+s . – jris198944 May 13 '14 8:43 
sudo find ${fold} -type d -exec chmod g+x {} +  # make only folders +x so they can be cd into.
#
 groupadd www-data ;  usermod -a -G www-data  $userv  # add the user to the www-data group
echo after group add
#  mkdir -p ${fold}
 chown -hR www-data:www-data  ${fold}
 chmod -R u+rw,g+rws,o-rw  ${fold}  #also set the group sticky bit, so group is set for new files. chmod g+s . – jris198944 May 13 '14 8:43 
 find ${fold} -type d -exec chmod g+x {} +  # make only folders +x so they can be cd into.
#