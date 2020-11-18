//bai1: tổng 2 sô
function tong2so()
{
    var a = parseInt(prompt("Nhập số a"));
    var b = parseInt(prompt("Nhập số b"));
    var tong = a + b;
    document.write("Tổng hai số " + a + " + " + b + " là " + tong);
}
     tong2so();

// nhập 2 số, in ra kết quả tất cả phép tính toán học
function pheptinh()
{
    var a = parseInt(prompt("Nhập số a"));
    var b = parseInt(prompt("Nhập số b"));
    var tong = a + b;
    var hieu = a - b;
    var tich = a * b;
    var thuong = a / b;
    document.write ("Tổng hai số " + a + " + " + b + " là " + tong +"<br>" );
    document.write ("Hiệu hai số " + a + " - " + b + " là " + hieu +"<br>" );
    document.write ("Tích hai số " + a + " * " + b + " là " + tich +"<br>");
    document.write ("Thương hai số " + a + " / " + b + " là " + thuong);
}    pheptinh();

 // chu vi hình chữ nhật
 
function chuvi()
{
    var a = parseInt(prompt("chiều dài"));
    var b = parseInt(prompt("chiều rộng"));
    var chuvi = (a + b)*2;
    document.write ("Chu vi hình chữ nhật là " + chuvi  );   
    
}    chuvi();

 