# Catz
Catz app 😜

Prior to the setup, make sure you have the following installed:
- Python 3.12.6: `brew install python@3.12.6`
- Docker, [download link](https://docs.docker.com/desktop/install/mac-install/).
- Node 22: `brew install node@22`

## Backend Setup

Please follow the next steps in order.

#### 1. Create a postgres container using Docker to create the application database **(run once only if not executed before)**:
```
  $ docker run -e POSTGRES_DB=cats -e POSTGRES_USER=sample -e POSTGRES_PASSWORD=sample -e PGDATA=/var/lib/postgres -d -p 5432:5432 -h 127:0.0.1:0.0.0.0 postgres
```

#### 2. Create a virtual python env, activate it and install necessary deps:
```
  $ python3 -m venv catapi
  $ source catapi/bin/activate
  (catapi) $ python3 -m pip install load_dotenv
  (catapi) $ python3 -m pip install psycopg2-binary
  (catapi) $ python3 -m pip install alembic
  (catapi) $ python3 -m pip install sqlalchemy
  (catapi) $ python3 -m pip install requests
```

#### 3. Export the necessary environment variables by executing the following one-liner:
```
  (catapi) $ source .env; set +o allexport
```

#### 4. Execute the database migrations:
```
    (catapi) $ alembic upgrade head
```

#### 5. Populate the database with TheCatsApi data **(run once only if not executed before)**:
```
  (catapi) $ python3 -m app.database.populate
```

If it fails the first time, try again.


## Start the server

You can start the server by running:
```
  (catapi) $ python3 app/server.py
```

## Frontend Setup

Go to `webapp/` and start the web server by running the following:

```
  $ npm i
  $ npm start
```


### Enjoy playing around!
