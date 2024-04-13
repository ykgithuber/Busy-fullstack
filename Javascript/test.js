function applyDiscount(code, amount) {
    let discount = 0;

    switch (code) {
        case 'save10':
            discount = 0.1;
            break;
        case 'save20':
            discount = 0.2;
            break;
        case 'save30':
            discount = 0.3;
            break;
        default:
            break;
    }

    const discountedAmount = amount - (amount * discount);
    return discountedAmount;
}

const totalAmount = 100;
const userCode = 'save20'; // Change this to test different discount codes
//const userCode = 'save30'; // Change this to test different discount codes
//const userCode = 'save40'; // Change this to test different discount codes

const discountedAmount = applyDiscount(userCode, totalAmount);
console.log(`Total amount after discount: ${discountedAmount}`);