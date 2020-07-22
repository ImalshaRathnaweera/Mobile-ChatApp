import firebase from '../firebase/config';

export const AddUser = async(name,email,uid,profileImg)=>{
    try{
        return await firebase
        .database()
        .ref('users/'+ uid)
        .set({
            name:name,
            email:email,
            uuid:uid,
            profileImg:profileImg,
        });

    }catch(error){
        return error;

    }
};

const UpdateProfile = async(uuid,imagSrc) =>{

    try{
        return await firebase.database().ref('users/' + uuid)
        .update({
            profileImg:imagSrc,
        });

    }catch(error){
        return error

    }
}

export default UpdateProfile;

export const UpdateDetails = async(uuid,name,email) =>{

    try{
        return await firebase.database().ref('users/' + uuid)
        .update({
            name:name,
            email:email
        });

    }catch(error){
        return error

    }
}

 
