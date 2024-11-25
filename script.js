 const images = [
    "./img/paper.png" ,
    "./img/rock.png",
    "./img/scissors.png"
 ]
 // 0=paper, 1=rock, 2=scissors
 let groupElements = document.querySelectorAll('#group_section div');
 let userElements = document.querySelector(".user_elements");
 let compElements = document.querySelector(".comp_elements");
 let userScore = document.querySelector("#user_score");
 let compScore = document.querySelector("#comp_score");
 let userStatus = document.querySelector("#user_status");
 let compStatus = document.querySelector("#comp_status");


    let startBtn = document.querySelector(".custom-btn");

    startBtn.addEventListener("click", function(){
        document.querySelector("header").style.display = "none";

        document.querySelector('main').style.display = "flex";
        
    })
 


 groupElements.forEach(function(item){
    item.addEventListener('click', function(){
        
        userElements.innerHTML= `
        <img src = "./img/${item.id}.png">
        `
        // 0-2 arasinda reqem secib,img src-a img massivinden sekil elave edilir
        let randomNumber = Math.floor(Math.random()*3)
        compElements.innerHTML=`
        <img src = "${images[randomNumber]}">
        
        `
        compare()
    })

 })
 let userCurrentScore = 0;
 let compCurrentScore = 0;
 //muqayise 
 function compare () {
    let userImage = userElements.querySelector("img");
    let compImage = compElements.querySelector("img");
    console.log(userImage.src, compImage.src);
    if(userImage.src == compImage.src){
        // alert("draw")
        userStatus.innerHTML = 'Draw';
        compStatus.innerHTML = 'Draw';
        
    }else if(userImage.src.endsWith("paper.png") && compImage.src.endsWith("rock.png")){
        // alert("user won");
        userCurrentScore++;
        userStatus.innerHTML = 'Won';
        compStatus.innerHTML = 'Lose';
 

           
    }else if(userImage.src.endsWith( "rock.png") && compImage.src.endsWith("/img/paper.png")){
        // alert("comp won");
        compCurrentScore++;
        userStatus.innerHTML = 'Won';
        compStatus.innerHTML = 'Lose';
        

    }else if (userImage.src.endsWith( "/img/scissors.png") && compImage.src.endsWith("/img/rock.png")){
        // alert("comp won");
        compCurrentScore++;
        userStatus.innerHTML = 'Lose';
        compStatus.innerHTML = 'Won';

    
    }else if (userImage.src.endsWith("/img/rock.png") && compImage.src.endsWith("/img/scissors.png")){
        // alert("user won");
        userCurrentScore++;
        userStatus.innerHTML = 'Won';
        compStatus.innerHTML = 'Lose';

    
    }else if (userImage.src.endsWith("/img/paper.png") && compImage.src.endsWith("/img/scissors.png")){
        // alert("comp won");
        compCurrentScore++;
        userStatus.innerHTML = 'Lose';
        compStatus.innerHTML = 'Won';
    
    }else if (userImage.src.endsWith("/img/scissors.png") && compImage.src.endsWith("/img/paper.png")){
        // alert("user won");
        userCurrentScore++;
        userStatus.innerHTML = 'Won';
        compStatus.innerHTML = 'Lose';

    
    }


      userScore.innerHTML = `${userCurrentScore}`;
      compScore.innerHTML= `${compCurrentScore}`;

    
    
    }



   // kim udurse onun Currentscore ++, funksiya icinde bu scorlari elave edib goster.bunu da yaziriq compare funksiyasina

