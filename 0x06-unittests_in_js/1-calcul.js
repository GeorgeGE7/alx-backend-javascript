function calculateNumber(type, a, b) {
    const aNumber = Math.round(a);
    const bNumber = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = aNumber + bNumber;
	break;
    case 'SUBTRACT':
	c = aNumber - bNumber;
	break;
    case 'DIVIDE':
      if (bNumber === 0) {
            c = "Error";
      } else {
            c = aNumber / bNumber;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
