import React, {useState} from 'react'
import {Grid, Box,Button, TextField, Typography} from '@mui/material';
import {addDoc, collection} from "firebase/firestore";
import {db, auth} from '../config/firebase-config'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {storage} from '../config/firebase-config'
// import {useNavigate} from "react-router-dom";
// import {useAuth} from "../context/auth"

export default function CreatePost() {
  
  // const navigate = useNavigate()
  const[title, setTitle] = useState('')
  const[postText, setPostText] = useState('')
  const[file, setFile] = useState(null)
  const[file1, setFile1] = useState()
  const [imageUrl, setImageUrl] = useState()

  const postCollectionRef = collection(db, "posts");
  
  // const {currentUser} = useAuth()
  

    const handleFile = (event) => {
    setFile(event.target.files[0])
    setFile1(URL.createObjectURL(event.target.files[0]))
    console.log(file1)

  }
  const handleImageUpload = async () => {
   const imageRef = ref(storage, `posts/${file.name}`);
    const metadata = {
     contentType: 'image/jpeg',
    };
   uploadBytes(imageRef, file, metadata).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}

//   uploadBytes(imageRef, file)
//   .then((snapshot) => {
//     getDownloadURL(snapshot.ref).then((url) => {
//       setImageUrl((prev) => [...prev, url]);
//     });
// }


  const createPost = async () => {
    handleImageUpload()
    await addDoc(postCollectionRef, {
    title,
      postText,
      author:{ name: auth.currentUser.displayName, id: auth.currentUser.uid},
    })

    // const storage = getStorage();
    // const imagesRef = ref(storage, `images/${file.name}`)
    // const metadata = {
    //  contentType: 'image/jpeg',
    // };


   
  }



  React.useEffect(()=>{
},[])


  return (
    <Grid>
        <Box mt={5}> 
          <label> Title:
<TextField name='title' onChange={(e) => {setTitle(e.target.value) }} />
          </label>
<Typography>Article</Typography>
             <TextField
          id="outlined-multiline-static"
          name='postText'
          label="Artifle"
          multiline
          rows={4}
onChange={(e) => {setPostText(e.target.value) }}
        />
        <img src ={file1} alt='' width='300px'/>
        <Button
                  component="label"
                  sx={{  background:'#E07014', color:'white', '&:hover': {backgroundColor: '#E07014',
                    color: '#white',
                } }}
                >
                  Upload File
                  <input type="file" onChange={handleFile} hidden required/>
                </Button>

<Button onClick={createPost} >Submit</Button>
        </Box>
         </Grid>
  )
}
