// AJAX = Asynchronný Javascript a XML
// https://www.youtube.com/watch?v=wdvruTuWvW8
/* AJAX je použitie objektu XML http request pre komunikáciu so servermi, ktorá v podstate odosiela
 alebo prijíma informácie v rôzných formátoch pre odosielanie informácie, zahrňujú JSON, XML, HTML, alebo
 len obyčajné staré textové súbory. Aktuálne je XML pre AJAX trošku zastaraný, preto sa väčšinou používa JSON.
 AJAX nie je programovací jazyk nejde ho nainštalovať, nie je to nič hmatateľné.
 AJAX sa považuje za techniku pri vývoji webu, pretože je AJAX tak výkonný, pretože je svojou povahou
 asynchonný a dokaže komunikovať so serverom, vymienať si údaje a aktualizovať stránku bez toho, aby 
 bola refreshnuta 

 PR.:
 Webová stránka so zoznamom filmov. Je tam tlačidlo (+) ako načítať ďalšie, čo sa klasifikuje ako udaloť
 vyskytujúca objekt xmlhttprequest sa vytvori za pomoci JS a potom objekt xmlhttprequest odošle požiadavku
 na webový server a potom server spravuje požiadavku a vráti (response) odpoveď späť na webovú stránku, 
 keď sa odpoveď vrátni na webovú stránku odpoveď sa prečíta pomocou JS a vykoná sa náležitá odpoveď a 
 obsah bude aktualizovaný pomocou JS a na webe sa budú zobrazovať ďalšie filmy 


 TYPE: XHR = XML HTTP REQUEST


    */

 // // 2. Async vs. Sync
// //Webova stránka, ktorá sa spolieha na databázu, API alebo službu tretej strany, ktorých získanie môže trošku trvať, pravdepodobne používa asynchornný JS  
// // https://www.youtube.com/watch?v=wYRw8f-wrco&list=PLRD1Niz0lz1sdjsiBsYN6nT1aJQTWvF-a&index=2

// // Synchrónný JS

// function actionOne(){
//     console.log('I am first action')
// }

// function actionTwo(){
//     console.log('I am second action')
// }

// function actionTree(){
//     console.log('I am third action')
// }

// actionOne();
// actionTwo();
// actionTree();

// // v konzole sa zobrazia v poradí, v akom sú zapísane, jeden po druhom, pretože JS beži z hora na dol


// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     let count = 0;

//     for(let i = 0; i < 1000000000; i++){
//         count++
//     }

//     console.log(count);

//     const text = document.createElement('h1');
//     text.innerHTML = 'This has nothing to do with the count';
//     document.body.appendChild(text);

// })

// // text sa zobrazí až po načítaní predchadzajúceho cyklu napočitania do 1mld.
// // zobrazí sa po načítaní cyklu, pretože JS je jednovláknový, (viď obr. jednovlaknový) v jednom vlákne môže staž iba jedna vec a všetko ostatné je zablokované, dokým sa predchadzajúc operácia nedokončí  


// // Asynchrónny kód 
// //využíva sa na načítanie z externého zroja, môže isť o načítanie súboru zo siete, získavanie údajov z databázy, alebo prístup k videostreamu z webovej kamery atď.
// // niekedy to však môže byť problematické, pokusíme sa načítať externý obrázok aby sme ho použili v našom súbore
// // keď načitáme obrazok zo servera je nepravdepodobné, že sa vráti okamžite, pretože môže trvať, kým sa k nám dostane, preto sa spustí druhý riadok, ktorý spôsobí error, pretože odpoveĎ ešte nie je k dispozícií, t.j. nie je žiadný obr. k dispozícií aby sa s nim mohlo pracovať  
// // viď obr. error

// let response = fetch('ExternalImage.png') // fetch is asynchronomus

// let image = response.data()








// 3. Callback ... asynchrónne spätné volania
// existujú dva typy v asynchrónnom kode: 1. spätné volania (callback) [staršie] a 2. príšľuby (promises) [novšie]
// aj ked je callback starší typ, je dôležité ho poznať 
// asynchrónne spätné volania sú funkcie, sú špecifikované ako argumenty pri volaní inej funkcie, ktorá začne pracovať vykonávaním kódu na pozadí, až keď sa kód na pozadí dokončí, spätné volanie sa  zavolá 

// const button = document.querySelector('button');

// // už pri používaní addEventListener sme sa mohli stretnúť s asynchrónným kódom
// button.addEventListener('click', () => {
//     console.log('You clicked me!')
// })


