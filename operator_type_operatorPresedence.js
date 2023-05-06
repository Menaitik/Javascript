console.log("Good Morning");
// + ,- ,* ,% ,/,<,>,,== etc operator to perform operation on operand

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;

console.log(discountPercent);

var displayDiscountPrice = Math.round(discountPercent);

console.log(displayDiscountPrice + "% OFF");

var num = 12;
console.log(typeof num);