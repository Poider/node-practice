var ids = [
	{
	  id: '3141',
	  title: 'book1',
	  imageurl: 'https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612',
	  price: '12',
	  description: 'hehe'
	},
	{
	  id: '31241',
	  title: 'efgc',
	  imageurl: 'http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png',
	  price: '13',
	  description: 'fafa'
	},
	{
	  id: '311141',
	  title: 'aa',
	  imageurl: 'https://st2.depositphotos.com/1105977/5461/i/600/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg',
	  price: '123',
	  description: 'asd'
	},
	{
	  id: '314141',
	  title: 'ss',
	  imageurl: 'https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612',
	  price: '131',
	  description: 'dasfa'
	}
  ];
let book_found = ids.find((book)=>book.title === 'ss')
const index = ids.indexOf(book_found);
ids.splice(index, 1);
console.log(ids)