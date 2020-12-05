# Contributing

## Setup

1. Clone the repo
```
git clone https://github.com/avadavat/truth-fiddle
cd truth-fiddle
```
2. Install Dependencies

Note: Make sure you are using npm version 6.9.0 if you don't want to generate huge diffs in `package-lock.json`
```
npm install
```
3. Run development server
```
npm run dev
```
4. To run tests:
```
npm run test
```
5. To run auto-formatter:
```
npm run prettier
```

## Run with Docker
1. Pull the latest container (unless you want to build it yourself)
```
docker-compose pull
```
2. Start the container
```
docker-compose up
```
3. Stop the container
```
docker-compose down
```
