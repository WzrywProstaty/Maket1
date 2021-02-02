let test = document.getElementById("test");
let chr_leftID = document.getElementById("chr_leftID");
let chr_rightID = document.getElementById("chr_rightID");

test.addEventListener("mouseenter", function
      ( event ) 
    {
      document.getElementById("buildings").setAttribute("style", "width: 150%");
    }, false
  );


  chr_rightID.addEventListener("mouseenter", function
      ( event ) 
    {
      document.getElementById("buildings").setAttribute("style", "width: 100%");

    }, false
  );


  chr_leftID.addEventListener("mouseenter", function
      ( event ) 
    {
      document.getElementById("buildings").setAttribute("style", "width: 100%");
    }, false
  );

