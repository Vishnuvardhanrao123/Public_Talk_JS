
    // const email = document.getElementById("emai");
    // const password = document.getElementById("password");
    const loginButton = document.querySelector(".log_btn");
    const guestLoginLink = document.querySelector(".forget-password a");

    
    const postGuestUrl = "http://localhost:3000/guest";

    loginButton.addEventListener("click",async(e)=>{
        e.preventDefault();
        const email= document.getElementById("emai");
        const password = document.getElementById("password");
        const result=await fetch("http://localhost:3000/users");
        const data =await result.json();
        console.log(data);
        data.forEach((user) => {
            // console.log(user.Email)
            // console.log(email.value)
            // console.log(user.password)
            // console.log(password.value)
          if(user.Email == email.value && user.password == password.value){
             window.location.href = "http://127.0.0.1:5500/home.html";
             return
          }
          else if (user.Email == null && user.password == null) {
            alert("Please enter both email and password.");
            return
          } 
          else {
            alert("Invalid credentials, please try again.");
          }
    })
    })

    

    async function handleGuestLogin() {
        const guestDetails = { email: "guest@gmail.com", password: "Guest@123" };
        console.log("Attempting guest login:", guestDetails); // Debug log

        try {
            const response = await fetch(postGuestUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(guestDetails),
            });

            if (response.ok) {
                // alert("Logged in as guest.");
                window.location.href = "http://127.0.0.1:5500/home.html";
                
            } else {
                const error = await response.json();
                alert(error.message || "Guest login failed.");
                
            }
        } catch (error) {
            console.error("Guest login error:", error);
            alert(`Error: ${error.message}`);
        }
    }

    guestLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        handleGuestLogin();
    });


    
   
    
    
    
    
    
    
    
    
    
    // const emailInput = document.getElementById("emai");
    // const passwordInput = document.getElementById("password");
    // const loginButton = document.querySelector(".log_btn");
    // const guestLoginLink = document.querySelector(".forget-password a");

    // const fetchUsersUrl = "http://localhost:3000/users";
    // const postGuestUrl = "http://localhost:3000/guest";

    // async function fetchUserDetails() {
    //     try {
    //         const response = await fetch(fetchUsersUrl);
    //         if (!response.ok) throw new Error("Failed to fetch users.");
    //         return await response.json();
    //     } catch (error) {
    //         console.error("Error fetching users:", error);
    //         alert(`Error: ${error.message}`);
    //         return null;
    //     }
    // }

    // async function handleLogin(email, password) {
    //     const users = await fetchUserDetails();
    //     if (!users) return;

    //     const matchingUser = users.find(
    //         (user) => user.email === email && user.password === password
    //     );

    //     if (matchingUser) {
    //         window.location.href = "http://127.0.0.1:5500/home.html";
    //     } else {
    //         alert("Invalid credentials, please try again.");
    //     }
    // }

    // loginButton.addEventListener("click", () => {
    //     const email = emailInput.value.trim();
    //     const password = passwordInput.value.trim();
    //     if (!email || !password) {
    //         alert("Please enter both email and password.");
    //         return;
    //     }
    //     handleLogin(email, password);
    // });

    // async function handleGuestLogin() {
    //     const guestDetails = { email: "guest@gmail.com", password: "Guest@123" };
    //     try {
    //         const response = await fetch(postGuestUrl, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(guestDetails),
    //         });
    //         if (response.ok) {
    //             alert("Logged in as guest.");
    //             window.location.href="http://127.0.0.1:5500/home.html"
    //         } else {
    //             const error = await response.json();
    //             alert(error.message || "Guest login failed.");
    //         }
    //     } catch (error) {
    //         console.error("Guest login error:", error);
    //         alert(`Error: ${error.message}`);
    //     }
    // }

    // guestLoginLink.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     handleGuestLogin();
    // });

