// Bài 1:  var data2 = [1,1,3,4,4,5,6,7,9]
// var data2 = [1, 1, 3, 4, 4, 5, 6, 7, 9];
// // a. Thêm số 8 vào cuối array data2 .
// data2.push(8);
// // b.  Thêm số 10 vào cuối array data2
// data2.push(8);
// // c. Thêm số 5 vào đầu  array data2 .\
// data2.unshift(10);

// // d. Đổi phần tử có vị trí là 5 thành số  11 .
// data2[4] = 10;
// // e. Xóa phần tử vị trí  thứ 4 và thêm 2 số 5 và 7 vào data2 .
// console.log(data2);
// data2.splice(3, 1, 2, 5, 7);
// console.log(data2);
// // Bài 2 : var  data03 = [“Cam”,”Xoài”,”Mít”,”Bưởi ”,”Quýt,”Dưa gang”]
// var data03 = ["cam", "xoài", "mít", "bưởi", "quýt", "dưa gang"];
// // a ) Copy array data03. Bằng  …
// // b )  Sửa phần tử “Dưa gang” thành “Dưa hấu”
// // c ) Thêm “mận” vào giữa data03 .
// var index = Math.floor(data03.length / 2);
// data03.splice(index, 0, "mận");
// // d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 .
// console.log(data03);
// // Bài 3 :
// const persons = [
//   { firstname: "Đào", lastname: "Văn Anh" },
//   { firstname: "Trần", lastname: "Huy" },
//   { firstname: "Lê", lastname: "Hoàng" },
// ];
// // a ) Tạo ra một array persons mới . (newPersons)n
// var newPersons = [...persons];
// newPersons.push({ firstName: "dam", lastName: "tuan" });
// // a ) Thêm mới 1 object giống kiểu trên

// // b) Đổi {firstname : "Trần", lastname: "Huy"}  thành

// // {firstname : "Nguyễn", lastname: "Hoàng"}.
// // c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPersons .
// let result = persons.map((item) => {
//   return {
//     ...persons,
//     address: "ha noi",
//   };
// });
// console.log(result);
// // Bài 4:
// var arr2 = ["4", "6", 1, 2, 3, 5, "y", "t", 5];
// // in ra tổng các số có trong array
// let tong = 0;
// arr2
//   .filter((item) => typeof item === "number")
//   .forEach((item) => {
//     tong += item;
//   });
// console.log(tong);
// Bài 5:
// let list1 = [3, 6, 7, 9, 5];
// let list2 = [3, 5, 7, 8, 6, 6, 7];
// // // viết function có đầu vào là 2 array và return tổng các thành phần
// function array(arr1, arr2) {
//   let tong = 0;
//   arr1.concat(arr2).forEach(item => {
//     tong += item;
//   });
//  return tong
// }

// let result = array(list1,list2);
// console.log(result);
// // // dùng concat và sort nối 2 mảng và sắp xếp chúng

// let noimang = list1.concat(list2).sort();

// Bài 6: var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// var data = [1,2,3,1,2,3,4,5,6,5,4,6,7,7,0]
// // // in ra các phần tử bị trùng nhau

// let element = [];
// data.forEach((item) =>{
//   if(element.includes(item)){
//     console.log(item+ 'đã tồn tai')
//   }
//   else{
//     element.push(item)
//   }
// // })
// console.log(element)
// Bài 7: cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
// let array = [1,5,7,8,9,15];
// //  in ra các số chẵn trong mảng
// let sochan =  array.filter(item => item % 2 === 0)
// console.log(sochan)
// //  in ra các số lẻ  trong mảng
// let sole = array.filter(item => item % 2 === 1)
// console.log(sole)
// // in ra các số lớn hơn hoặc bằng 5 trong mảng
// let solonhon = array.filter(item => item >= 5)
// console.log(solonhon)
// // in ra các số chia hết cho 5 trong mảng
// let chiahet = array.filter(item => item % 5 === 0)
// console.log(chiahet)
// //  Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// array.forEach((item,index) =>{
//   if(item > 5){
//     array[index] = item +1
//   }
// })
// console.log(array)
// // dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
// let coppy = array.slice(2)
// console.log(coppy)
// // .splice để xóa 1 phần tử trong mảng
//  let array = [1,5,7,8,9,15];
// // console.log(array)
// // array.splice(1,3)
// // console.log(array)
// // .push thêm 1 phần tử vào cuối mảng

// // * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]

// let tang = array.map(item =>item *2)
// console.log(tang)
// Bài 8: cho arr [1,8,5,2,7,6,9,2,6]
// let arr = [1,8,5,2,7,6,9,2,6];

// // dùng .sort để sắp xếp mảng tăng dần và giảm dần
// arr.sort();
// console.log(arr)
// Bài 9:
// var array = [1,3,7,8,9,0,10,3,2];
// // áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  .
// // áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ .
// let newArr = array.map(item => item * 2)
// // cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả .
// let array3= [1,2,3,5,1] 
// array.unshift(array3)
// // cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
// // áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn 
// let sole = array.filter(item => item % 2 ===1)
// let sochan = array.filter(item => item % 2 ===0)
// //  Thêm số 5 vào giữa array .

// let length = array.length;
// let matfloor = Math.floor(length/2);
// array.splice(matfloor,0,100);
// console.log(array)

// Bài 10: Cho let array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// let array = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// // Xóa phần tử cuối cùng và in lại array
// //  array.pop()
// //  console.log(array)
// // // Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm
// // array.unshift(12)
// // Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
// // array.splice(2,4)
// console.log(array)
// // Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array
// console.log(array.slice(2,7))
// Bài 11: Cho let array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
// let array = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
// // Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
// // Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.
// let newArr = array.filter(item => item % 2===1 && item >3)
// console.log(newArr)

// Bài 12: Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// let array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// console.log(array1)
// // Hãy in ra vị trí đẩu tiên xuất hiện số 7
// // let first = array1.indexOf(7)
// // console.log(first)
// // let last = array1.lastIndexOf(7)
// // console.log(last)
// // // Hãy in ra vị trí cuối cùng xuất hiện số 7
// // // Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
// // array1.sort();
// // // Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
// // let array2 = array1.filter(item=> item > 5)
// // console.log(array2)
// //  Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau: là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3
// let array3 = array1.filter(item => item > 5 && (item +2) % 3===0);
// console.log(array3)


// Bài  13:
// var  hoaQua = [
//   {ten:'xoài',sx:'China',sl:'100'},
//   {ten:'mít',sx:'vietnam',sl:'100'},
//   {ten:'chuối',sx:'China',sl:'150'},
//   {ten:'ổi',sx:'vietnam',sl:'100'},
//   {ten:'táo',sx:'China',sl:'150'},
// ]

// // Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam .
// let loc = hoaQua.filter(item => item.sx === 'vietnam')
// console.log(loc)
// Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 .
// let soluong = hoaQua.filter(item =>{
//  return item.sl === '150'
// })
// console.log(soluong)
// Viết function lọc sản phẩm hoa quả  theo tên  .
// function fruit(ten){
//   let locten = hoaQua.filter(item => item.ten === 'ổi')
//   return locten;
// }

// console.log(fruit('xoài'))
// Viết function lọc sản phẩm hoa quả  theo Nước .
// function locten(ten){
//   let filterHoaqua = ten.filter(item => item.sx === 'China')
//   return filterHoaqua;
// }
// console.log(locten(hoaQua))
// Bài 14: Cho let arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11']
let arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'];
// Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xếp theo thứ tự tăng dần .

let number = [];
let string = [];
arr.forEach(item =>{
  if(typeof item === 'number'){
    number.push(item)
  }
  else{
    string.push(item)
  }
})

// let sort = number.sort((a,b)=>{
//   return a-b;
// });
// let sortSting = string.sort((a,b)=>{
//   return a - b; 
// });

console.log(number)
console.log(string)
// console.log(string)
// Hãy tính tổng của các giá trị number và các string number trong arr
// Hãy sắp xếp arr chứa các phần tử số trên theo thứ tự tăng dần.
// Hãy lấy các giá trị có thuộc tính là number từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không .

// Bài 15: var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]
// hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// // kết quả: [
// {phanTu: 1, lapLai: 2},
// 	{phanTu: 2, lapLai: 2},
// 	{phanTu: 3, lapLai: 3},
// 	……
// ]
