const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const totalRes = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${totalRes}`);
}

module.exports = sendPaymentRequestToApi;
