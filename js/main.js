
function showPic() {
  var pic = document.querySelector('.gameimage')
  
    pic.style.display = 'block';
    pic.style.animation = 'fadeIn 5s';
  }
  

  function changeBackground() {
  var bground = document.querySelector('body') 

    bground.style.backgroundColor = 'red';
    bground.style.backgroundImage = 'url()';
    setTimeout(function changeBack() {
      var bground = document.querySelector('body')
    
      bground.style.backgroundImage = 'url(../images/cssbackground.png)';
      bground.style.backgroundColor = 'transparent';
      location.reload(true);
    }, 7000);
    
  }



function showPic2() {
  var pic = document.querySelector('.lost')
  
    pic.style.display = 'block';
    pic.style.animation = 'fadeIn 5s';
  }

  function showPic3() {
    var pic = document.querySelector('.why')
    
      pic.style.display = 'block';
    }