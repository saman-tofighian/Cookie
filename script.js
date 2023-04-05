let _cookie = document.cookie;
    let _pop = document.querySelector(".popup");
    let _section = document.querySelector("section");

    if (_cookie.indexOf("saman") == -1) {
      document.cookie = "user:saman;expires=Wed,20 Dec 2024 10:10:10 UTC";
    } else {
      _pop.remove();
      _section.remove();
    }

    let _span = document.querySelector("span");

    window.addEventListener("click", (e) => {
      if (e.target == _pop) {
        _click();
      }
    });

    function _click() {
      _section.style.opacity = "0";
      setTimeout(_remove, 1000);
    }

    function _remove() {
      _pop.remove();
      _section.remove();
      _pop.style.opacity = "0";
    }