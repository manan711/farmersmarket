#!/bin/bash
/opt/lampp/lampp start
/opt/lampp/bin/mysql -h localhost -P 3306 -u root -e "CREATE DATABASE IF NOT EXISTS farm_marketplace;"
/opt/lampp/bin/mysql -h localhost -P 3306 -u root farm_marketplace < /db/farm_marketplace.sql
