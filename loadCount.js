const counters = document.querySelectorAll('.keyNumber');
const speed = 10000;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   window.addEventListener("scroll", function(){
       if(this.window.scrollY >= 300){
        animate();
       }
      if(this.window.scrollY >=900 && this.window.scrollY <= 6000){
          this.document.getElementById("fixedAstro").style.display="none"
      }

      else{
        this.document.getElementById("fixedAstro").style.display="block"
      }

      if(this.window.scrollY >=100){
          this.document.getElementById("navBar").style.background = "#191919"
      }
      else{
        this.document.getElementById("navBar").style.background = "transparent"
      }
   })
  
});


