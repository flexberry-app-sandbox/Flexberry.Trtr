docker build --no-cache -f SQL\Dockerfile.PostgreSql -t trtr-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t trtr-java/app ../../..
