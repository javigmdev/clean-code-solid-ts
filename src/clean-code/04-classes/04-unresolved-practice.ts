(() => {
  // Apply the Single Responsibility Principle. Prioritize composition over inheritance.

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes extends HtmlElement {
    constructor(public value: string, public placeholder: string, id: string) {
      super(id, 'input');
    }
  }

  class InputEvents extends InputAttributes {
    constructor(value: string, placeholder: string, id: string) {
      super(value, placeholder, id);
    }

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  // tip: create a new class InputElement

  const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
