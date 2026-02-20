const date = '202202';
const nbuUrl = new URL("https://bank.gov.ua/");

nbuUrl.pathname = "NBUStatService/v1/statdirectory/res";

nbuUrl.searchParams.set('date', date);
nbuUrl.searchParams.set('json', '');

const finalUrl = nbuUrl.toString().replace('json=', 'json');

console.log(finalUrl);