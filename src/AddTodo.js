import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = ({onAdd}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onAdd(value)
            setValue('')
        } else {
            // error
        }

    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder={'todo name'}
            />
            <Button title={'Add'} onPress={pressHandler} disabled={!value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3449ab',
        padding: 10

    }
})