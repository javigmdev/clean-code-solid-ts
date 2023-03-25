(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductBloc {
    loadProduct(id: number) {
      console.log('Product: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Save a product in BBDD', product);
    }

    notifyClients() {
      console.log('Sending mail to clients');
    }

    onAddToCart(productId: number) {
      console.log('Add to cart', productId);
    }
  }

  const productBloc = new ProductBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  productBloc.onAddToCart(10);
})();
