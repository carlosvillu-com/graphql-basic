# graphql-basic
Basic concept about GraphQL

### Instalación:

```bash
$ git clone https://github.com/carlosvillu-com/graphql-basic
$ cd graphql-basic
$ npm install
```

### Uso

El tutorial está dividido en varias partes. Primero lanzamos un query absolutamente básica (Hello worl!). Luego interactuamos con una API rest.
Y por último creamos una servidor al que le podemos enviar consultas GraphQL y nos response con el JSON adecuado.

Para poder lanzar poder ejecutar cada una de las fases:

* `$ npm run stage-hello-world`: Lanza el ejemplo más básico.
* `$ npm run stage-rest-api`: Lanza un query *estática* con la APIRest
* Hay dos comandos para el servidor GraphQL:
  * `$ npm run dev:serve`: Pone a la escucha un servidor en el puerto **8080**
  * `$ npm run dev:query`: Lanza una query arbitraria contra ese servidor. La query que lanza la puedes encontrar en el fichero "curl-query". Por si deséas cambiarla.

Como la salida JSON directamente en consola puede ser muy complicada de leer, hay un par de tarea que nos pueden ayudar a tener una salida un poco mejor:

* `$ npm run stage-hello-world:pretty`
* `$ npm run stage-rest-api:pretty`
