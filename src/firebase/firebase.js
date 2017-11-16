import * as firebase from 'firebase';


var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };








/*


database.ref().set({
    name: 'Boris',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    isSingle: false,
    location : {
        city: 'Copenhagen',
        country: 'United States'
    },
    attributes: {
        height: 1.80,
        weight: 85
    }
}).then(() => {
    console.log('Data saved');
}).catch((e) => {
    console.log('Could not connect', e);
});

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    });


database.ref('expenses')
    .on('child_changed',(snapshot) => {
        console.log(snapshot.key,snapshot.val());
    });



database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Philadelphia'
});

database.ref('expenses').push({
    description: 'dd',
    amount: 123,
    createdAt: 0
});
database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data',e);
    });

*/
