# Funciones

Se desarrolla código limpio cuando cada función hace exactmente lo que su nombre indica.

No se recomienda que el número de parámetros que recibe una función sea mayor de 3.

```
// no good
function sendEmail(toWhom: string, from: string, body: string, subject: string, apikey: string): boolean {}
```

```
// better
interface SendEmailOptions {
  toWhom: string;
  from: string;
  body: string;
  subject: string;
  apikey: string;
}

function sendEmail({ toWhom, from, body, subject, apikey}: SendEmailOptions): boolean {}
```

Otras recomendaciones:

- Simplificad es fundamental
- Funciones de tamaño reducido
- Funciones de una sola línea sin causar complejidad
- Menos de 20 líneas
- Evita el uso del else
- Prioriza el uso del operador ternario
