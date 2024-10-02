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

#### 3. Define and export the necessary environment variables:

Use the `.env.example` template to create an `.env` file defining your secrets.

Then, run the following command to export your variables:

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

*Note: It might fail the first time, it seems that depending on the network the request hangs up.*


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

### Running frontend tests
Go to `webapp/`, then just run:
```
  npm run test
```

After running the previous command, you'll be taken to the browser and you should see something like this:

https://github.com/user-attachments/assets/f4f16dcd-4064-4e36-974b-1eb06a969a11

### Enjoy playing around!
