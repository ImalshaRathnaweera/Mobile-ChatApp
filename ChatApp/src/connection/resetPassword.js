import firebase from '../firebase/config';

const ResetPasswordRequest = async(email)=>{
    try{
        return await firebase.auth().sendPasswordResetEmail(email);

    }catch(error){

        return error;

    }


}

export default ResetPasswordRequest;