// // Táto časť sa považuje za asynchróne spätné volanie
// // keď nastane udalosť 'click', funkcia si vypočuje druhý parameter 
// // funkcia sa nevykoná okamžite, ale až keď je zavolaná späť


// //                             () => { <- fukcia spätného volania (argument)
// //     console.log('You clicked me!')
// // })



// //ekvlivalent
// const alertMe = () => {
//     console.log('You clicked me!')
// };

// button.addEventListener('click', alertMe)


// funkcia zobraziť obrázok
// function showImage(url, type, callback){
//    const xhr = new XMLHttpRequest()
//    xhr.open('GET', url)
//    xhr.responseType = type

//    xhr.onload = function() {
//        callback(xhr.response)
//    }
//    xhr.send()
// }

// // funkcia vytvoriť obrazok
// function createImage(blob) {
//    const objectURL = URL.createObjectURL(blob)
//    const imageElement = document.createElement('img')
//    imageElement.src = objectURL
//    document.body.appendChild(imageElement)
// }

// showImage('apple.jpg', 'blob', createImage)















































































// Funkcie



// callback function




// https://www.youtube.com/watch?v=cNjIUSDnb9k
// Callback funckia je funkcia, ktorá sa prenesie do inej funkcie a potom sa volá v tzv. funkcia klobuka na dokoncienie nejake rutiny alebo akcie 


// const button = document.querySelector('button')



// function toggle(){
//    button.classList.toggle('altColor')
// }



// toggle()


// button.addEventListener('click', toggle);

// button.addEventListener('click', function (){
//    button.classList.toggle('altColor')
// });


// button.addEventListener('click', () => {
//    button.classList.toggle('altColor')
// });


// toggle = ()=>{}
// toggle() != ()=>{}

// toggle() so zatvorkami sa zavola okamžite alebo sa nepovažuje za funkciu spätného volania



// function toggle(color){
//    button.classList.toggle(color)
// }

// button.addEventListener('click', toggle('anotherAltColor')); // <- toto už nie je funkcia spätného volania, musela by byť asynchrónna



// function firstAction(){
//    console.log('I am the first action')
// }

// function secondAction(){
//    console.log('I am the second action')
// }

// setTimeout(firstAction, 5000); // funkcia callback zavolá sa, ked sa dokonci nejaka rutina alebo akcia
// secondAction();




// function firstAction(){
//    console.log('I am the first action')
//    setTimeout(secondAction, 2000)
// }

// function secondAction(){
//    console.log('I am the second action')
// }

// setTimeout( firstAction, 5000)


// function firstAction(callback, message, anotherCallback){
//    console.log(message)
//    setTimeout(callback, 2000)
//    anotherCallback();
// }

// function secondAction(message){
//    console.log(message)
// }

// function thirdAction(){
//    console.log('I am the third action')
// }

// // setTimeout(firstAction(secondAction), 5000) // spustí sa prvá funkcia hned a druha 2 sec. po nej

// setTimeout( () => firstAction( () => secondAction('I am the second action'), 'I am the first action', thirdAction), 5000)





// ARROW FUNCTION

// rozdiel v syntaxe medzi klasickou funkciou a arrow funkciou

// function sum(a, b){ // funkcia s názvom a dvomi argumentami
//    return a + b;
// }

// let sum2 = (a, b) => a+b; // musíme vytvoriť premennú, pretože klasická funkcia, jej názov je premenná
                              // (a, b) sú v zátvorkach, pretože sú viac ako jeden argument


// function isPositive(number){ //funkcia s názvom a jedným argumentom
//    return number >= 0;
// }

// let isPositive2 = number => number >= 0; // number nie je v zátvorke, pretože je len jeden argument

// function randomNumber(){ // funkcia [náhodného čísla], bez argumentov
//    return Math.random
// }

// let randomNumber2 = () => Math.random;



// document.addEventListener('click', function(){
//    console.log('click')
// })

// document.addEventListener('click', () => console.log('click'))


// arrow function oproti klasickým preddefinuje slovičko this, používajú slovičko this inak
// 

class Person {
   constructor(name) {
      this.name = name
   }


printNameArrow() {
   setTimeout( () => {
      console.log('Arrow ' + this.name)
   }, 100)
} 



printNameFunction() {
   setTimeout(function(){
      console.log('function ' + this.name)
   }, 100)
}

}

let person = new Person('Bob')
person.printNameArrow() // napíše Bob
person.printNameFunction() // nenápiše nič

// rozdiel je vo vnúztri funkcie, klasická preddefinuje this na základe akom je funkcia volána, a nie je definovaná v globalnom meritku 
// pri => sa nepreddefinuje this, nie je preddefinovaná