# Weight Tracker App
Application to track weight over time using React, Node, Express and Postgres (Docker)

### Installation

1. Clone or download the repository:

```
git clone https://github.com/maricarmello/weight-tracker
``` 
2. Go to the root of the project run npm install:
```
npm install
```

3. Go to the root of the project and install all project's dependencies: (this command can take a couple of seconds to finish)
```
npm run installapps
```
4. Create postgres database using docker. Get [Docker]  :

[Docker]:https://docs.docker.com/get-docker/
```
docker run -d -p 5432:5432 --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres postgres
```
5. Run migration:
```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres npm run migrate up
```

6. Start application:
```
npm run dev
```

### Tests

Run tests:
```
npm run test
```

### Known Issues

  - There's an issue with updating the date in some OS's (tested on MacOS with chrome) where the date gets subtracted by 1 day
