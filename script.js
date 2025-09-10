//your JS code here. If required.
  const container=document.querySelector(".container")
      const frag=document.createDocumentFragment();
      for(var i=1;i<=800;i++){
        createbox();
      }
      container.appendChild(frag)
      function createbox(){
       const square=document.createElement("div")
       square.classList.add("square")
       square.addEventListener("mouseover",addRandomColor)
       square.addEventListener("mouseleave",removecolor)
       frag.appendChild(square)
      } 
      function addRandomColor(e){
         const square=e.target
         const randomcolor="#"+Math.floor(Math.random()*255*255*255).toString(16).padStart(6,"0")
         square.style.backgroundColor=randomcolor
      }
      function removecolor(e){
       setTimeout(()=>{
        e.target.style.backgroundColor="";
        
       },1000)
      }