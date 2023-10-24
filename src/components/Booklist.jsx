import React, { useState } from 'react';
import Book from './Book';

// const books = [
//   {
//     title: 'Harry Potter and the Sorcerer\'s Stone',
//     author: 'J.K. Rowling',
//     price: 10.99,
//     image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg',
//     stock: 20
//   },

//   {
//     title: 'Harry Potter y el misterio del principe',
//     author: 'J.K. Rowling',
//     price: 15.99,
//     image: 'https://img1.od-cdn.com/ImageType-400/3450-1/%7B39CBDA0B-F15C-40E1-A169-A45AE395C3BF%7DIMG400.JPG',
//     stock: 30
//   },
//   {
//     title: 'Harry Potter y el prisionero de azcaban',
//     author: 'J.K. Rowling',
//     price: 13.99,
//     image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/1a/31/1a3145c3ba83287fabdb65514b893cf6.jpg',
//     stock: 10
//   },

//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//     price: 15.99,
//     image: 'https://m.media-amazon.com/images/I/71DWj7cP0ML._AC_UF1000,1000_QL80_.jpg',
//     stock: "no hay stock"
//   },

//   {
//     title: 'Harry Potter and the Order of the Phoenix',
//     author: 'J.K. Rowling',
//     price: 20.99,
//     image: 'https://pictures.abebooks.com/isbn/9780747569404-fr.jpg',
//     stock: 5
//   },

//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//     price: 18.99,
//     image: 'https://prodimage.images-bn.com/pimages/9780439139601_p0_v1_s1200x630.jpg',
//     stock: 13
//   },

//   {
  
//     title: 'Harry Potter and the Cursed Child   ',
//     author: 'J.K. Rowling',
//     price: 20.99,
//     image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTwXIcAPmKWgLxKUsabddMn1zw-cdjhoSoGvsbwMrFDy4Z6UaA',
//     stock: 30
//   },

// ];

function  BookList({ addToCart }) {
  const [books, setBooks] = useState([]);

fetch("http://localhost:10101/productos").then((res) => {return res.json()}).then((data)=>{setBooks(data)})

  return (
    
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          price={book.price}
          addToCart={() => addToCart(book)}
          image={book.imagen}
          stock={book.stock}
        />
      ))}
    </div>
  );
}



export default BookList;
