/* CLOSURE
- Là 1 hàm có thể ghi nhớ nơi nó được tạo và
    truy cập được biến ở bên ngoài phạm vi của nó
- Viết code ngắn ngọn hơn
- Biểu diễn, ứng dụng tính Private trong OOP

*/

function createCounter() {
    let counter = 0;

    function increase() {
        return ++ counter;
    }

    return increase;
}

const counter1 = createCounter()

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}]: ${message}`);
    }
    return logger
}

const infoLogger = createLogger('Info');
infoLogger('Start sent email');
infoLogger('Gửi mail lỗi lần 1, thử gửi lại');
infoLogger('Gửi mail thành công cho user xxx');

