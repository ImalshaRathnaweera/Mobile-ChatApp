import React from 'react';

const UpdateProfile =() =>{
    return(
        <View>
            <View>
            <TextInput style={styles.input}
            placeholder=" Enter User name"
            value={name}
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            // onChangeText ={(text)=>handleOnChange('name',text)}

            />
             <TextInput style={styles.input}
            placeholder="Enter Email"
            value={email}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            // onChangeText ={(text)=>handleOnChange('email',text)}

            />

            </View>
        </View>
    );

}

export default UpdateProfile;