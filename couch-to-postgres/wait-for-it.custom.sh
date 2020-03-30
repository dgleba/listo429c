#!/bin/sh
# from : wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"
echo "cmd var is:  $cmd"

# originally. from https://docs.docker.com/compose/startup-order/
#
# until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "postgres" -c '\q'; do
#   >&2 echo "Postgres is unavailable - sleeping"
#   sleep 1
# done
#
# >&2 echo "Postgres is up - executing command"
# exec $cmd


# ======================================================================

# error psql not found
#
# until PGPASSWORD=$POSTGRES_PASSWORD psql -h "postgres429" -U "postgres" -c '\q'; do
#   >&2 echo "Postgres is unavailable - sleeping"
#   sleep 1
# done

echo sleeping 10.
sleep 10

>&2 echo "continuing..."
# chain to wait-for-it..
exec ./wait-for-it.sh couchdb:5984 -t 32 -- ./bin/index.js

