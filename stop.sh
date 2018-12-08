PORT=80
PID=`sudo netstat -tulnp | grep $PORT | awk '{print $7}' | grep -o "[0-9]*"`
LEN=${#PID}
if [ -n $PID ]; then
       sudo kill $PID
fi       
