# Modern-JavaScript

## Functions

1. ```password.include('@')```

2. ```javascript
   const fun = function(para1, para2){
       console.log('this is func expression')
   }
   ```

3. ```javascript
   const calcArea = radius => radius*radius
   ```

4. ```javascript
   const greet = () => 'hello world'
   ```

5. ```javascript
   // forEach with callback function
   const people = ['x', 'y', 'z']
   people.forEach(i => {
       console.log(i)
   })
   
   ```

## Object 

1. ```javascript
   // object literals
   let user = {
       name : 'upal',
       email: 'udyan.upal@northsouth.edu',
       id: '1821359042',
       login(id){
           console.log(`${id} just logged in`)
       }
   }
   console.log(user.name)
   console.log(user.email)
   console.log(user.id)
   console.log(user.login(''))
   ```

2. 