
// massiv.foreach((massivniHarElementi) => {
//     console.log(massivniHarElementi)
// })

// massiv.map((massivniHarElementi) => {
//     console.log(massivniHarElementi)
// })

// for(let i = 0; i < daryoYangiliklari.length; i++){
//     console.log(daryoYangiliklari[i])
// }

// let sanoq = 0
// daryoYangiliklari.forEach((yangilik) => {
//     sanoq = sanoq + 1
//     console.log(sanoq + " " + yangilik.categories + " " + yangilik.date)
// })


// FAQAT CATEGORIYASI MAHHALIY BO"LGANLARI
// daryoYangiliklari.map((yangilik) => {
//     if(yangilik.categories === "Mahalliy"){
//         console.log(yangilik.title)
//     }
// })

// KATEGORIYASI MAHALLIY BO'LGANLARI
// daryoYangiliklari.forEach(yangilik => {
//     if(yangilik.categories.includes("Mahalliy")){
//         console.log(yangilik.categories)
//     }
// })

// movies.forEach(item => {
//     console.log(item)
// })

// function barchaYangilik(){

//     daryoYangiliklari.forEach(yangilik => {
//         console.log(yangilik.title)
//     })

// }



// 1. Barcha kinolar ro'yxatini chiqarib bering
function barchaKinolar(){
    movies.map(movie => {
        console.log(movie.name)
    })
}

// function kattaBulganlari() {
//     movies.forEach(yangilik => {
//         if(yangilik.view_count > 500){
//             console.log(yangilik.name)
//         }
//     })
// }

// function kattaBulganlari() {
//     let filterNews = movies.filter(yangilik => {
//         return yangilik.view_count > 500
//     })
//     console.log(filterNews)
// }


let faqatBeshYuzdanKattalari = movies.filter(yangilik => {
    return yangilik.view_count > 500
})

let saralanganKinolar = movies.filter(yangilik => {
    return yangilik.view_count > 300 && yangilik.view_count < 500
})




// if(yangilik.view_count > 500){
// }