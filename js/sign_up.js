let generatedOtp=0
let newUser={}

const signup=document.getElementById("signup")


// console.log(signup)
// console.log(otpsection)

signup.addEventListener("click",async (e)=>{
    e.preventDefault();
    
    const otpsection=document.getElementById("otpSection")
    const email= document.getElementById("email").value.trim();
    const name=document.getElementById("name").value.trim();
    const phone=document.getElementById("tel").value.trim();
    const password=document.getElementById("password").value.trim();
    const Conformpassword=document.getElementById("conformpassword").value.trim();
    const result=await fetch("http://localhost:3000/users");
    const data =await result.json();
    data.forEach((user) => {
        // console.log(user.Email)
        // console.log(email.value)
        
      if(user.Email == email){
         alert("email alredy exisit")
         return;
      }
      else if (email == null ) {
        alert("Please enter  email");
        return;
      }
      else{
        alert("new Email")
      } 
    
    })
    if( password == Conformpassword) {
        newUser = { name, email, phone, password };
        console.log(newUser)
        otpsection.style.display="block"
        generatedOtp = Math.floor(Math.random()*10000);
        const otp1 = document.getElementById('otp1')
        otp1.setAttribute("value",generatedOtp)
    }  
})
// Handle OTP verification button click
document.getElementById('verifyOtpButton').addEventListener('click', async () => {
    const otp = document.getElementById('otp').value;
  
   

    if (otp == generatedOtp) {
      alert('OTP verified and user data stored succeessfully');
      window.location.href="./login.html"

      await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });
    return;
    }
    else{
    alert('Invalid OTP!'); 
    }
    
});
