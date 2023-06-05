import React, { useState } from 'react';
import { View, Image,  TextInput, Button, FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';


const App = () => {
  const [todos, setTodos] = useState([
    { id: Date.now()+1, text: "Black & White Wireframe", completed: true },
    { id: Date.now()+2, text: "User Research & Analysis", completed: true },
    { id: Date.now()+3, text: "Design On Figma", completed: false },
  ]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText) {
      setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteAllTodo = () => {
    setTodos([]);
  }

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const renderTodo = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTodo(item.id)}
      >
        {item.completed && <View style={styles.checkboxInnerCircle} >
          <Text style={styles.checkboxMark}>✓</Text>
        </View>}
      </TouchableOpacity>

      <Text style={item.completed ? styles.completedText : styles.todoText}>{item.text}</Text>
      {/* <Button title="Delete" onPress={() => removeTodo(item.id)} /> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskDetails}>
        <Text style={styles.taskDetailsText}>Task Details</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.taskTitle}>Task Title</Text>
        <Text style={styles.titleText}>NFT Web App Prototype</Text>

        <Text style={styles.taskTitle}>Task Title</Text>
        <Text style={styles.descriptionText}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..
        </Text>
      </View>
      <View style={styles.avatarView}>
        <Image
          source={require('./assets/images/Avatargp.jpg')} // Replace with the path or URL of your image
          style={styles.image}
        />
      </View>
      <View style={styles.tasklistView}>
        <Text style={styles.tasklist}>Task Title</Text>
        <TouchableOpacity  onPress={deleteAllTodo}>
          <Image
              source={require('./assets/icons/Icon.jpg')} // Replace with the path or URL of your image
              style={styles.imageDelete}
            />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.todoList}
        data={todos}
        renderItem={renderTodo}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputAddSign} >+</Text>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          placeholderTextColor="#98A2B3"
          color="black"
          value={todoText}
          onChangeText={text => setTodoText(text)}
          onSubmitEditing={addTodo}
        />
        {/* <Button title="Add" onPress={addTodo} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskDetails: {
    flex: 1,
    maxHeight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  taskDetailsText: {
    fontSize: 16,
    fontWeight: 500,
    color: "#111322",
  },
  headerContainer: {
    paddingHorizontal: 16,
    // paddingVertical: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 600,
    color: "black",
    fontWeight: 'bold',
    marginBottom: 15,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "#5D6B98",
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 16,
    color: "black",
    marginTop: 4,
    // marginBottom: 15,
  },
  avatarView: {
    margin: 15, 
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  imageDelete: {
    justifyContent: "center",
    marginTop: 10,
    marginRight: 10,
    maxHeight: 20,
  },
  tasklistView: {
    marginRight: 15,
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tasklist: {
   margin: 15,
   color: "#5D6B98" 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#F9F9FB",
    justifyContent: 'space-between',
    borderRadius: 20,
    margin: 15,
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
  },
  inputAddSign :{
    fontSize: 30,
    color: "#98A2B3",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#F9F9FB",
  },
  input: {
    flex: 1,
    marginRight: 10,
    // borderWidth: 1,
    placeholder: "Add Task",
    // color: "Black",
    fontSize: 16,
    backgroundColor: "#F9F9FB",
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
    // borderTopLeftRadius: 3,
    // borderTopRightRadius: 3,
    // borderBottomLeftRadius: 3,
    // borderBottomRightRadius: 3,
    paddingLeft: 4,
    paddingRight: 4,
    flex: 0.3,
    backgroundColor: '#F9F9FB',
    // borderWidth: .1,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
  },
  checkboxInnerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7F56D9',
  },
  checkboxMark: {
    textAlign: "center",
    // paddingTop: 4,
    fontSize: 20,
  },
  todoText: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    color: "black",
  },
  completedText: {
    flex: 1,
    marginRight: 10,
    // textDecorationLine: 'line-through',
    color: "#98A2B3",
    // color: '#ccc',
  },
});

export default App;
