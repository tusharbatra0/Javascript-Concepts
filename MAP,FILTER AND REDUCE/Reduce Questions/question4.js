//  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let totalprice = wishlist.reduce((acc , curr) => {
    return acc = acc + curr.price
} ,0)
console.log(totalprice)