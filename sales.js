var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(nums) {
  var total = 0;

  for (var i in nums) {
    total += nums[i]
  }
  return total;
}

function calculateSalesTax(salesData, taxRates) {
  var result = {}
  for (i in salesData) {
    var companyName = salesData[i]['name']
    var sales = sum(salesData[i]['sales']);
    var prov = salesData[i]['province'];
    var taxes = sales * taxRates[prov];
    if (result[companyName] === undefined) {
      result[companyName] = {}
      result[companyName]['totalSales'] = sales;
      result[companyName]['totalTaxes'] = taxes;
    }
    else {
      result[companyName]['totalSales'] += sales;
      result[companyName]['totalTaxes'] += taxes;
    }
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/