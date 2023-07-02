// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
// but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious
// relationship between the input and the output.

//از این فانکشن استفاده کردم تا در صورت خارج شدن
//فوکوس از فیلد تابعی صدا زده شود تا شماره تلفن را کنترل کند ک
//اول بین 0 تا 9 باشد و دوما 11 رقم داشته باشد
contactNumber.onblur = function (e) {
  var phoneNumber = contactNumber.value;

  if (phoneNumber == "") {
    document.getElementById("numberAlert").innerHTML =
      "فیلد خالی است لطفا اعداد بین صفر تا نه را وارد کنید . حتما 11 رقم داشته باشد.";
    document.getElementById("numberAlert").style.color = "orange";
  } else if (phoneNumber >= 0 || phoneNumber <= 9) {
    if (phoneNumber.length == 11) {
      document.getElementById("numberAlert").innerHTML = "شماره تلفن درست است.";
      document.getElementById("numberAlert").style.color = "yellowgreen";
    } else {
      document.getElementById("numberAlert").innerHTML =
        "شماره تلفن باید حتما 11 رقم داشته باشد.";
      document.getElementById("numberAlert").style.color = "orange";
    }
  } else {
    document.getElementById("numberAlert").innerHTML =
      "شماره تلفن وارد شده باید بین ارقام صفر تا نه باشد و حتما 11 رقم داشته باشد .";
    document.getElementById("numberAlert").style.color = "red";
  }
};

// از این تابع استفاده کردم که اگر فوکوس از فیلد خارج شد در صورت خالی بودن فیلد نام و نام خانوادگی پیغامی مبنی بر پر کردن فیلد نشان دهد
contactName.onblur = function (e) {
  if (contactName.value == "") {
    document.getElementById("nameAlert").innerHTML =
      "لطفا نامی را در این قسمت وارد کنید .";
    document.getElementById("nameAlert").style.color = "red";
  } else {
    document.getElementById("nameAlert").innerHTML = "فیلد درست پر شده است .";
    document.getElementById("nameAlert").style.color = "yellowgreen";
  }
};

// کنترل دکمه برای خاموش بودن تا زمان پر شدن فیلد ها و صرفا برای نشان دادن یک پیغام
contactEditButton.onclick = function (e) {
  var names = [];
  var phoneNumber = contactNumber.value;
  if (phoneNumber >= 0 || phoneNumber <= 9) {
    if (phoneNumber.length == 11) {
      if (!contactName.value == "") {
        names.push(contactName.value);
        alert("مخاطب با موفقیت ویرایش شد" + "  " + "(" + names + ")");
        return true;
      }
    }
  } else {
    e.preventDefault();
  }
};
// از این تابع استفاده کرده ام تا با زدن دکمه مذکور صفحه اضافه کردن مخاطب به کل بسته شود
closeButton.onclick = function (e) {
  window.close();
};
