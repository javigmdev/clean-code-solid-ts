# Principio de responsabilidad única (SRP)

Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo.

Tener una única responsabilidad !== hacer una única cosa.

Detectar violaciones:

- Nombres de clases y módulos demasiado genéricos
- Los cambios en el código suelen afectar a la clase o módulo
- La clase involucra múltiples capas
- Número elevado de importaciones
- Excesivo número de líneas de código
