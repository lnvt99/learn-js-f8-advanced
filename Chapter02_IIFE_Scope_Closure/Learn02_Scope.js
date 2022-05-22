/* SCOPE 
Các loại phạm vi:
- Global: Toàn cầu
- Code block: Khối mã
- Local scope: Hàm
*/

// Global variable
var msg = 'Message!'
function logger() {console.log(msg)};
logger();

// Code block
{
    // Code
    const year = 2022;
    console.log(year);
}