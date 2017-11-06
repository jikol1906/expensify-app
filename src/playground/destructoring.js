/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher : {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);*/


//
// Array Destructoring
//


/*const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [,,state = 'New York'] = address;

console.log(`you are in ${state}`);*/

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee,,price] = item;

console.log(`a medium ${coffee} costs ${price}`);
