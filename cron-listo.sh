#!/usr/bin/env bash
echo ~----------~----------Startingb $HOSTNAME, pwd: `pwd`, "${BASH_SOURCE[0]}" $(date +" %Y-%m-%d_%H.%M.%S")
echo "${BASH_SOURCE[@]}"  # echo full bashsource array
#
set -vx
date


# Cron jobs..

#  list, remove, list, add, list...
sudo crontab -u $USER -l  # list

# remove
# sudo crontab -u $USER -l | grep -v '/0docs-pmdsdata/archivedata1.sh'  | sudo crontab -u $USER - #remove

#  add...
#   sftp://$USER@10.4.1.224/home/$USER/bin/metabase_stopstart.sh start a new log daily..
# sudo crontab -u $USER -l | grep -v '/home/$USER/bin/metabase_stopstart.sh'  | sudo crontab -u $USER - #remove
#  sudo crontab -u $USER -l | { cat; echo "5 0 * * 0-6 source $HOME/.bashrc;      sudo /home/$USER/bin/metabase_stopstart.sh 2>&1 | tee -a /home/$USER/log/metabasestart.log"; } | sudo crontab -u $USER -  #add
# sudo crontab -u $USER -l | { cat; echo "5 0 * * 0-6 tail -n+10 ~/.bashrc | bash; sudo /home/$USER/bin/metabase_stopstart.sh 2>&1 | tee -a /home/$USER/log/metabasestart.log"; } | sudo crontab -u $USER -  #add


# pgcouch 
sudo crontab -u $USER -l | grep -v 'restartpgcouch.sh'  | sudo crontab -u $USER - #remove
mkdir -p /srv/dkr/log/
sudo crontab -u $USER -l | { cat; echo "5   5 * * 0-6 tail -n+10 ~/.bashrc | bash; sudo /srv/dkr/listo429c/restartpgcouch.sh "; } | sudo crontab -u $USER -  #add
sudo crontab -u $USER -l | { cat; echo "49 20 * * 0-6 tail -n+10 ~/.bashrc | bash; sudo /srv/dkr/listo429c/restartpgcouch.sh "; } | sudo crontab -u $USER -  #add
sudo crontab -u $USER -l | { cat; echo " 0 12 * * 0-6 tail -n+10 ~/.bashrc | bash; sudo /srv/dkr/listo429c/restartpgcouch.sh "; } | sudo crontab -u $USER -  #add


sudo crontab -u $USER -l  # list



# ===================================================




#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function info()
{
exit 9
_____________

truncate -s 0 test.txt

sudo truncate -s 0 /srv/dkr/log/pgcouch99.log



}

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#
date

