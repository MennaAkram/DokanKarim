class Item {
    constructor(id, name, imageUrl, price, quantity, heartClicked, deleteClicked) {
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.price = price;
      this.quantity = quantity;
      this.heartClicked = heartClicked;
      this.deleteClicked = deleteClicked;
    }
  }
  
 export const items = [
    new Item('1', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),
    new Item('2', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),
    new Item('3', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),
    new Item('4', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),
    new Item('5', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),
    new Item('6', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),
    new Item('7', 'Nike Air Zoom Pegasus 36 Miami', 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg', 100, 0, false, false),

    // Add more items here...
    // {id:1,name:'ahmed',imageUrl:'google.com',price:100,quantity:"0",heartClicked:false,deleteClicked:false},
    // {id:2,name:'ahmed',imageUrl:'google.com',price:100,quantity:"0",heartClicked:false,deleteClicked:false}

  ];