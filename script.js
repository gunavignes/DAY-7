var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    //console.log(result[0].name);
    //for(i=0;i<=result.length;i++)
    //{
      //  console.log(result[i].name);
    //}
//Get all the countries from the Asia continent /region using the Filter function
    var res=result.filter((ele)=>ele.region==="Asia");
console.log(res);
//Get all the countries with a population of less than 2 lakhs using Filter function
var population=result.filter(ele=>(ele.population<100000)).map(ele=>(ele.name));
console.log(population);
//Print the following details name, capital, flag using forEach function
result.forEach(ele=>{console.log(ele.name);
                     console.log(ele.flag);
                     console.log(ele.capital);});

// Print the total population of countries using reduce function
var total=result.reduce((i,ele)=>i+ele.population,0);
console.log(total);
//Print the country which uses US Dollars as currency.
var curr=result.filter((ele)=>{for(i=0;i<ele.currencies.length;i++)
  {
    if(ele.currencies[i].code==="USD")
    {
      return true;
    }
  }
});console.log(curr);

}