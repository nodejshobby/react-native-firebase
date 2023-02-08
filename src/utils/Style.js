import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formHeader: {
        color: '#0782F9',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 10,
        width: '80%',
        padding: 10,
        marginBottom: 10,
    },
    primaryButton: {
        backgroundColor: '#0782F9',
        borderRadius: 10,
        padding: 15,
        width: '50%',
        marginTop: 10,
    },
    primaryButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    secondaryButton: {
        marginTop: 20,
    },
    secondaryButtonText: {
        color: '#0782F9',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default styles