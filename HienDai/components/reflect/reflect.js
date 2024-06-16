import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, SafeAreaView, ImageBackground, KeyboardAvoidingView, FlatList } from 'react-native';
import { Appbar, SegmentedButtons } from 'react-native-paper';
import axios from 'axios';
import DropdownPicker from 'react-native-dropdown-picker';
import { MyUserContext } from '../../configs/Contexts';

const ReflectScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null); // State để lưu admin đã chọn
  const [value, setValue] = useState('walk');
  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);
  const [admins, setAdmins] = useState([]);
  const user = useContext(MyUserContext);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('https://phanhoangtrieu.pythonanywhere.com/User/get_admin/', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        const data = response.data;
        console.log('Fetched Admins:', data); 
        const adminsData = data.map(admin => ({ label: admin.username, value: admin.id }));
        setAdmins(adminsData);
        console.log('Admins state:', adminsData);
      } catch (error) {
        console.error('Error fetching admins:', error); 
      }
    };

    fetchAdmins();
  }, [user.token]);

  useEffect(() => {
    const fetchSubmittedFeedbacks = async () => {
      try {
        const response = await axios.get('https://phanhoangtrieu.pythonanywhere.com/letter/get_letters/', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        const data = response.data;
        setSubmittedFeedbacks(data); // Lưu danh sách các phản ánh đã gửi vào state
      } catch (error) {
        console.error('Error fetching submitted feedbacks:', error); 
      }
    };

    fetchSubmittedFeedbacks();
  }, [user.token]);

  const handleChooseImage = () => {
    // Implement your image picker logic here
  };

  const handleSubmit = () => {
    // Implement your submit logic here
  };

  const renderFeedbackItem = ({ item }) => (
    <View style={styles.feedbackItem}>
      <Text style={styles.feedbackTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      {/* {item.image && <Image source={{ uri: item.image }} style={styles.image} />} */}
      <Text>Admin: {item.user_admin ? item.user_admin.join(', ') : ''}</Text>
     

    </View>
  );

  return (
    console.log("admin"+admins),
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        style={styles.background}
        imageStyle={{ opacity: 0.8, borderRadius:14 }}
        resizeMode="cover"
        source={require('../../assets/a.jpg')}
      >
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction
            onPress={() => navigation.goBack()}
            color="#1b1a19"
            fontWeight="bold"
          />
          <Appbar.Content
            title="PHẢN ÁNH"
            titleStyle={{ color: "#1b1a19", fontWeight: "bold" }}
          />
        </Appbar.Header>

        <SafeAreaView style={styles.safe}>
          <View style={styles.header}>
            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              buttons={[
                { value: 'walk', label: 'Viết Phản Ánh' },
                { value: 'train', label: 'Phản Ánh Đã Gửi' }
              ]}
            />
          </View>
          <View style={styles.content}>
            {value === 'walk' ? (
              <View style={styles.formContainer}>
                <Text style={styles.label}>Title:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter title"
                  value={title}
                  onChangeText={setTitle}
                />

                <Text style={styles.label}>Content:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter content"
                  value={content}
                  onChangeText={setContent}
                  multiline
                />

                <Text style={styles.label}>User Admin:</Text>
                <View style={styles.container}>
                <DropdownPicker
                  items={admins}
                  defaultValue={null}
                  containerStyle={styles.dropdownContainer}
                  style={styles.dropdown}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={item => setSelectedAdmin(item.value)}
                  placeholder="Select admin"
                />
              </View>

                <View style={styles.buttonsContainer}>
                  <Button title="Choose Image" onPress={handleChooseImage} style={styles.button} />
                </View>

                <View style={[styles.buttonsContainer]}>
                  {image && (
                    <Image source={{ uri: image.uri }} style={styles.imageRe} />
                  )}
                </View>

                <View style={[styles.buttonsContainer]}>
                  <Button title="Gửi báo cáo" onPress={handleSubmit} style={styles.button} />
                </View>
              </View>
            ) : (
              <View style={styles.formContainer}>
                <Text style={styles.label}>Danh sách các phản ánh đã gửi:</Text>
                <FlatList
                  data={submittedFeedbacks} // Sử dụng danh sách phản ánh đã gửi từ state
                  renderItem={renderFeedbackItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:8
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    
  },
  appbar: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  safe: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  imageRe: {
    width: 100,
    height: 100,
    marginVertical: 16,
  },
  feedbackItem: {
    padding:10,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    backgroundColor:'#e6f0ff',
    opacity : 0.9,
    borderRadius:10
    
    
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '#83e72d',
  },
  button: {
    marginBottom: 10,
    marginVertical: 90,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    justifyContent: 'center',
    
    marginBottom: 10, 
    marginTop:40,
  },
});

export default ReflectScreen;
