 var fullName = 'Nguyen Minh Quan';
 alert(fullName);
 console.log('nguyen minh quan');
 confirm('xac nhan ban tren 18 tuoi');
 prompt('nhap ngay thang nam sinh ban');
 alert(fullName);
 confirm('dong tab')
     //toán tử với chuỗi
 var firstName = ' Phạm';
 var lastName = 'Yến';
 console.log(firstName + ' ' + lastName)
 var isSuccess = true;;
 console.log(isSuccess)

 function run(a, b) {
     a = 22
     b = 20
     var result = true
     if (a > b) {
         result = true;
         alert('nguyen minh quan')



     } else result = false
     alert('Nguyễn Minh Quân')
 }
 var isSuccess = 22 > 20;
 if (true) {
     console.log('Điều kiên sai');
 } else
     console.log('điều kiên đúng');
 //các kiểu dữ liệu
 // number
 var a = 2;
 //boolean
 var isSuccess = true;
 //string
 var fullName = 'Phạm Huỳnh Hải Yên'
 var object = {
     name: 'Quân',

     age: 20,
     adress: 'Đồng Nai',

 };
 console.log('object', object);
 //array
 var myarray = [
     'java',
     'javascript',
     'PHP',
     'ruby',

 ];
 console.log('array', myarray);
 //toan tử so sánh phần 2

 // so sanh cả giá trị và kiểu dữ liệu

 var a = 18;
 var b = 20;
 var result = 'a' || 'b' || 'c';
 var res = 'a' || 'b' || NaN;
 console.log('res', res)
 console.log('result', result);
 if (a < b) {
     console.log('a<b');
 } else {
     console.log('a>b');
 }
 // chuỗi và các thao tác trên chuỗi
 var firstName = 'Minh';
 var lastName = 'Quân';
 console.log(`tôi là ${firstName} ${lastName} `);
 // Làm việc với chuỗi
 var myString = ' Hai Yen'
 var myString1 = new String(myString);
 // length
 console.log(myString.length);
 // find index 
 console.log(myString.indexOf('Yen'))
 document.write(fullName);
 // cut string
 console.log(myString.slice(0, -3))
     // replace
 console.log(myString.replace(/Hai/g, 'yeu chi'));
 console.log(myString.toUpperCase())
 console.log(myString.toLowerCase())
     //Trim loại bỏ khoảng trắng thừa
 console.log(myString.trim().length);
 //split
 var language = 'javascript, PHP, Ruby, java';
 console.log(language.split(', '))
     // Get a character by index
     // số và các thao tác với số
     // khỏi tạo bằng cách nào
     // to string
     // type of
     // to Fixed
 var pi = 3.14
 var a = new Number(9);
 var b = a / 'avc';
 console.log(b);
 console.log(isNaN(b))
 console.log(pi.toString());
 console.log(pi.toFixed());
 console.log(pi.toFixed(1));
 var S = 54.52535346;
 console.log(S.toFixed(4));
 // javascript output 


 // mảng
 var language = [
     'English',

     'javascript',
     'PHP',
     'English',
     'English',
     'English',
     'English',
     function() {},
     123,
     null,
     NaN,
     undefined,
     undefined,

 ];



 console.log(typeof language);

 var ten = prompt('nhap ten ');
 // làm việc với mảng
 /*
 1 to string 
 2. join  
 3.pop -> remove last
 4.push-> insert last
 5.shift -remove first
 6.Unshift->insert first
 7.Splicing->remove free style
 8.concat
 9.slicing
 */
 var subject = [
     ' pttk thuat toan',
     ' cong nghe java',
     'csdl',
     'he dieu hanh',

 ];
 console.log(subject.toString());
 console.log(subject.join());
 console.log(subject.join(' - '));
 console.log(subject.pop()); //xóa element cuối mảng và trả về phà tử đã có
 console.log(subject.push('c++'));
 console.log(subject)
 console.log(subject.push('html'));
 console.log(subject)

 console.log(subject.push('css', ' mySQL'));
 console.log(subject.slice(0))
 console.log(subject)
 console.log(subject.shift());
 console.log(subject.shift());

 console.log(subject.shift());

 console.log(subject.shift());

 console.log(subject.shift());

 console.log(subject.shift());

 console.log(subject.shift());

 console.log(subject.shift());

 console.log(subject.shift());
 console.log(subject)
     // Hàm
     // chia thành 2 loại
     // hàm bulit in
     // hàm tự định nghĩa
 function hellowword() {
     alert('xin chào các bạn');

 }
 hellowword();

 function writeLog(message) {
     console.log(message)
 }

 writeLog(' Nguyễn Minh Quân');
 writeLog('xin chào các bạn');
 // argument
 function writeArgument() {
     console.log(arguments)
 }
 writeArgument('log', 'log2');
 writeArgument();
 // argument with for
 function writeArgumentWithFor() {
     for (var variable of arguments) {
         console.log(variable);
     }
 }
 // declaratation function
 function writeDeclarative() {};
 // expression function
 var writeExpression2 = function textName() {}
 setTimeout(function textName() {});
 var myobject = {
     myfunction: function() {},
     name: ' Quan',
     age: 20,
 };
 myobject[school] = 'UTC2',
     console.log(myobject);
 console.log(myobject.name);