# Principio de abierto y cerrado

Establece que las entidades de software (clases, módulos, métodos, etc) deben estar abiertas para extensión, pero cerradas para modificación.

La forma más sencilla de demostrar este principio es considerar un método que hace una cosa.
Ejemplo:

- Hay un método que escribe en un fichero llamado _hola.txt_
- Se necesita un nuevo requisito que consiste en escribir en un fichero llamado _adios.txt_.
- Si para hacer este requisito es necesario editar el método y cambiar _hola_ por _adios_, se estaría rompiendo este principio.
- La forma para resolver este principio sería la siguiente:

```
writeFile(fileName: string);

writeFile('hola.txt');

writeFile('adios.txt');
```

Este principio, también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia (strategy pattern).

Detectar violaciones:

- Cambios que normalmente afectan a nuestra clase o módulo
- Cuando una clase o módulo afecta a muchas capas (presentación, almacenamiento, etc)
