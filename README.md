# Ejecutar en desarrollo

1. Clona el repositorio
2. Ejecutar

```
npm i
```

3. Tenemos que tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose -f docker-compose.dev.yaml up -d
```

5. Clonar el archivo __.env.example__ y renombrar la copia a __.env.dev__

6. Levantar la app de desarrollo con 
```
npm run dev
```

7. Reconstruir la DB con la semilla

```
http://localhost:3000/api/v1/seed
```

# Ejecutar imagen completa

1. Clonar el archivo __.env.example__ y renombrar la copia a __.env.staging__

2. Rellenar el __.env.staging__

3. Build de la imagen

```
docker-compose -f docker-compose.staging.yaml --env-file .env.staging up --build
```

4. Run de la imagen

```
docker-compose -f docker-compose.staging.yaml --env-file .env.staging up -d
```