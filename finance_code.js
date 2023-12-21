const cuadrado1 = document.getElementById('box_cont_one');
const cuadrado2 = document.getElementById('box_cont_two');


cuadrado1.addEventListener('mouseover', () => {
  cuadrado1.style.transform = 'translateX(50px)';
  cuadrado2.style.transform = 'translateX(50px)';
});

cuadrado1.addEventListener('mouseout', () => {
  cuadrado1.style.transform = 'translateX(0)';
  cuadrado2.style.transform = 'translateX(0)';
});

cuadrado2.addEventListener('mouseover', () => {
  cuadrado1.style.transform = 'translateX(-900px)';
  cuadrado2.style.transform = 'translateX(-900px)';

});

cuadrado2.addEventListener('mouseout', () => {
  cuadrado1.style.transform = 'translateX(0)';
  cuadrado2.style.transform = 'translateX(0)';

});

// Mueve el script existente al archivo script.js
!function(){
  var e = document.createElement("script");
  e.src = "https://co-in.io/widget/pricelist.js?items=BTC%2CETH%2CLTC%2CUSDT";
  e.async = true;

  function initializeWidget() {
      var cryptoWidget = crCryptocoinPriceWidget.init({
          base: "USD,EUR,ARS,BRL",
          items: "BTC,ETH,LTC,USDT",
          backgroundColor: "#292C37",
          streaming: "1",
          rounded: "1",
          boxShadow: "1",
          striped:"1",
      });
      document.getElementById("crypto-widget-container").appendChild(cryptoWidget);
  }

  e.readyState
      ? e.onreadystatechange = function () {
          if ("loaded" != e.readyState && "complete" != e.readyState) {
              return;
          }
          e.onreadystatechange = null;
          initializeWidget();
      }
      : e.onload = function () {
          initializeWidget();
      };

  document.body.appendChild(e);
}();


