const mobileMenuBtn = document.querySelector(".mobileNavBtn")
const mobileMenuDiv =  document.querySelector(".mobileNav")
const middelBar = document.querySelector(".middleLineBar")
const topBar = document.getElementById("topLineBar")
const bottomBar = document.getElementById("bottomLineBar")

    mobileMenuBtn.addEventListener("click",function(){
        if(mobileMenuDiv.style.display == "none"){
            mobileMenuDiv.style.display = "flex"
            middelBar.style.display = "none"
            topBar.style.transform = "rotate(45deg) translate(5px, 3px)"
            bottomBar.style.transform = "rotate(-45deg) "
        }
        else {
            mobileMenuDiv.style.display = "none"
            middelBar.style.display = "block"
            topBar.style.transform = "rotate(0deg)"
            bottomBar.style.transform = " rotate(0deg)"

        }
    })
