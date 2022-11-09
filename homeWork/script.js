async function fetchBooksJSON() {
  const response = await fetch("https://striveschool-api.herokuapp.com/books");
  const books = await response.json();
  return books;
}

fetchBooksJSON().then((books) => {
  const data = books;

  data.forEach((book) => {
    const forCard = document.querySelector(".container > .row");
    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3";

    card.innerHTML = `  
<div class="card p-2" style="width: 18rem;">
  <img src="${book.img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <h5 class="card-title">  ${"$" + book.price}</h5>
    <a href="#" class="btn btn-primary">Skip </a>
    <button id="card" class="btn btn-danger" onclick="addToCart()">Add to card</button>
  </div>
</div>

`;
    forCard.appendChild(card);

    // const btns = document.querySelectorAll('.btn');
    // Array.from(btns).forEach(function(btn) {
    //   btn.addEventListener('click', function() {
    //     console.log(book);
    //     alert("Added to card")
    //   });
    // });
   
    
  });
  function addToCart() {
    console.log(books);
  }
  addToCart(fetchBooksJSON)

  console.log(data);

  
});

