function ValidationNhanVien() {
  //  ----------Valid tài khoản---------------

  document.getElementById("tknv").onblur = function () {
    document.getElementById("tbTKNV").innerHTML = "Vui lòng không để trống";
    if (document.getElementById("tknv").value !== "") {
      document.getElementById("tbTKNV").innerHTML = " ";
    }
    if (document.getElementById("tknv").value.length > 6) {
      document.getElementById("tbTKNV").innerHTML =
        " Tài khoản tối đa 4 - 6 ký số";
    }
  };
  document.getElementById("tknv").onfocus = function () {
    document.getElementById("tbTKNV").innerHTML = " ";
  };
  // -------------------------------------------------

  // Valid tên nhân viên--------------------
  document.getElementById("name").onblur = function () {
    if (document.getElementById("name").value !== "") {
      document.getElementById("tbTen").innerHTML = " ";
    }
    if (document.getElementById("name").value == "") {
      document.getElementById("tbTen").innerHTML = "Vui lòng không để trống";
    }
  };
  document.getElementById("name").onfocus = function () {
    document.getElementById("tbTen").innerHTML = " ";
  };
  document.getElementById("name").onchange = function () {
    var regex =
      /^[a-z A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
    if (regex.test(document.getElementById("name").value)) {
      document.getElementById("tbTen").innerHTML = " ";
      return true;
    }
    document.getElementById("tbTen").innerHTML = "Tên nhân viên phải là chữ ";
    return false;
  };
  // ---------------------------------------------------

  // ---------valid email-----------------------
  document.getElementById("email").onblur = function () {
    if (document.getElementById("email").value == "") {
      document.getElementById("tbEmail").innerHTML = "Vui lòng không bỏ trống ";
    }
  };
  document.getElementById("email").onfocus = function () {
    document.getElementById("tbEmail").innerHTML = " ";
  };

  document.getElementById("email").onchange = function () {
    var regexMail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regexMail.test(document.getElementById("email").value)) {
      document.getElementById("tbEmail").innerHTML = " ";
      return true;
    }
    document.getElementById("tbEmail").innerHTML = "Email không đúng định dạng";
    return false;
  };
  // ----------------------------------------------------------------------

  // --------Valid passsword--------------
  document.getElementById("password").onblur = function () {
    if (document.getElementById("password").value.trim() == "") {
      document.getElementById("tbMatKhau").innerHTML =
        "Vui lòng không để trống";
    }
    if (document.getElementById("password").value === "") {
      document.getElementById("tbMatKhau").innerHTML =
        "Vui lòng không để trống";
    }
  };

  document.getElementById("password").onfocus = function () {
    document.getElementById("tbMatKhau").innerHTML = " ";
  };

  document.getElementById("password").onchange = function () {
    var regexPass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
    if (regexPass.test(document.getElementById("password").value)) {
      document.getElementById("tbEmail").innerHTML = " ";
      return true;
    }
    document.getElementById("tbMatKhau").innerHTML =
      "Mật khẩu dài tối thiểu 6 kí tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    return false;
  };
  // -----------------------------------------------------------------------------

  // ------------Valid ngày làm--------------

  document.getElementById("date").onblur = function () {
    if (document.getElementById("date").value.trim() == "") {
      document.getElementById("tbNgay").innerHTML = "Vui lòng không để trống";
    }
    if (document.getElementById("date").value === "") {
      document.getElementById("tbNgay").innerHTML = "Vui lòng không để trống";
    }
  };

  document.getElementById("date").onfocus = function () {
    document.getElementById("tbNgay").innerHTML = " ";
  };

  document.getElementById("date").onchange = function () {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    if (date_regex.test(document.getElementById("date").value)) {
      document.getElementById("tbNgay").innerHTML = " ";
      return true;
    }
    document.getElementById("tbNgay").innerHTML = "Định dạng mm/dd/yyyy";
    return false;
  };
  // -------------------------------------------------------------------

  // -------Valid lương cơ bản-------------
  document.getElementById("luongCB").onblur = function () {
    if (document.getElementById("luongCB").value !== "") {
      document.getElementById("tbLuongCB").innerHTML = " ";
    }

    // if (document.getElementById("luongCB").value.trim() == "") {
    //   document.getElementById("tbLuongCB").innerHTML =
    //     "Vui lòng không để trống";
    // }
    if (
      Number(document.getElementById("luongCB").value) < 1000000 ||
      Number(document.getElementById("luongCB").value) > 20000000
    ) {
      document.getElementById("tbLuongCB").innerHTML =
        "Lương cơ bản trong khoảng 1.000.000VNĐ -20.0000.000VNĐ";
    }
    if (Number(document.getElementById("luongCB").value) == "") {
      document.getElementById("tbLuongCB").innerHTML =
        "Vui lòng không để trống";
    }
  };

  document.getElementById("luongCB").onfocus = function () {
    document.getElementById("tbLuongCB").innerHTML = " ";
  };
  // -----------------------------------

  // ----------Valid chức vụ-----------------------------------------

  document.getElementById("chucvu").onblur = function () {
    if (document.getElementById("chucvu").value == "Chọn chức vụ") {
      document.getElementById("tbChucVu").innerHTML = "Vui lòng chọn chức vụ";
    }
  };
  document.getElementById("chucvu").onfocus = function () {
    document.getElementById("tbChucVu").innerHTML = "";
  };
  document.getElementById("chucvu").onchange = function () {
    if (document.getElementById("chucvu").value == "Chọn chức vụ") {
      document.getElementById("tbChucVu").innerHTML = "Vui lòng chọn chức vụ";
    } else {
      document.getElementById("tbChucVu").innerHTML = "";
    }
  };

  // ----------------------------------------------------------------

  // -----------valid số giờ làm------------
  document.getElementById("gioLam").onblur = function () {
    if (document.getElementById("gioLam").value !== "") {
      document.getElementById("tbGiolam").innerHTML = " ";
      document.getElementById("btnThemNV").disabled = false;
    }
    if (
      Number(document.getElementById("gioLam").value) < 80 ||
      Number(document.getElementById("gioLam").value) > 200
    ) {
      document.getElementById("tbGiolam").innerHTML =
        "Giờ làm trong khoảng 80h-200h";
    }
    if (Number(document.getElementById("gioLam").value) == "") {
      document.getElementById("tbGiolam").innerHTML = "Vui lòng không để trống";
    }
  };

  document.getElementById("gioLam").onfocus = function () {
    document.getElementById("tbGiolam").innerHTML = " ";
  };

  if (
    document.getElementById("tknv").value == "" &&
    document.getElementById("name").value == "" &&
    document.getElementById("email").value == "" &&
    document.getElementById("password").value == "" &&
    document.getElementById("date").value == "" &&
    document.getElementById("luongCB").value == "" &&
    document.getElementById("chucvu").value == "Chọn chức vụ" &&
    document.getElementById("gioLam").value == ""
  ) {
    document.getElementById("btnThemNV").disabled = true;
  }
}
ValidationNhanVien();
