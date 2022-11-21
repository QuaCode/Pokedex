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

5. Clonar el archivo __.env.example__ y renombrar la copia a __.env__

6. Llenar las variables de entorno creadas en el __.env__

7. Levantar la app de desarrollo con 
```
npm run start:dev
```

8. Reconstruir la DB con la semilla

```
http://localhost:3000/api/v1/seed
```
