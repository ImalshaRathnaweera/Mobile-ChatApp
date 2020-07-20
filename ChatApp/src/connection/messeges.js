import firebase from '../firebase/config';

export const senderMsg = async(msgValue, currentuserId, guestUserId,img)=>{
    try{
        return await firebase
        .database()
        .ref('messeges/'+ currentuserId)
        .child(guestUserId)
        .push({
           messege:{
            sender:currentuserId,
            reciever:guestUserId,
            msg:msgValue,
            img:img
           },
        });
    }catch(error){
        return error;

    }
};

 export const recieverMsg = async(msgValue,currentuserId, guestUserId,img)=>{
    try{
        return await firebase
        .database()
        .ref('messeges/'+guestUserId)
        .child(currentuserId)
        .push({
           messege:{
            sender:currentuserId,
            reciever:guestUserId,
            msg:msgValue,
            img:img
           },
        });
    }catch(error){
        return error;

    }
};

