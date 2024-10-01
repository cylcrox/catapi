# catapi
Cat API challenge

# env setup
python3 -m venv catapi
source catapi/bin/activate
python3 -m pip install load_dotenv
python3 -m pip install psycopg2-binary
python3 -m pip install alembic
python3 -m pip install sqlalchemy
install docker
source .env; set +o allexport
docker run -e POSTGRES_DB=cats -e POSTGRES_USER=sample -e POSTGRES_PASSWORD=sample -e PGDATA=/var/lib/postgres -d -p 5432:5432 -h 127:0.0.1:0.0.0.0 postgres
