document.getElementById("user-genarate-button").addEventListener("click",function(){



fetch('https://randomuser.me/api/?results=5000')
        .then(response => response.json())
        .then(data => {
            const myData = data.results;
            //console.log(myData);

            for (let i = 0; i < myData.length; i++) {
                const userInfo = myData[i];

               
                const name = `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`;
                const phone = `${userInfo.phone}`;
                const email = `${userInfo.email}`;
                const gender = `${userInfo.gender}`;
                const age = `${userInfo.registered.age}`;
                const pic = `${userInfo.picture.large}`;
                const location = `${userInfo.location.city}`;
                
                allInfo(name,phone,email,gender,age,pic,location)
                
            }


            function allInfo(name,phone,email,gender,age,pic,location){
                document.getElementById("user-name").innerHTML = name;
                document.getElementById("user-phone").innerHTML = phone;
                document.getElementById("user-email").innerHTML = email;
                document.getElementById("user-gender").innerHTML = gender;
                document.getElementById("user-age").innerHTML = age;
                document.getElementById("user-location").innerHTML = location;
                document.getElementById("user-img").src = pic;

               const userPic = document.querySelector(".img-box img");
               userPic.href = `"${pic}"`;
                
            }

            
            
           
         
            
        });

    })