let generatedOtp=0
let newUser={}

const signup=document.getElementById("signup")


// console.log(signup)
// console.log(otpsection)

signup.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
      const otpSection = document.getElementById("otpSection");
      const email = document.getElementById("email").value.trim();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("tel").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("conformpassword").value.trim();

      if (!email) {
          throw new Error("Please enter an email.");
      }

      const result = await fetch("https://glittery-delicate-bellflower.glitch.me/users");
      const data = await result.json();
      console.log(data)
      let emailExists = false;

      for (let user of data) {
            console.log(user.email);
            console.log(email);
            
          if (user.email === email) {
              emailExists = true;
              break; // Stop checking once we find a match
          }
      }

      if (emailExists) {
          throw new Error("Email already exists.");
      } else {
          alert("New Email");
      }

      if (password !== confirmPassword) {
          throw new Error("Passwords do not match.");
      }

      const newUser = { name, email, phone, password };
      console.log(newUser);

      otpSection.style.display = "block";
      const generatedOtp = Math.floor(Math.random() * 10000);
      const otp1 = document.getElementById('otp1');
      otp1.setAttribute("value", generatedOtp);

  } catch (error) {
      alert(error.message);
  }
});

// Handle OTP verification button click
document.getElementById('verifyOtpButton').addEventListener('click', async () => {
    const otp = document.getElementById('otp').value;
    const otp1 = document.getElementById('otp1').value;

    console.log(otp, otp1);

    if (otp === otp1) {
        try {
        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("tel").value.trim();
        const password = document.getElementById("password").value.trim();
        const newUser = { name, email, phone, password };
            console.log(newUser);
            const response = await fetch("https://glittery-delicate-bellflower.glitch.me/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
            });

            if (response.ok) {
                alert('OTP verified and user data stored successfully ,Click on Login Below');
                window.location.href = "https://vishnuvardhanrao123.github.io/Public_Talk_JS/Login.html"; // Navigate after successful post
            } else {
                alert('Failed to store user data!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving user data.');
        }
    } else {
        alert('Invalid OTP!');
    }
});

/////
// document.getElementById('verifyOtpButton').addEventListener('click', async () => {
//     const otp = document.getElementById('otp').value;
//     console.log(otp)
//     const otp1 = document.getElementById('otp1').value
//     console.log(otp1)

//     if (otp == otp1) {
//       alert('OTP verified and user data stored succeessfully');
//       window.location.href="./login.html"

//       await fetch("http://localhost:3000/users", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newUser)
//     });
//     return;
//     }
//     else{
//     alert('Invalid OTP!'); 
//     }
    
// });
