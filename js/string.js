// Dom manipulation

// 1. Adding Elements

// Existujú 2 spôsoby ako pridať prvok na stránku

// 1. spôsob a) - append() - metóda na pridávanie prvkov do tela

// const body = document.body;

// // body.append('hello', ' bye'); // môžeme ridávať retazce stringov, elemenotv div, span...


// // 2. spôsob b) - appendChild() - pridavanie elementov div, span..., pripojiť sa da iba jedna vec naraz

// const div = document.createElement('div'); // nič za nezobrazí, pretože sme element vytvorili, ale nepridali. Vytvoriť element v JS je niečo úplne iné ako pridať 


// div.innerText ='Hello world'; // jeden so spôsobov ako pridať text
// div.textContent = 'Hello world 2' // druhý spôsob pridávania textu

// body.append(div);
// body.appendChild(div);


// Modifying element text
// // rozdiel medzi innerText a textContent: [note: HTML tags]

// const div = document.querySelector('div');

// console.log(div.textContent); // vytláči všetok text aj medzery, ako aj osadenie, vytlačí ako samostatné HTML, so všetkými medzerami
// console.log(div.innerText); // vytláči iba text, ktorý je viditeľný na stránke. Líši sa v tom, že pozera aj na CSS, či je to viditeľné na obrazovke, vytlačí ho ako HTML

// Modifying element HTML



// const body = document.body;
// const div = document.createElement('div');


// // innerHTML jediný spôsob ako pridať HTML element z reťazca
// div.innerHTML = '<strong>hello world</strong>'

// body.append(div)  


// Removing elements

//   const body = document.body;
//   const div = document.querySelector('div');
//   const spanHi = document.querySelector('#hi');
//   const spanBye = document.querySelector('#bye');

//   // spanBye.remove(); // remove()funkcia úplne vymaže element aj z HTML
//   // div.append(spanBye); // pridáme ho späť

//   div.removeChild(spanHi);


//   Modifying element attributes

//   const body = document.body;
//   const div = document.querySelector('div');
//   const spanHi = document.querySelector('#hi');
//   const spanBye = document.querySelector('#bye');

//   // GET attributes
//   // console.log(spanHi.getAttribute('id'));
//   // console.log(spanHi.title);

//   // SET attributes
//   // spanBye.setAttribute('title', 'sad');
//   // spanBye.title = 'pam';

//   // Remove attributes

//   spanHi.removeAttribute('id')


//   Modifying data attributes
//   https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/

//   const body = document.body;
//   const div = document.querySelector('div');
//   const spanHi = document.querySelector('#hi');
//   const spanBye = document.querySelector('#bye');

//   // console.log(spanHi.dataset)
//   console.log(spanHi.dataset.longerName)

//   spanHi.dataset.newName = 'New name';


//   Modifying element classes
//  https://blog.webdevsimplified.com/2020-11/class-list/

//   const body = document.body;
//   const div = document.querySelector('div');
//   const spanHi = document.querySelector('#hi');
//   const spanBye = document.querySelector('#bye');


//   spanHi.classList.add('new-class');
//   spanHi.classList.remove('h1');
//   spanHi.classList.toggle('h2');
//   spanHi.classList.toggle('h2', false); //true

//     console.log(spanHi.classList.contains('h1')) // obsahuje element daný class? true|false
//     spanHi.classList.forEach(className => {console.log(className)})
  

//   Modifying element style

//   const body = document.body;
//   const div = document.querySelector('div');
//   const spanHi = document.querySelector('#hi');
//   const spanBye = document.querySelector('#bye');


//   spanHi.style.color = 'red';

  


  // ARRAY 
  // https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=1s


  const items = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}
  ]

  // filter
//   const filterItems = items.filter(item => item.price <= 100);

//   console.log(filterItems);


//   // map //vytvorí nové pole

//   const itemNames = items.map(item => item.name);

//   console.log(itemNames)

//   //find // najde prvú položku
//   const foundItem = items.find(item => item.name === 'Album')

//   console.log(foundItem)

//   //forEach // nevracia, nie je potrebný return
//   items.forEach(item => console.log(item.name))

//   // some // vracia iba true | false
//   const inexpensiveItems = items.some(item => item.price <= 2)

//  console.log(inexpensiveItems)

