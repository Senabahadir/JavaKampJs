let sayi1 = 10
sayi1 = "Engin Demirog"
let  student = {id:1, name:"Engin"}
console.log(student);

function save(puan=10, ogrenci) {
    // console.log(ogrenci.name + " : " + puan)
}

save(undefined, student);

let students = ["Engin Demirog", "Halit Kalaycı", "Engin Toprak", "Büşra"]

// console.log(students)

let students2= [student, {id:2, name:"Halit"},"Ankara", {city:"İstanbul"}]
// console.log(students2)

//rest (GERİYE KALANLAR)
//params(c#)
//varArgs(Java)
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts)
// showProducts(10, ["Elma", "Armut", "Karpuz"])

//spread (ayrıştırmak)
let points = [1,2,3,4,50,4,60,14]
console.log(...points)  //point artık array değil. 
console.log(Math.max(...points))  //Array olarak gönderirsen çıktı -> NaN (Not a Number)
console.log(..."ABC","D",..."EFG", "H") 

//Destructuring --> elinizdeki arrayın değerlerini değişkenlerine atama yöntemi
let populations = [10000, 20000, 30000, [40000, 10000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number){
    console.log(small1)

}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])  // ["name"] -> bu şekilde de çağrılabilir.

// objenin istediğim elemanlarını değişkenlere atama yöntemi
let {id, name} = category
console.log(id)
console.log(name)

//Redux