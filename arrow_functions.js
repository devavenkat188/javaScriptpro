const myObject = {
    items: [1],
    myMethod (){
        console.log(this === myObject);
        this.items.forEach(() => {
            console.log(this === myObject);
            console.log(this === myObject);
        });
    }
};
myObject.myMethod();