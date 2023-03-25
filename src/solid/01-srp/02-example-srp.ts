(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number): Product {
      return { id, name: 'OLED Tv' };
    }

    saveProduct(product: Product) {
      console.log('Save a product in BBDD', product);
    }
  }

  class Mailer {
    sendEmail() {
      console.log('Sending mail to clients');
    }
  }

  class ProductBloc {
    constructor(
      private productService: ProductService,
      private mailer: Mailer,
    ) {}

    loadProduct(id: number) {
      console.log('Product: ', this.productService.getProduct(id));
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail();
    }
  }

  class CartBloc {
    private items: Object[] = [];

    addToCart(productId: number) {
      console.log('Add to cart', productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productService, mailer);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();

  const cartBloc = new CartBloc();
  cartBloc.addToCart(10);
})();
