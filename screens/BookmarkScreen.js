import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BookmarkScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Bookmark Screen</Text>
            <Button
                title="Click here"
                onPress={() => alert('Button tapped')}
                />
        </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