//  // every // 
//  const everyItems = items.every(item => item.price >= 5) // skontroluje či každá položka v poli je menšia alebo rovna 100

//  console.log(everyItems)

//   //reduce // (currentTotal, item) 1. položka je aktuálný stav, 2. item je každá položka v poli
//             // 0 - prvá iterácia - položka bike = 100 + 0, druhá iterácia už bude 100 + 200...
//   const total = items.reduce((currentTotal, item) => (item.price + currentTotal), 0)
//   console.log(total) // celková hodnota


//   // includes // prejde celým poľom, či obsahuje daný údaj, ak ano true v opačnom false
//   const includesItems = [1, 2, 3, 4, 5]

//   const includesTwo = includesItems.includes(2);

//   console.log(includesTwo)




    // ARRAY

    // 1. forEach 

    // let number = [1, 2, 3, 4, 5];

    // let sum = 0;

    // let totalSum = number.forEach(itemNum => { sum += itemNum});

    // console.log(sum)

      // let letter = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

      // let count = {};

      // letter.forEach(item => {
      //   if(count[item]){
      //     count[item]++;
      //   } else {
      //     count[item] = 1
      //   }
      // })

      // console.log(count)



  // 2. map 

  // let number = [1, 2, 3, 4, 5];

  // let newArray = number.map(mapDouble)

  

  // function mapDouble(value, index) {
  //   return (value * index);
  // }

  // console.log(newArray)

  var products = [
    {
      name: 'laptop',
      price: 1000,
      count: 5
    },
    {
      name: 'desktop',
      price: 1500,
      count: 2
    },
    {
      name: 'mobile',
      price: 50,
      count: 10
    }
  ]

  // let totalProductsValue = products.map( item => (item.price * item.count))

  // console.log(totalProductsValue)



    // let totalProductsValue = products.map(item => ({
    //     name: item.name,
    //     value: item.price * item.count
    // }))

    // console.log(totalProductsValue)


    // console.clear();

  // z poľa stringov na pole čisel
  // let str = ['1', '2', '3', '4']

  // let numbers = str.map(Number);

  // console.log(str)
  // console.log(numbers)



  // filter


//  let numbers = [1, 2, 3, 4, 5, 6];


// let filterNumber = numbers.filter(item => item % 2 === 0);

// console.log(filterNumber)



// const people = [
//   {
//     name: 'Floran',
//     age: 26
//   },
//   {
//     name: 'Ivan',
//     age: 18
//   },
//   {
//     name: 'Jai',
//     age: 15
//   }
// ]


// let adult = people.filter(item => item.age >= 18)


// console.log(adult)


// let numbers = [1, 2, 3, 2, 1, 5, 4, 4, 2, 1, 3];

// const numb = numbers.filter((value, index, arr) => {
//   return arr.indexOf(value) === index;
// });


// console.log(numb)




//reduce // prejde celým polom a výde jedna výsledna hodnota

// let numbers = [1, 2, 3, 4, 5];

// spočítámme prvy poľa 

// let total = numbers.reduce(callback, 0);


// function callback(acculumator, value){
//     return acculumator + value;
// }

// console.log(total)

// let maximum = numbers.reduce(max, -Infinity);

// function max(acculumator, value){
//    if(acculumator > value){
//      return acculumator
//    } else {
//      return value
//    }
// }

// console.log(maximum)



// var story = [
//   {
//     name: 'laptop',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'mobile',
//     price: 50,
//     count: 10
//   }
// ]


// let totalValueStore = story.reduce((acc, value) => acc + (value.price * value.count), 0)

// function all( ) {

// }

// console.log(totalValueStore)




// slice // vytvorí nové pole, s vybranými indexami

// const numbers = [1, 2, 3, 4, 5];

// vyberieme indexy čísla 2-4

// const numbers2 = numbers.slice(1, (numbers.length - 2));


// const numbers2 = numbers.slice(-2); //posledne 2 položky poľa
// const numbers2 = numbers.slice(1); // od indexu 1

// console.log(numbers2)

// const participants = ['John', 'Julie', 'Simon', 'Mike', 'Frank'];

// let winner = participants.slice(0,3); // prvý traja

// console.log(winner)



//splice // z poľa odstraní, alebo nhradí existujúce prvky
// získa index a počet, t.j. koľko prvkom chcem odstraniť, alebo získať nové prvky, ktoré vloží do poľa
// zmení pôvodné pol, nie vždy je to dobré


