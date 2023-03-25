# Principio de responsabilidad única: Herencia - Problemática

El principio de responsabilidad única (SRP-Single Responsabilidty Principle), es uno de los principios fundamentales de la programación orientada a objetos.
Cada objeto o módulo debe tener una única responsabilidad o razón de cambio, es decir, un objeto o módulo debe hacer solo una cosa y hacerla bien.

Sin embargo, la herencia puede romper este principio, ya que permite que una clase hija herede todas las propiedades y comportamientos de la clase padre. Esto podría permitir que la clase hija tenga más de una responsabilidad, lo que va en contra del SRP.

**Ejemplo**: hay una clase _Automóvil_ que representa un automóvil y que tiene una única responsabilidad de representar el estado de un automóvil. A parte, se crea una clase _Camión_ que hereda de la clase _Automóvil_ y agrega funcionalidades adicionales para representar el estado de un camión. En este caso, la clase Camión podría tener más de una responsabilidad: representar el estado de un automóvil y representar el estado de un camión.

Por lo tanto, es importante tener cuidado al usar la herencia y asegurarse de que no se está violando el SRP. En su lugar, es mejor utilizar la composición, que permite que un objeto componga otros objetos con una responsabilidad específica, en lugar de heredarlos.
<br><br>

# Estructura recomendada de una clase

Comenzar con lista de propiedades

1. Propiedades estáticas
2. Propiedades públicas
3. Propiedades privadas

Métodos

1. Constructores estáticos
2. Constructor
3. Métodos estáticos
4. Métodos privados
5. Resto de métodos de instancia ordenados de mayor a menor importancia
6. Getters y setters

```
class HtmlElement {

     public static domReady: booelan = false;

     private _id: string;
     private type: string;
     private updateAt: number;

     static createInput(id: string) {
          return new HtmlElement(id, 'input');
     }

     constructor(id: string, type: string) {
          this._id = id;
          this.type = type;
          this.updateAt = Date.now();
     }

     setType(type: string) {
          this.type = type;
          this.updateAt = Date.now();
     }

     get id(): string {
          return this.id;
     }

}
```
