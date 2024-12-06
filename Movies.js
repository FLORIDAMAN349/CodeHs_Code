var movie = readLine("What movie do you want to watch?: ")
var age = readInt("How old are you?: ")
var parentPerms = readBoolean(`Do you have parent permission? Type only yes or no.: `)
var drink = readBoolean(`Do you want a drink? Type only yes or no.: `)
var popcorn = readBoolean(`Do you want popcorn? Type only yes or no.: `)

if(age >= 18) {
    print(`You do not need parent permission to watch "` + movie + `"`)
} else if(age < 18 && parentPerms == true) {
    print(`You can watch "` + movie + `"`)
} else if (age < 18 && parentPerms == false){
    print(`Sorry, but you can't watch "` + movie + `"`)
}

if((age >= 18) || (age < 18 && parentPerms == true)) {
    if(drink == true && popcorn == true) {
        print("You ordered a drink & a popcorn!")
    } else if(drink == true) {
        print("You ordered a drink!")
    } else if(popcorn == true) {
        print("You ordered a popcorn!")
    } else {
        print("You ordered nothing!")
    }
}