// const numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 2); // 1. odkiaľ, 2 koľko ma zobrať a odstraniť
// console.log(numbers) // pôvodne pole je zmenené

// let deleted = numbers.splice(2, 2); // zobrazí odstranené prvky
// console.log(deleted) // zobrazí odstranené prvky


// //odstranenie a pridanie
// let deleted = numbers.splice(2, 2, 6, 7); // od druhého dve odstraní; 6 a 7 pridá
// console.log(deleted) // zobrazí odstranené prvky


// console.log(numbers); // pridáne v poli o prvky 6 a 7


//pridanie
// let deleted = numbers.splice(2, 0, 6, 7); // od druhého 0 odstraní; 6 a 7 pridá + zvyšné
// console.log(deleted) // zobrazí prázdne pole


// console.log(numbers); // pridáne v poli o prvky 6 a 7




// sort // triedenie poľa

// triedenie na strings (zoradí podľa utf-16)
// const names = ['John', 'Julie', 'Simon', 'Mike', 'Frank'];


// names.sort();

// console.log(names);


// triedenie čísel 
// const numbers = [74, 18, 10, 5, 84, 24, 105]

// numbers.sort(compareNumbers)  //prevednie na strings

// console.log(numbers) 


// function compareNumbers(a, b){
//         // 1. < 0 a comes first
//         // 2. 0 ... nothing will be change
//         // 3. > 0 ... b comes first

//   return a - b;
// }


// sort() na object

// var products = [
//   {
//     name: 'laptop',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'mobile',
//     price: 50,
//     count: 10
//   }
// ]

// products.sort(priceProducts);

// function priceProducts(a, b){
//   return a.price - b.price;
// }

// console.log(products)




//concat // zlúčenie dvoch a viac poli v jedno
// nemení pôvodné pole
// const a = [1, 3, 5];
// const b = [2, 4, 6];
// const d = [7, 8, 9]

// const c = a.concat(b, d); 
// // const c = a.concat(1, 2); // môžeme aj vkladať do poľa ako push()

// console.log(c)






// fill() // zmení všetky hodnoty poľa poskytnutnou hodnotou
// zmení pole na ktoré sa volá


// const number = [1, 2, 3, 4, 5];

// // number.fill(0);
// number.fill(0, 1, 4) // zmeniť na 0 od 1 indexu po 4

// console.log(number)



// využíva sa na vytvorenie poľa od 1 po M
// function fillInNumber(n){
//     return Array(n)
//           .fill(0) 
//           .map((_, index) => index +1);
// }

// console.log(fillInNumber(20));



// includes() // vracia true | false ... obsahuje pole prvok???

// const names = ['John', 'Julie', 'Simon', 'Mike', 'Frank'];


// const res = names.includes('Julie');

// console.log(res)

// if(res ){
//   console.log('yes')
// } else {
//   console.log('No')
// }




const array = [5, 42, 303];

console.log(array.includes(42))


const sentence = 'This is my sentence witch is defined as a string';

console.log(sentence.includes('my'))



















// join() //vytvorí string zreťazením všetkých prvkom v poli v jedno, určuje aj, aký určíme oddeľovač medzi prvkami


// const countries = ['India', 'USA', 'Romania'];

// const res = countries.join(', ');

// console.log('I want to visit ' + res)




//reverse() // obrátenie poľa

// const numbers = [1, 2, 3, 4, 5];

// numbers.reverse(); // zmení sa pôvodne pole pokiaľ ho nemáme do premennej

// let newArr = numbers.concat().reverse();
// let newArr = [...numbers].reverse(); // alebo namiesto .concat() sa použije spread operátor

// console.log(numbers);
// console.log(newArr);


// obratíme znaky v stringu

// let str = 'Coding is fun!';

// const res = str.split('').reverse().join('');

// console.log(res);




// push() // umožnuje pridať prvok, alebo viac prvkov na koniec poľa

// const numbers = [1, 2, 3];

// numbers.push(4, 5, 6, 7, 8, 9); // pridajú sa na koniec pola

// const total = numbers.push(4, 5, 6, 7, 8, 9); // dĺžka poľa t.j. 9 položiek

