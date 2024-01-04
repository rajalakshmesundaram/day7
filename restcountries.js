const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
console.log(xhr);
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
};

xhr.onload = () => {
  const countries = JSON.parse(xhr.response);
  console.log(countries)
  //Get all the countries from ASia continents using filter function
  console.log(countries.filter(country=>country.continents =="Asia"));
  //Get all the countries with a population of less than 2 lakshs
  console.log(countries.filter(country=>country.population < 200000))
  //Print the following details name,capital,flag using "For...Each"Function
  countries.forEach(country => console.log(country.name,country.capital,country.flags));
  //Print the total population of countries using reduce function
  console.log(countries.reduce((acc, country) => {return(acc + country.population);}))
  //Print the country that uses "us dollars" as currency*/
 for (let country of countries)
 {
  console.log(country.currencies.USD)
 }
 
 
}
