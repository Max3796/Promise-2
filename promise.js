const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

function getCookies(){
  // Progression 2: using setTimeout() -- use 1000 units for time parameter
  setTimeout(()=>{
    let output = ''
    cookies.forEach((e)=>{
      output+=`<li>${e.name}`
    },1000)
    document.body.innerHTML = output
  })
}
getCookies()


//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookies(){
  return new Promise((resolve,reject)=>{
    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(()=>{
      let initialLengthofCookie = cookies.length
      cookies.push(newCookie)
      // Progression 5: handling errors and adding new cookie to the list
      if(cookies.length>initialLengthofCookie){
        resolve("Ok")
      }else{
        reject("There is no cookie")
      }
    },2000)
  })
}

      

// Progression 6: call function using `.then`
createCookies(newCookie).then((res)=>{
  console.log(res)
  getCookies()
})
.catch((err)=>{
  console.log(err)
})