// console.log(numbers);
// console.log(total);




// pop() // odstráni posledný prvok z poľa a vráti ju

// const numbers = [1, 2, 3];

// // numbers.pop(1); // odstráni posledný prvok v poli
// const lastItem =numbers.pop(1); // vráti nám posledný pvrok z poľa

// // console.log(numbers);
// console.log(lastItem);




// unshift // pridá jednu alebo viac prvkov na začiatok poľa a vráti novú dĺžku poľa
// opak push() metódy
// const numbers = [1, 2, 3];

// // numbers.unshift(2); // pridá na začiatok nový prvok
// const firstItem = numbers.unshift(); // vráti nám dĺžku poľa

// // console.log(numbers);
// console.log(firstItem);



// shift() // odstráni prvý prvok poľa, alebo ho vráti
// opačná metóda ako je pop()

// const numbers = [1, 2, 3];

// // numbers.shift(1); // odstráni prvý prvok poľa
// const total = numbers.shift(); //vráti nám prvý prvok poľa

// // console.log(numbers);
// console.log(total);


//indexOf() // vráti prvý index prvoku, ktorý na ktorom sa nachádza     
            // -1 sa znamnená, že sa nenachádza vo vnútri pola

// const names = ['John', 'Julie', 'Simon', 'Mike', 'Frank', 'Jay'];

// const idx = names.indexOf('Jay');

// // names[idx] = 'Jay'; // vymení na miesto John dá do 0 indexu Jay

// // console.log(names.indexOf('John'))

// // console.log(names)

// console.log(idx)

// if (idx > -1) {
//     console.log('Joh is indoor array')
// } else {
//   console.log('John don´t indoor array')
// }




// lastIndexOf() // vráti posledný prvok, ktorý sa vyskytuje v poli

// const names = ['John', 'Julie', 'Simon', 'Mike', 'John', 'Frank', 'Jay', 'John'];

// const idx = names.lastIndexOf('John');

// console.log(idx)



// every() // prebehne všetky prvky v poli a vrati true iba v prípade, ak sú všetky pravdivé, ak sa najde false, automaticky sa vrati false


// const numbers = [1, 2, -1, 3, 4, 5];

// // sú všetky čísla kladné

//  console.log(numbers.every(positive));

// function positive(item){
//     return item > 0
// }


// majú prvky v objekte určitú vlastnosť? V tomto prípade name

// let persons = [
//   {
//     name: 'Florin'
//   },
//   {
//     name: 'Peter'
//   },
//   {
//     name: 'Juraj'
//   },
//   {
//     surname: 'Novak'
//   }
// ]

// const res = persons.every(item => item.name !== undefined);

// console.log(res)


// sú všetky položky v poli polia?

// let arrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


// let res = arrays.every(arr => Array.isArray(arr))

// console.log(res)



// some() // prejde celým polom a aspoň pre jeden kontretý vráti True, pre ostatné vráti False

// const numbers = [1, 2, 3, 4, 5, 6];

// // Je aspoň jeden prvok väčší ako 4

// const greater = numbers.some(item => item > 4);



// console.log(greater);


// Je aspoň jedna osoba staršia ako 18 rokov?

// let persons = [
//   {
//     name: 'Ivan',
//     age: 25
//   },
//   {
//     name: 'Jan',
//     age: 20
//   },
//   {
//     name: 'Juraj',
//     age: 17
//   },
//   {
//     name: 'Peter',
//     age: 16
//   }
// ]


// let adultPerson = persons.some(item => item.age >= 18);

// console.log(adultPerson)




// find() // prebehne celé pole a vráti prvú true hodnotu

// const names = ['John', 'Julie', 'Simon', 'Mike'];

// const findName = names.find(name => name === 'Julie');

// console.log(findName)


// chceme nájsť osobu a o nej nejaké informácie

// let persons = [
//   {
//     name: 'Ivan',
//     age: 25
//   },
//   {
//     name: 'Jan',
//     age: 20
//   },
//   {
//     name: 'Juraj',
//     age: 17
//   },
//   {
//     name: 'Peter',
//     age: 16
//   }
// ]

// let info = persons.find(name => name.name === 'Ivan');

// console.log(info)





// findIndex() // je podobná metóda ako find() s tým, že vráti jeho index

// const numbers = [1, 2, 3, 4, 5, 6];


