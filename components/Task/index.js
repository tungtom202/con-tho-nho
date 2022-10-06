import { View, Text, Button, onPressLearnMore, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Task = () => {
  return (
    <TouchableOpacity>
        <View style={styles.wrap_button1}>
          <View style={styles.wrap_button}>
          <Button
         style={styles.button} 
         onPress={onPressLearnMore}
         title="Đăng nhập "
         color="#00b6ed"
         accessibilityLabel="Learn more about this purple button" 
         
         />     
          </View>
    
          </View>
        
    </TouchableOpacity>
  )
}

export default Task;