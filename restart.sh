rm nohup.out
sudo killall node
nohup sudo PORT=80 DEBUG=dti:* npm start &
