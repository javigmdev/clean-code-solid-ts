# Principio de inversión de dependencias

- Los módulos de alto nivel no deberían depender de módulos de bajo nivel
- Ambos deberían depender de abstracciones
- Las abstracciones no deberían depender de detalles
- Los detalles deberían depender de abstracciones

Depender de abstracciones:

- Clases abstracctas o interfaces
- Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio

¿Por qué se obtiene este beneficio?

- Cada cambio en un componente abstracto implica un cambio en su implementación
- Por el contrario, los cambios en implementaciones concretas, la mayoría de veces, no requieren cambio en las interfaces que implementa

Inyección de dependencias

- Dependencia en programación, significa que un módulo o componente requiere de otro para poder realizar un trabajo
- En algún momento el programa llegará a estar formado por muchos módulos y cuando esto pase, es cuando se debe usar la inyección de dependencias
