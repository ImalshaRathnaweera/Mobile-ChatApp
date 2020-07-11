import Firebase from 'firebase';

const firebaseConfig ={
    apiKey :'AIzaSyCiAB2_dy3jSB_AZHDrvmOEupyLcd5N-WM',
    databaseURL:'https://chatappdb-1e5c3.firebaseio.com/',
    projectId: 'chatappdb-1e5c3',
    appId: '1:483966663807:android:e28f5fcc1de7006c17934a',
    messagingSenderId:'483966663807',
    storageBucket:'gs://chatappdb-1e5c3.appspot.com',
};

if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig)
}

export default Firebase;