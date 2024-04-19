import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet, TextInput } from 'react-native';
import backgroundvolunteer1 from "../assets/backgroundvolunteer1.png"

const initialEvents = [
    {
        id: 1,
        title: 'Community Road Clean-Up',
        location: 'Main Theater, City Center',
        date: 'Friday, April 29, 2024',
        description: 'Join us!',
    },
    {
        id: 2,
        title: 'Road Safety Workshop',
        location: 'Public Library',
        date: 'Saturday, May 5, 2024',
        description: 'training session bout the importance of road safety.',
    },
    {
        id: 3,
        title: 'Driver Education Campaign',
        location: 'Local Park',
        date: 'Sunday, May 13, 2024',
        description: 'Collaboration with driving schools.',
    },
];

const Card = ({ title, location, date }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.titlee}>{title}</Text>
            <Text style={styles.details}>Location: {location}</Text>
            <Text style={styles.details}>Date: {date}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
        </View>
    );
};

const JoinEventList = ({ events }) => {
    return (
        <View>
            {events.map((event) => (
                <Card
                    key={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                />
            ))}
        </View>
    );
};

const CreateEventForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        onSubmit({ title, location, date });
        setTitle('');
        setLocation('');
        setDate('');
    };

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Event Purpose :</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.label}>Where? :</Text>
            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
            />
            <Text style={styles.label}>When? :</Text>
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder="When"
            />
            <Text style={styles.label}>About you :</Text>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Last Name" />
            <TextInput style={styles.input} placeholder="Phone Number" />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const Volunteer = () => {
    const [selectedButton, setSelectedButton] = useState('create');
    const [events, setEvents] = useState(initialEvents);

    const handleCreateEventSubmit = (newEvent) => {
        // Adding the new event to the events array
        setEvents(prevEvents => [...prevEvents, { id: prevEvents.length + 1, ...newEvent }]);
    };

    return (
        <ImageBackground source={backgroundvolunteer1} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="never">
                <View style={styles.container}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={selectedButton === 'create' ? styles.activeButton : styles.button}
                            onPress={() => setSelectedButton('create')}
                        >
                            <Text style={styles.buttonText}>Create Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={selectedButton === 'join' ? styles.activeButton : styles.button}
                            onPress={() => setSelectedButton('join')}
                        >
                            <Text style={styles.buttonText}>Join Event</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        {selectedButton === 'create' ? (
                            <CreateEventForm onSubmit={handleCreateEventSubmit} />
                        ) : (
                            <JoinEventList events={events} />
                        )}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        paddingTop: "10%",
        margin: "auto"
    },
    container2: {
        marginTop: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    titlee: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 16,
        color: '#888',
        marginBottom: 5,
    },
    activeButton: {
        flex: 1,
        padding: 10,
        backgroundColor: "#6191EC",
        padding: 10,
        marginLeft: "10%",
        marginTop: 50,
        width: "40%",
        borderRadius: 20,
        marginBottom: 10,
        fontFamily: "serif",
    },
    form: {
        marginBottom: 20,
        width: 280,
    },
    eventItem: {
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventDescription: {
        color: '#888',
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        marginTop: -4,
        color: "#EF5F5F",
        fontFamily: "serif",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#8FB0F0",
        borderRadius: 20,
        width: "100%",
        padding: 10,
        margin: 5,
        fontFamily: "serif",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
        color: "#6191EC",
        fontFamily: "serif",
    },
    button: {
        backgroundColor: "#6191EC",
        padding: 10,
        marginLeft: "10%",
        marginTop: 50,
        width: "40%",
        borderRadius: 20,
        marginBottom: 10,
        fontFamily: "serif",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontFamily: "serif",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "contain", // or "stretch"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
});

export default Volunteer;
