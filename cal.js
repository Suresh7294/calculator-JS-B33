
    const x = document.querySelector('#flex')

    function appendValue(val) {
      if (x.innerText === '0') {
          x.innerText = val;
        }
    else {
        x.innerText += val;
      }
    }

    function clearDisplay() {
      x.innerText = '0';
    }

    function calculate() {
      try {
        x.innerText = eval(x.innerText);
      } catch {
        x.innerText = 'Error';
      }
    }
  