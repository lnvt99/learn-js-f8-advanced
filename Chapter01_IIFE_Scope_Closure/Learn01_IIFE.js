/*
    IIFE - Immediately Invoked Function Expression
- Là 1 hàm xây dựng xong rồi được gọi ngay lập tức
- WEBPACK
*/

// Function Expression

;(function myFunc(msg) {
   console.log(msg);;
})('NOW')

// myFunc(): không thể gọi lại bên ngoài, chỉ gọi trong IIFE, dùng để đệ qui

// (() => {
//     console.log('NOW!')
// })()

const app = (function(){
    const cars = []
    return {
        add(car) {cars.push(car)},
        edit(index, car) {cars[index] = car},
        delete(index) {car.splice(index, 1)}
    }
})()

