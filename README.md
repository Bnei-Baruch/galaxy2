# galaxy2

## Install janus gateway

git clone https://github.com/meetecho/janus-gateway.git
cd janus-gateway/
sh autogen.sh
./configure --enable-boringssl --prefix=/opt/janus
make
make install
sudo vimdiff /opt/janus/etc/janus/janus.plugin.videoroom.cfg /opt/janus/etc/janus/janus.plugin.videoroom.cfg.sample 
sudo vimdiff /opt/janus/etc/janus/janus.plugin.textroom.cfg /opt/janus/etc/janus/janus.plugin.textroom.cfg.sample
sudo vimdiff /opt/janus/etc/janus/janus.plugin.streaming.cfg /opt/janus/etc/janus/janus.plugin.streaming.cfg.sample

sudo nohup ./janus &


## Install and run frontend

sudo rm node_modules/
sudo npm install
sudo rm node_modules/
bower update
gulp serve

## Install and run backend

bundle install

thin start -p 5000 --ssl --ssl-key-file=~/.ssh/server.key --ssl-cert-file=~/.ssh/server.cert
