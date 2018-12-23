#!/bin/bash
set -e

# https://hub.docker.com/_/postgres/

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL

  -- don't do this..
    
  -- CREATE DATABASE    listo;
  -- GRANT ALL PRIVILEGES ON DATABASE    listo   TO    $POSTGRES_USER;
  -- revoke usage on schema public from public;
  -- grant usage on schema public from public;
 
  
  --  Before starting it up create the since_checkpoints table

  SET search_path = public;
  
  CREATE TABLE since_checkpoints
  (
    pgtable text NOT NULL,
    since numeric DEFAULT 0,
    enabled boolean DEFAULT false, --not used in the simple client example
    CONSTRAINT since_checkpoint_pkey PRIMARY KEY (pgtable)
  );    
    
  CREATE TABLE listotbl
  (
    id text NOT NULL,
    doc jsonb,
    CONSTRAINT opennotetbl_pkey PRIMARY KEY (id)
  );    
      
    
EOSQL


