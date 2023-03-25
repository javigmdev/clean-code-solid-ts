(() => {
  // Apply the Single Responsibility Principle. Prioritize composition over inheritance.

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  // tip: create a new class InputElement
  class InputElement {
    public html: HtmlElement;
    public attributtes: InputAttributes;
    public events: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.html = new HtmlElement(id, 'input');
      this.attributtes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
