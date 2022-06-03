function myFunction() {
            
    
    const div1 = document.createElement("div");
    div1.classList.add("card");
  
    const div2 = document.createElement("div");
    div2.classList.add("containerA");


    <div id = "foo">
        <div id = "bar"><img src="./images/Bali.jpg" id="img">Bali</div>
    </div>

    /*
    const img = document.createElement("img");
    img.src = "./images/Bali.jpg";*/
    

    div1.appendChild(img);
    div1.appendChild(div2);
    
    const text = document.createTextNode("This is a paragraph.");
    
    let collection = document.getElementById("t").value;
    console.log(collection );
    let text2 = document.createTextNode(collection);
    div2.appendChild(text);
    div2.appendChild(text2);
    
    
    
    document.getElementById("test").appendChild(div1);
    
    }

    
