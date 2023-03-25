# STUPID

6 Code Smells que debemos evitar

- **S**ingleton: patrón singleton
- **T**ight Coupling: alto acoplamiento
- **U**ntestability: código no probable (unit test)
- **P**remature optimization: optimizaciones prematuras
- **I**ndescriptive naming: nombres poco descriptivos
- **D**uplication: duplicidad de código, no aplicar el principio DRY

<br>

## Patrón singleton

Pros:

- Garantiza una única instancia de la clase a lo largo de toda la aplicación

Cons:

- Vive en el contexto global
- Puede ser modificado por cualquiera y en cualquier punto
- No es rastreable
- Difícil de testear debido a su ubicación

<br>

## Alto acoplamiento

Un buen diseño de software tiene alta cohesión y bajo acoplamiento

**Cohesión**: lo que la clase (o módulo) puede hacer

- **Baja cohesión**: la clase realiza una gran variedad de acciones (no se enfoca en lo que debe hacer)
- **Alta cohesión**: la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase

**Acoplamiento**: cuán relacionadas o dependientes son dos clases o módulos entre sí

- **Bajo acoplamiento**: cambiar algo importante en una clase no debería afectar a otra
- **Alto acoplamiento**: dificultaría el cambio y mantenimiento del código, dado que las clases están muy unidas. Hacer un cambio podría requerir una renovación completa del sistema.

<br>
Queremos diseñar componentes que sean autocontenido, auto suficientes e independientes. Con un objetivo y un propósito bien definido

<br>
Cons:

- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otro módulos
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos
- Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes

<br>

## Código no testeable

- Código con alto acoplamiento
- Código con muchas dependencias no inyectadas
- Dependencias en el contexto global (Tipo Singleton)

Se denben tener las pruebas en mente antes de crear código

<br>

## Optimizaciones prematuras

- Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor r

- No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental

<br>

## Nombres poco descriptivos

- Nombres de variables mal nombradas
- Nombres de clases genéricas
- Nombres de funciones mal nombradas
- Ser muy específico o demasiado genérico

<br>

## Duplicidad de código

**Real**:

- Código idéntico y cumple la misma función
- Un cambio implicaría actualizar todo el código idéntico en varios lugares
- Incrementa posibilidades de error humano al olvidar una parte para actualizar
- Mayor cantidad de pruebas innecesarias

**Accidental**:

- Código similar pero cumple funciones distintas
- Cuando hay un cambio, sólo hay que modificar un sólo lugar
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones
