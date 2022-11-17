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
docker-compose up -d
```

5. Reconstruir la DB con la semilla

```
http://localhost:3000/api/v1/seed
```
