function applyDiscountCode (total, discountCode) {
    //function body will go here
    //switch statement is used to check the discountCode and apply the corresponding discount.
    switch (discountCode) {
        case "SAVE10":
            return total - total * 0.1; //apply 10% discount
        case "SAVE20":
            return total - total * 0.2; // apply 20% discount
        case "SAVE30":
            return total - total * 0.3; // apply 30% discount
        //Add more cases for other discount codes here
        default:
            return total; // No discount applied for unknown codes

    }
}

let totalAmount = 100;
console.log(applyDiscountCode(totalAmount,"SAVE10")); // Output: 90 (10% discount)
console.log(applyDiscountCode(totalAmount,"SAVE20")); // Output: 80 (20% discount)
console.log(applyDiscountCode(totalAmount,"SAVE30")); // Output: 70 (30% discount)
console.log(applyDiscountCode(totalAmount,"Unknown")); // Output: 100 (0% discount)