// let findIndex = numbers.findIndex(number => number === 5);

// console.log(findIndex)


// flat() // vytvorí nové pole a zreťazí všetky zapustené polia

// const arr = [1, [2, [3, [4]]]];

// // vytvoríme jednorozmerné pole [1, 2, 3, 4] 

// const res = arr.flat(Infinity);


// console.log(res)









// STATIC METHODS



// Array.from() vytvorí nové pole z pola, alebo iteratného objektu

// string
// let str = '123456789';

// // vytvoríme pole číslel [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // let res = Array.from(str) // vznikne pole znakov 

// // let res = Array.from(str, x => Number(x));

// let res = Array.from(str, mapFn);

// function mapFn(x){
//   return Number(x)
// }


// console.log(res)


// Vymážeme všetky duplikaty z pola

// const numbers = [1, 2, 3, 3, 2, 2, 3, 4, 1, 2];

// // const res = new Set(numbers); // vznikde objekt bez duplikátov
// const res = Array.from(new Set(numbers));

// console.log(res)





// Array.isArray()

// const names = ['Jan', 'Peter', 'Juraj'];
// const str = 'Hello world';
// const number = 17;

// console.log(Array.isArray(names))
// console.log(Array.isArray(str))
// console.log(Array.isArray(number))



// Array.of()




















   // Array 
   // https://www.youtube.com/watch?v=rRgD1yVwIvE
   // https://jsfiddle.net/bradtraversy/e5rb0x0a/
   
   const companies= [ // pole objektov
        {name: "Company One", 
          category: "Finance", 
          start: 1981, 
          end: 2007
        },
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
      ];
      
      const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]; // pole čísel/stingov/

     
    
    //   console.log(companies[0]); // jedno

    //   console.log(companies.length)

    //   for(let i = 0; i < companies.length; i++) {
    //         console.log(companies[i]);
    //   }

      // forEach prejde cez kazdý prvok 

      // companies.forEach(function(company){
      //   console.log(company)
      // });






      // filter

      // pole ages vek 22 a viac


      // let canDrink = [];

      // for(let i = 0; i < ages.length; i++ ){
      //     if(ages[i] >= 21){
      //       canDrink.push(ages[i]);
      //     }
      // }

      // console.log(canDrink);

      // const canDrink = ages.filter(function(age){
      //     if(age >= 21) {
      //       return true;
      //     }
      // })

      // const canDrink = ages.filter(age => age >= 21);

      // console.log(canDrink);

      // companies.retail

      // const companiesEnd = companies.filter(function(company){
      //     if(company.end === 2007) {
      //       return true
      //     }
      // })

      // const companiesEnd = companies.filter(company => company.end === 2008); // pri tvoch parametroch by bola zatvorka (company, index) => ...

      // console.log(companiesEnd)

      // // companies 80´s - 90´s

      // const companiesEn = companies.filter(company => (company.start >= 1980 && company.end < 1990))
 
      // console.log(companiesEn)



  



    // sort - triedenie 
      // zoradenie spoločnosti od založenia

      // const sortCompanies = companies.sort(function(a, b){ // dve spoločnosti a porovnať ich
      //     if(a.start > b.start){
      //       return 1;
      //     } else {
      //       return -1;
      //     }
      // });

      // const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1:-1))

      // console.log(sortCompanies)


      // const sortAges = ages.sort((a, b) => a-b)


      // console.log( sortAges)

      // reduce 
      // spočítame cele pole dokopy 

      // let ageSum = 0;

      // for(let i = 0; i < ages.length; i++ ){
      //     ageSum += ages[i]
      // }

      // const ageSum = ages.reduce(function(total, age){
      //     return total + age;
      // }, 0);

      // const ageSum = ages.reduce((total, age)=> (total + age), 0)
      

      // console.log(ageSum)

      // get total years for all comanies

      // const totalYears = companies.reduce(function(total, company){
      //     return total + (company.end - company.start);
      // }, 0)

    //  const totalYears = companies.reduce((total, company) =>  total + (company.end - company.start), 0);
   

    //   console.log(totalYears)






































    
    // DOM Manipulation
    //https://www.youtube.com/watch?v=y17RuWkWdn8

    // Adding elements - append | appendChild

    // 1. a) append() - pridáva string, alebo reťazec stringov
    
            // const body = document.body;

            // body.append('hello'); // pridáva string, alebo viac stringov, je všestrannejší oproti appendChild
            // body.append('hello', 'Bye');

    // 1. b) dá sa pridať takiež aj elementy

            // let p = document.createElement("p");
            // document.body.append(p);


    // // 2. appendChild() - pridáva iba elementy <div, span...>

    //         const div = document.createElement('div'); // iba je vytvorený, ešte nie je na stránke, pretože sme ho nepridali;







































































