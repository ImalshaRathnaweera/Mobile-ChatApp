import firebase from '../firebase/config';
const LogOut =async()=>{

    try{
      return await firebase.auth().signOut();
    }catch(error){
        return error;


    }
}
export default LogOut;