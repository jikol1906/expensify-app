const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        rejet('Something went wrong');
    }, 1500);

});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});