# Prueba Técnica IONIC  - Banco BHDLeón.

¡Hola !, Bienvenido a la prueba técnica IONIC de banco BhdLeón. Esta prueba tiene como propósito principal el conocerte más, además nos permitirá validar tus aptitudes ya demostrada durante la entrevista, entender la forma en la que regularmente enfrentas los problemas presentados durante la construcción del software y qué tanto podemos aprovecharla.

Es importante mencionar que cada quien tiene la mejor forma de hacer las cosas, sin embargo, para nosotros es muy importante que apliques ciertos conceptos durante esta prueba, que nos permitirá saber que tan rápido puedas aportar al proyecto donde estarás asignado.

> Importante!: Siéntete cómodo completando la misma, usualmente tenemos un dicho en los procesos de entrevista que dice: 'Trata a los demás como te gustaría ser tratado a ti.', es importante que podamos conocer tu forma de trabajar, dicho esto, si entiendes que no sabes como hacer algo, o como resolver el problema, siente en la libertad en decirlo.

## Requisitos básicos

Antes de comenzar es necesario que puedas tener tu ambiente bien configurado de tal manera que podamos estar seguro que podrás completar la misma en el tiempo definido.

- Editor de texto preferido (Nos encanta VS Code) pero puedes utilizar el de tu preferencia.
- Haber clonado este proyecto.
- Internet
- Poder compartir pantalla (screen sharing) a los moderadores.

*Importante*: Entendemos que el flujo normal de un desarrollador es realizar preguntas, consultar el internet y buscar información, por lo tanto hacer uso de estos recursos como copy & paste, buscar en google, consultar stackoverflow o cualquier material de apoyo para completar la prueba es permitido.

## Aptitudes a Validar.

Dentro de las aptitudes que queremos evaluar está:

1. Buenas prácticas de desarrollo.
2. Buen entendimiento en programación orientada a objetos.
3. Principios SOLID.
4. Entendimiento técnico de las herramientas utilizadas.
5. Creatividad y rapidez de desarrollo.

## Prueba Técnica.

Deberás realizar las siguientes tareas:

1. Desarrollar un Login de usuario, con los siguientes campos: 
      - Usuario y Password 
      - Botón que solo se active cuando ambos campos estén completados.
2. Deberás autenticarte con el servicio https://bhdleonfrontend-test.herokuapp.com/sign_in:, recuperar el access_token y colocarlo en el header de cada petición siguiente.

Servicio de tipo POST.
Body:
```
{
  "userId": "00100010321",
  "password": "1111"
}
```

Response:

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEwMDAxMDMyMSJ9.kPLjCmPJaw8ja",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.dw8gT8j5mKQbY8dVK453_dRICvBSg2oAQYFfzO1rpoY"
}
```

3. Luego recuperar los productos utilizando el siguiente servicio: https://bhdleonfrontend-test.herokuapp.com/products/accounts

Servicio de tipo GET
Requiere token

Request headers:

```
{
  “authorization”: “Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEwMDAxMDMyMSJ9.kPLjCmPJaw8j”
}
```

Response:

```
[
    {
        "alias": "Cuenta de ahorros 1",
        "number": "1234567890001",
        "availableAmount": 100000,
        "productType": "AC"
    },
    {
        "alias": "Cuenta de ahorros 2",
        "number": "1234567890002",
        "availableAmount": 200000,
        "productType": "AC"
    }
]
```

## Puntos adicionales:

1. El diseño no se provee en esta prueba, sin embargo genera puntos adicionales por incluirlo.
2. Pruebas unitarias de cada componente, servicio o utilitario genera puntos adicionales.
3. Explicar tu idea de desarrollo mientras desarrollas, genera puntos adicionales.

***Nota al margen:*** Al terminar la prueba estarás respondiendo a una seria de preguntas luego de haber terminado el tiempo.
