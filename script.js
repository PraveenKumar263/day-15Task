const cnt = document.getElementById("countdown");

setTimeout(() => {
  cnt.innerHTML = "10";
  setTimeout(() => {
    cnt.innerHTML = "9";
    setTimeout(() => {
      cnt.innerHTML = "8";
      setTimeout(() => {
        cnt.innerHTML = "7";
        setTimeout(() => {
          cnt.innerHTML = "6";
          setTimeout(() => {
            cnt.innerHTML = "5";
            setTimeout(() => {
              cnt.innerHTML = "4";
              setTimeout(() => {
                cnt.innerHTML = "3";
                setTimeout(() => {
                  cnt.innerHTML = "2";
                  setTimeout(() => {
                    cnt.innerHTML = "1";
                    setTimeout(() => {
                      cnt.innerHTML = "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);