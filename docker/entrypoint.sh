#!/bin/sh

# add env to php-fpm config
env | grep VIP_HT | sed -e "s/^VIP_//" | sed -e "s/^\([A-Z_a-z0-9]*\)=\"\{0,1\}\([^\"]*\)\"\{0,1\}/env[\1] = \"\2\"/g" >> /etc/php5/fpm.d/www.conf
php-fpm -R

# start crond
crond -f &

# start authentication 
/auth/authentication &

# start api
cd /api && ./entrypoint.sh env.template &

./file_init.sh

# Add tmp dir for fastcgi php usage, used for uploaded file
mkdir /build/dist/tmp && chmod 777 /build/dist/tmp

echo "Fix chroot issue"
mkdir /build/dist/etc
for n in `ls -L /etc` ; do if [ ! -d /etc/$n ]; then cp /etc/$n /build/dist/etc/ ; fi ;  done

nginx -g "daemon off;"