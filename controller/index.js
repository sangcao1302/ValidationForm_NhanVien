var arrNhanVien = [];
document.getElementById("btnThemNV").onclick = function () {
  var nv = new NhanVien();
  nv.taikhoan = document.getElementById("tknv").value;
  nv.hoten = document.getElementById("name").value;
  nv.email = document.getElementById("email").value;
  nv.matkhau = document.getElementById("password").value;
  nv.ngaylam = document.getElementById("date").value;
  nv.luongcoban = document.getElementById("luongCB").value;
  nv.chucvu = document.getElementById("chucvu").value;
  nv.giolamtrongthang = document.getElementById("gioLam").value;
  nv.tongluong = tinhLuong() + "VNĐ";
  nv.loainhanvien = xepLoai();

  arrNhanVien.push(nv);
  console.log(arrNhanVien);
  table();
  clearInput();
  capNhat();
};

function tinhLuong() {
  var nv = new NhanVien();
  var tongluong = 0;
  nv.luongcoban = document.getElementById("luongCB").value;
  nv.chucvu = document.getElementById("chucvu").value;
  if (nv.chucvu == "Sếp") {
    tongluong = (tongluong + nv.luongcoban) * 3;
    return tongluong;
  } else if (nv.chucvu == "Trưởng phòng") {
    tongluong = (tongluong + nv.luongcoban) * 2;
    return tongluong;
  } else if (nv.chucvu == "Nhân viên") {
    tongluong = (tongluong + nv.luongcoban) * 1;
    return tongluong;
  }
}

function xepLoai() {
  var nv = new NhanVien();
  var xeploai = "";

  nv.giolamtrongthang = document.getElementById("gioLam").value;
  if (nv.giolamtrongthang >= 192) {
    xeploai += "Xuất xắc";
    return xeploai;
  } else if (nv.giolamtrongthang >= 176 && nv.giolamtrongthang < 192) {
    xeploai += "Giỏi";
    return xeploai;
  } else if (nv.giolamtrongthang >= 160 && nv.giolamtrongthang < 176) {
    xeploai += "Khá";
    return xeploai;
  } else if (nv.giolamtrongthang < 160) {
    xeploai += "Trung Bình";
    return xeploai;
  }
}

function table() {
  var htmlString = "";
  for (var index = 0; index < arrNhanVien.length; index++) {
    var nv = arrNhanVien[index];
    htmlString += `
            <tr>
                <td>${nv.taikhoan}</td>
                <td>${nv.hoten}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaylam}</td>
                <td>${nv.chucvu}</td>
                <td>${nv.tongluong}</td>
                <td>${nv.loainhanvien}</td>
                <td><button class="btn btn-danger mx-2"onclick="xoaNhanVien('${nv.hoten}')">Xóa</button>
                <td><button class="btn btn-primary mx-2" onclick="chinhSua('${nv.hoten}')">Chỉnh sửa</button>
                </td>
            </tr>
        `;
  }
  document.querySelector("tbody").innerHTML = htmlString;
  return htmlString; ///'<tr>.....</tr>'
}

function clearInput() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("date").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";
  document.getElementById("btnThemNV").disabled = true;
}

function chinhSua(hotenClick) {
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].hoten === hotenClick) {
      document.getElementById("tknv").value = arrNhanVien[i].taikhoan;
      document.getElementById("name").value = arrNhanVien[i].hoten;
      document.getElementById("email").value = arrNhanVien[i].email;
      document.getElementById("password").value = arrNhanVien[i].matkhau;
      document.getElementById("date").value = arrNhanVien[i].ngaylam;
      document.getElementById("luongCB").value = arrNhanVien[i].luongcoban;
      document.getElementById("chucvu").value = arrNhanVien[i].chucvu;
      document.getElementById("gioLam").value = arrNhanVien[i].giolamtrongthang;
      break;
    }
  }
}

function capNhat() {
  document.getElementById("btnCapNhat").onclick = function () {
    var nvUpdate = new NhanVien();
    nvUpdate.taikhoan = document.getElementById("tknv").value;
    nvUpdate.hoten = document.getElementById("name").value;
    nvUpdate.email = document.getElementById("email").value;
    nvUpdate.matkhau = document.getElementById("password").value;
    nvUpdate.ngaylam = document.getElementById("date").value;
    nvUpdate.luongcoban = document.getElementById("luongCB").value;
    nvUpdate.chucvu = document.getElementById("chucvu").value;
    nvUpdate.giolamtrongthang = document.getElementById("gioLam").value;
    nvUpdate.tongluong = tinhLuong() + "VNĐ";
    nvUpdate.loainhanvien = xepLoai();

    for (var i = 0; i < arrNhanVien.length; i++) {
      if (arrNhanVien[i].hoten === nvUpdate.hoten) {
        arrNhanVien[i].taikhoan = nvUpdate.taikhoan;
        arrNhanVien[i].hoten = nvUpdate.hoten;
        arrNhanVien[i].email = nvUpdate.email;
        arrNhanVien[i].matkhau = nvUpdate.matkhau;
        arrNhanVien[i].ngaylam = nvUpdate.ngaylam;
        arrNhanVien[i].luongcoban = nvUpdate.luongcoban;
        arrNhanVien[i].hoten = nvUpdate.hoten;
        arrNhanVien[i].chucvu = nvUpdate.chucvu;
        arrNhanVien[i].giolamtrongthang = nvUpdate.giolamtrongthang;
        arrNhanVien[i].tongluong = nvUpdate.tongluong;
        arrNhanVien[i].loainhanvien = nvUpdate.loainhanvien;
      }
    }

    table();
    clearInput();
  };
}

function xoaNhanVien(hotenClick) {
  var indexDel = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].hoten === hotenClick) {
      indexDel = i;
      break;
    }
  }
  arrNhanVien.splice(indexDel, 1);
  table();
}
var arrNhanVienTim = [];
function tableTim() {
  var htmlString = "";
  for (var index = 0; index < arrNhanVienTim.length; index++) {
    var nv = arrNhanVienTim[index];
    htmlString += `
            <tr>
                <td>${nv.taikhoan}</td>
                <td>${nv.hoten}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaylam}</td>
                <td>${nv.chucvu}</td>
                <td>${nv.tongluong}</td>
                <td>${nv.loainhanvien}</td>
                </td>
            </tr>
        `;
  }
  document.getElementById("tableTim").innerHTML = htmlString;
  return htmlString; ///'<tr>.....</tr>'
}
function timNhanVien() {
  document.getElementById("btnTimNV").onclick = function () {
    for (var i = 0; i < arrNhanVien.length; i++)
      if (
        document.getElementById("searchName").value ===
        arrNhanVien[i].loainhanvien
      ) {
        arrNhanVienTim.push(arrNhanVien[i]);
      }
    tableTim();
    xoaDanhSachTimKiem();
    clearInputTimkiem();
  };
}
timNhanVien();
function xoaDanhSachTimKiem() {
  arrNhanVienTim.splice(0, arrNhanVienTim.length);
}
function clearInputTimkiem() {
  document.getElementById("searchName").value = "";
}
