// OOP - Objekovo orientované programovanie

// rozdiel medzi Class a Object
// https://www.youtube.com/watch?v=5AWRivBk0Gw
// CLASS - bude plánom, definuje rôzne metódy, rôzne vlastnosti v naších objektoch, avšak neposkytujeme 
// classom žiadne údaje alebo informácie, je to len plán, ako bude náš objekt vyzerať  

// OBJECT - inštančná verzia classu, v podstate je to špecifická verzia classu. class má vyplnené všetky 
// dodatočné informácie ako sú rôzne hodnoty pre vlastnosti a čo všetky metódy vrátia. Je to veľmi podobné 
// ako DOM a plán. Bude rovnaký ako class plán definuje ako chcme aby náš DOM vo všeobecnosti vyzeral.
// Povie nám kde idú steny, kde sú rôzne miestnosti, ale plán nie, ten nám povie akú farbu bude mať dom, 
// alebo aký nábytok bude v tomto dome, samotný objekt alebo dom v tomto prípade aká presná farba bude,
// aký bude nabytok, ale nepovie nám plán ktorý je v našom prípade class. 

// Potom mame new key word - je spôsob akým v skutočnosti vezmeme class a zmeníme ju na object, na to použíeme 
// konštruktor vo vnútri classu 

// class House {   // vytvorenie triedy/plánu, na vytvaranie objektov domu
//     constructor(color) { // v classe musí byť konštruktor, vezme si všetky parametre, ktoré chceme vložiť do nášho domu, keď vytvárame novú inštanciu alebo nový objekt tohto domu. Pridáme farmu, pretože každý dom, ktorý vytvoríme bude mať farbu
//         this.color = color; // nastavíme túto farbu ktorá sa bude rovnať farbe. this.color uloží našu farbu do samotného objektu nášho domu, ktorý teraz vytvárame  
//     }
//     getFurniture() { // funkcia ktorá nám dá nabytok, funkcia je zdieľaná medzi všetkými inštanciami alebo roznymi triedami nasho domu
//         return 'sofa'
//     }
// }

// const houseObject = new House('red') // do premennej uložíme objekt domu, čo predstavuje skutočný objekt s inštanciou, ktorú nastavíme na new House. kľučové slovo new používame, pretože ho vhladame pred názov classu t.j. new názov classu. V našom prípade to zavolá konštruktor so všetkým čo zadame do zatvoriek ('red) nastaví farbu nášho domu na červenú 
// const houseObject2 = new House('blue') // vytvoríme ďalší objekt 

// console.log(houseObject.color)
// console.log(houseObject.getFurniture())

// console.log(houseObject2.color)
// console.log(houseObject2.getFurniture())


























// https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7
// Všetko v JS je objekt 
// Objekty majú vlastnosti a metódy 
// Niekoré veci ako je null, string sú primitívne typy, nie sú objektami

// let names = 'Mike'; // primitívny typ

// console.log(names)

// let names2 = new String('Mike') // urobíme zo strigu Mike objekt, ktorý bude mať vlastnmosti a metódy 

// console.log(names2) // tieto vlastnosti a metódy mu boli automatický príslušné pridelené. Môže si však vytvoriť aj vlastné 


// Object literal 

// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){ // keď je funkcia v objekte (metóda) nie je potrebné písať function
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userTwo = {
//     email: 'yoshi@ninjas.com',
//     name: 'Yoshi',
//     login(){ // keď je funkcia v objekte (metóda) nie je potrebné písať function
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userTree = {
//     email: 'yoshi@ninjas.com',
//     name: 'Yoshi',
//     login(){ // keď je funkcia v objekte (metóda) nie je potrebné písať function
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userOne.login();
// userOne.logout(); // <- prístup je cez bodkovú notáciuu


// Updating properties

// userOne.name // <- prístup je cez bodkovú notáciuu
// userOne["email"]; // <- prístup môže byť aj cez hranaté zátvorky
// // zmena mena 
// userOne.name = 'mario';
// userOne['name'] = 'mario';

// let prop = 'name'; // môžeme aj pomocou premennej pristúpiť k vlastnosti
// userOne[prop]; 

// userOne.age = 25; // age neexistuje, ale vytvoríme ho
// userOne.logInfo = function(){} // tak isto vieme vytvoriť aj metódu


// classes
// classes v JS sú tu iste ako prototype model
// class v JS umožnuje vytvoriť viac objektov rovnakého typu


// var userFour = new User()


// konštruktor

class User {
    constructor(email, name){ // konstruktor je funkcia, ktorá sa spusti, keď budeme chciet vytvorit nový objekt
        this.email = email;
        this.name =  name; // vlastnosti
        this.score = 0; // inštancia objektu je ulozena v this

    } // metódy dávame mimo konštruktora
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now' , this.score );
        return this;
    }
}

class Admin extends User {
    deleteUsers(user){
        users = users.filter( u => { return u.email != user.email})
    }
}

let userOne = new User('yoshi@ninjas.com', 'Yoshi');
let userTwo = new User('rai@ninjas.com', 'Rai');

console.log(userOne, userTwo)

// userOne.login();
// userTwo.logout();

// vytvorenie nového prazdného objektu
// vezmeme tento objekt a nastavime hodnotu vo vnútri this class


// method chaining

userOne.login().updateScore().updateScore().logout(); // na reťazenie musím pridať do funkcie return this



// Class Inheritance
// Administratívne rozhranie ma o niekoľko metód viac ako uživateľské ako pr. vymazanie použivateľa
// najhodnejší sposob je vytvoriť nový class pre admina a vlastnosti použivatela z treidy User zdediť
let admin = new Admin('admin@ninjas.com', 'admin')

let users = [userOne, userTwo];



admin.deleteUsers(userTwo)

console.log(users)

