#!/bin/bash
# wait-for-it.sh

HOST=$1
PORT=$2
timeout=30

for i in $(seq 1 $timeout); do
  nc -z $HOST $PORT && break
  echo "Esperando a que $HOST:$PORT esté disponible... ($i/$timeout)"
  sleep 1
done

if [ $i -gt $timeout ]; then
  echo "No se pudo conectar a $HOST:$PORT después de $timeout segundos."
  exit 1
fi

echo "$HOST:$PORT está listo."
