FROM node:10-alpine as build

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run build

FROM node:10-alpine
COPY --from=build /src/tslint.json /opt/app/tslint.json
COPY --from=build /src/dist /opt/app
COPY --from=build /src/node_modules /opt/app/node_modules
WORKDIR /opt/app

RUN npm install pm2 -g

ENV PORT 5000

EXPOSE 5000

ENTRYPOINT ["pm2-runtime", "src/main.js"]
