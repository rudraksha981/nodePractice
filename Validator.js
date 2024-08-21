const valid = require('validator')   /// manualy required just use 'valid' before isEmail
//const { default: isEmail } = require('validator/lib/isemail')  // sutomaticaly generated no need to use anything before isEmail

if(valid.isEmail('rgadhave7@rediffmail.com')) 
    console.log("email verified");
 else {
    console.log("Not a proper email");
}

// enclose email in bracket and quotes also use quotes for yes and no in ternary operator

const a = valid.isEmail('ravindra@gmail.com')? "yes" : "no" ;
    console.log(a)


const b = valid.isURL('https://googlecom')? "yes" : "no" ;
    console.log(b)