/* 20 String Methods */

// var stringOne = "free CodeCamp is the best place to learn"
// var stringTwo = "frontend and backend backend Development"

// // charAt()
// console.log(stringOne.charAt(1)); //koľkí znak v poradí (zľava) od 0
// console.log(stringOne.charAt(stringOne.length -1)); //posledný

// // charCodeAt()
// console.log(stringOne.charCodeAt(0)); // koľkí v poradí utf-16 https://asecuritysite.com/coding/asc2

// // concat()
// console.log(stringOne.concat(' ',stringTwo)) // zreťazuje reťazce a vráti nový

// // endsWith()
// console.log(stringOne.endsWith('learn')); // končí na 'learn'
// console.log(stringOne.endsWith('learn', 39)); // končí na learn, počet znakov

// // fromCharCode()
// console.log(String.fromCharCode(97, 98, 99)); //abc z poriadia utf-16

// // includes()
// console.log(stringTwo.includes('ckend')); // true / false ... obsahuje?
// // console.log(`The word "${let1}" ${let2.includes(let1) ? 'is' : 'is not'} in the sentence`);

// // indexOf()
// console.log(stringTwo.indexOf('backend')); //číslo kde začína prvé vyhľadané slovo


// // lastIndexOf()
// console.log(stringTwo.lastIndexOf('backend')); //číslo kde začína posledné vyhľadané slovo

// // match()
// console.log(stringTwo.match(/end/g)); // /[A-Z]/g; nájde výsledky ktoré sa zhodujú podľa regex
//https://www.youtube.com/watch?v=rhzKDrUiJVk
// // repeat()
// console.log(stringTwo.repeat(3)) // skopiruje string 3x


// // replace()
// console.log(stringTwo.replace(/end/g, 'END')) // najde end a nahradí ho za END

// // search()
// console.log(stringTwo.search('end')) // číslo, o koľko znakov z ľava sa nachádza end

// // slice()
// console.log(stringTwo.slice(4, 10)); //vytrhne text medzi 4 a 10 znakom, ak je jendo čislo tak smerom do prava
// // expected output: "tend a"

// // split()
// console.log(stringOne.split(' ')); // vytvorí mi zo stringu pole, kde kazde slovo jedna hodnota

// // startsWith()
// console.log(stringOne.startsWith('free')); //začína na '?', číslo od ktorého znaku, searchString musí sedieť

// // substring()
// console.log(stringOne.substring(2, 4)) //zobrazí znaky medzi; Pri 1 čísle od znaku po koniec

// // toLowerCase()
// console.log(stringOne.toLowerCase()) //male písmena

// // toUpperCase()
// console.log(stringOne.toUpperCase()) //veľké písmená

// // trim()
// var stringThree = "     Subscribe now!      ";
// console.log(stringThree.trim()) //Vypíše celý string































/** ARRAY */

// JS Nuggets: 10 Common Array Methods
// http://www.korenlc.com/common-javascript-array-methods/

// Array.push()

// var arr = ["a", "b", "c"];

// arr.push("d", 's');  // pridá element, alebo viac elementov na koniec poľa 
// console.log(arr); 

// // Array.pop()
// console.log(arr.pop()); // odstráni posledný prvok z poľa
// console.log(arr);       // vypíše bez odstaneného 

// //Array.concat()

// var arr2 = ["g", "q"];

// console.log(arr.concat(arr2)); // spojenie dvoch alebo viacerých polí
// console.log(arr2);

// console.log(arr.join("!"));

// console.log(arr.reverse());
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift("p"));
// console.log(arr);

// console.log(arr.slice(1,3));

// arr.push("i");
// arr.push("f");
// arr.sort(arr);
// console.log(arr);

// console.log(arr.splice(2, 2, "JS Nuggets"));
// console.log(arr);


