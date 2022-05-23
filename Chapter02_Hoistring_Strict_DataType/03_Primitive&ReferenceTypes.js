/*
    PRIMITIVE TYPE - REFERENCES TYPE
- Kiểu tham trị (value types) và kiểm tham số (reference types) trong bộ nhớ
- Đọc code từ phải sang trái
*/

// Value types: Kiểu tham trị

/*
Biến            Giá trị             Ô nhớ
a               2                   2
b               1                   1
*/
var a = 1;
var b = a;
a = 2;
// console.log(b);


/*  Reference types: Kiểu tham chiếu, trả về địa chỉ vùng nhớ
Biến            Giá trị         Địa chỉ             Ô nhớ
a1               <#001>          #001           { name: 'Mercedes'}          

Chép vùng nhớ địa chỉ của biến a cho biến b và change method name của a
Biến            Giá trị         Địa chỉ             Ô nhớ
a1               <#001>          #001           { name: 'BMW'}      
b1               <#001>
*/

let a1 = {
    name: 'Mercedes',
}
let b1 = a1;
a1.name = 'BMW';
// console.log(b1)


/*
Biến            Giá trị         Địa chỉ             Ô nhớ
a2               <#001>          #001           { name: 'Mercedes'}      
a2               <#002>          #002           { name: 'BMW', year: 2022}
*/

let a2 = {
    name: 'Mercedes',
};

a2 = {
    name: 'BMW',
    year: 2022
};

// console.log(a2)

/*
Biến            Giá trị         Địa chỉ             Ô nhớ
                 <#001>          #001           { type: 'basic', original: 'f8}      
a3               <#002>          #002           { name: 'BMW', profile: <#001>}
*/
var a3 = {
    name:'JavaScript',
    profile: {
        type:'basic',
        original: 'f8'
    }
}

// Side effect
