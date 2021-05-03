// const sqaure = function (x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// } 

// const square = (x) => {
//     return x*x
// }


// console.log()

const event = {
    name: 'Birthday Party',
    guestList: ['Bob','Joe',"Mike"],
    printGuestList()  {
        console.log("guest list for " + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()