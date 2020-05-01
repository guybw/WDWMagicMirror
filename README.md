# WDWMagicMirror
This script should help take your RaspberryPI from a fresh built system to having WDW today running!

First Update the Pi
> sudo apt-get update
> sudo apt-get upgrade

#Install Apache with the following commands
> sudo apt-get install apache2
# This is BAD but 
> CHMOD 777 /var/www/


#This sets up a local copy of WDWToday on /var/www/
# Then Install  HTTtrack
> sudo apt-get install httrack

#Run this but I don't know how to! - 
> (webhttrack -q -%i -w http://disneylivecams.com/WDWtoday/index.php -O "/home/pi/websites/WDW" -n -%P -N0 -s2 -p7 -D -a -K0 -c4 -%k -A25000 -F "Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)" -%F "<!--Mirrored from %s%s by HTTrack Website Copier/3.x [XR&CO'2014], %s -->" +*.png +*.gif +*.jpg +*.jpeg +*.css +*.js +*.svg -ad.doubleclick.net/* -%s -%u )





#Samba is useful for repairing and configuring stuff so try this!


> sudo apt-get install samba samba-common-bin

sudo nano /etc/samba/smb.conf

# Within this file, add the following to the bottom. This text defines various details of our share.
[root]
path = /
writeable=Yes
create mask=0777
directory mask=0777
public=no

#remove The key point is to remove/comment out any "map to guest" line in your smb.conf


#Run the following command to create the user. You will be prompted afterward to enter the password.

sudo smbpasswd -a pi

# Finally, before we connect to our Raspberry Pi Samba share, we need to restart the samba service so that it loads in our configuration changes.

sudo systemctl restart smbd

# NOW we install Magic Mirror!
bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"


#COPY the following files to the correct location
config.js /homepi/MagicMirror/Config 

!copy modules to the MM/Modules Folder

#This commands will turn off the screensaver and setup auto booting!

> bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/screensaveroff.sh)"

> bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/fixuppm2.sh)"
