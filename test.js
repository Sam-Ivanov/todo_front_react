async function postData(url = '', data = {}) {
   const response = await fetch(url, {
     method: 'POST',
     mode: 'cors', 
     cache: 'no-cache',
     credentials: 'same-origin',
     headers: {
       'Content-Type': 'application/json'
       
     },
     redirect: 'follow',
     referrerPolicy: 'no-referrer',
     body: JSON.stringify(data) 
   });
   return await response.json(); 
 }
 
 postData('https://todo-six-self.vercel.app/login', { email:"sam@sam.com", password:"12345" })
   .then((data) => {
     console.log(data); 
   });

