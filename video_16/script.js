// object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "chetan",
    [mysym]: "key1",
    isloggedin: true,
    age: 21,
    email: "rjputchetanrj@google.com",
    greetings: function (){
        console.log("Good day to you sir.");
    },
    greetings2: function (){
        console.log(`Good day to ${this.name} sir.`);
    }
}

// To Freeze
// Object.freeze(jsuser);

// To access
console.log(jsuser[mysym])
console.log("name");
jsuser.greetings();
jsuser.greetings2();

// To change
jsuser.email = "rajputchetan@123.com"
