const Singleton = (function () {
  let instance: Object;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Are the same instance? ', instance1 === instance2);
}

main();

// node src/code-smells/01-singleton/01-singleton.js
