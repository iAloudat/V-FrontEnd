// Password Validation

$(function () {
  let $password = $(".form-control[type='password']");
  let $passwordAlert = $(".password-alert");
  let $requirements = $(".requirements");
  let leng, bigLetter, num, specialChar;
  let $leng = $(".leng");
  let $bigLetter = $(".big-letter");
  let $num = $(".num");
  let $specialChar = $(".special-char");
  let specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
  let numbers = "0123456789";

  $requirements.addClass("wrong");
  $password.on("focus", function () {
    $passwordAlert.show();
  });

  $password.on("input blur", function (e) {
    let el = $(this);
    let val = el.val();
    $passwordAlert.show();

    if (val.length < 10) {
      leng = false;
    } else if (val.length > 9) {
      leng = true;
    }

    if (val.toLowerCase() == val) {
      bigLetter = false;
    } else {
      bigLetter = true;
    }

    num = false;
    for (let i = 0; i < val.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (val[i] == numbers[j]) {
          num = true;
        }
      }
    }

    specialChar = false;
    for (let i = 0; i < val.length; i++) {
      for (let j = 0; j < specialChars.length; j++) {
        if (val[i] == specialChars[j]) {
          specialChar = true;
        }
      }
    }

    console.log(leng, bigLetter, num, specialChar);

    if (leng == true && bigLetter == true && num == true && specialChar == true) {
      $(this).addClass("valid").removeClass("invalid");
      $requirements.removeClass("wrong").addClass("good");
      $passwordAlert.removeClass("alert-warning").addClass("alert-success");
    } else {
      $(this).addClass("invalid").removeClass("valid");
      $passwordAlert.removeClass("alert-success").addClass("alert-warning");

      if (leng == false) {
        $leng.addClass("wrong").removeClass("good");
      } else {
        $leng.addClass("good").removeClass("wrong");
      }

      if (bigLetter == false) {
        $bigLetter.addClass("wrong").removeClass("good");
      } else {
        $bigLetter.addClass("good").removeClass("wrong");
      }

      if (num == false) {
        $num.addClass("wrong").removeClass("good");
      } else {
        $num.addClass("good").removeClass("wrong");
      }

      if (specialChar == false) {
        $specialChar.addClass("wrong").removeClass("good");
      } else {
        $specialChar.addClass("good").removeClass("wrong");
      }
    }

    if (e.type == "blur") {
      $passwordAlert.hide();
    }
  });
});
