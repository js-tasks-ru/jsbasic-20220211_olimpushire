function toggleText() {
  // ваш код...
  let butt = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  butt.onclick = function () {
    if (text.hidden) {
      text.hidden = false;
    } else { 
      text.hidden = true;
    }; };

}
