# Weight Tracker App
Application to track weight over time using React, Node, Express and Postgres (Docker)

### Installation

1. Clone or download the repository:

```
git clone https://github.com/maricarmello/weight-tracker
``` 

2. Go to the root of the project and install all project's dependencies:
```
npm installapps
```
3. Create postgres database using docker. Get [Docker]  :

[Docker]:https://docs.docker.com/get-docker/
```
docker run -d -p 5432:5432 --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres postgres
```
4. Run migration:
```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres npm run migrate up
```

4. Start application:
```
npm run dev
```

### Tests

Run tests:
```
npm run test
```
