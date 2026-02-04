var man = [
  {
    name: "Oversize Hoodie Black",
    price: "420.000",
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070"
  },
  {
    name: "Basic T-Shirt White",
    price: "199.000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Cargo Pants Olive",
    price: "520.000",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
  },
  {
    name: "Denim Jacket Blue",
    price: "690.000",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  }
];

var woment = [
  {
    name: "Women Blazer Beige",
    price: "599.000",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b"
  },
  {
    name: "Knit Sweater Cream",
    price: "349.000",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    name: "High Waist Jeans",
    price: "459.000",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Summer Dress Floral",
    price: "399.000",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
  }
];

function listProducts() {
  for (let i = 0; i <= man.length - 1; i++) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem;">';
    demo += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px;object-fit:cover;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + man[i].name + '</h5>';
    demo += '<p class="card-text">' + man[i].price + '</p>';
    demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';

    document.getElementById("men").innerHTML += demo;
  }

  for (let i = 0; i <= woment.length - 1; i++) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem;">';
    demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height:400px;object-fit:cover;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
    demo += '<p class="card-text">' + woment[i].price + ' vnđ</p>';
    demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt Mua</a>';
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';

    document.getElementById("woment").innerHTML += demo;
  }
}

function oder() {
  alert("thank you your order");
}