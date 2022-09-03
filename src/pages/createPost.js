import React, { useState } from "react";
import { Grid, Box,Avatar, Stack,Divider, Button, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/firebase-config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase-config";
// import {useNavigate} from "react-router-dom";
// import {useAuth} from "../context/auth"

// const drawerWidth = 150;
export default function CreatePost() {
  // const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [imageUrl, setImageUrl] = useState();

  const postCollectionRef = collection(db, "posts");

  // const {currentUser} = useAuth()

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    setFile1(URL.createObjectURL(event.target.files[0]));
    console.log(file1);
  };
  const handleImageUpload = async () => {
    const imageRef = ref(storage, `image`);
    const metadata = {
      contentType: "image/jpeg",
    };
    uploadBytes(imageRef, file, metadata).then((snapshot) => {
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.log(error.message, "error getting the image url");
        })
        // setImageUrl(null)
        .catch((error) => {
          console.log(error.message);
        });
      console.log("Uploaded a blob or file!");
    });
  };


  const createPost = async () => {
    handleImageUpload();
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      imageUrl: imageUrl,
    });

    // const storage = getStorage();
    // const imagesRef = ref(storage, `images/${file.name}`)
    // const metadata = {
    //  contentType: 'image/jpeg',
    // };
  };

  React.useEffect(() => {}, []);

  return (
    <Grid
      sx={{
        // width: { md: `calc(100% - 150px)`, sm: "100%" },
        // ml: { md: `${drawerWidth}px`, sm: "none" },
        // border: "solid red",
      }}
      p={3}
    >
      
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          fullWidth
          sx={{}}
        >
          <Typography variant="h5" sx={{ color: "black", fontWeight: "700" }}>
            Make a new Post
          </Typography>
          <Avatar
            sx={{
              display: { md: "none", sm: "block" },
              width: "100px",
              height: "100px",
            }}
          />
        </Stack>
        <Divider
          color="primary"
          bgColor="primary"
          sx={{ color: "", mt: "10px", border: '2px solid #3849aa' }}
        />
<Box mt={2}>
<Typography>Title:</Typography>        
          <TextField
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        <Typography>Article</Typography>
        <TextField
          id="outlined-multiline-static"
          name="postText"
          label="Article"
          multiline
          rows={4}
          onChange={(e) => {
            setPostText(e.target.value);
          }}
        />
        <img src={imageUrl} alt="" width="300px" />

        <Button
          component="label"
          sx={{
            background: "#E07014",
            color: "white",
            "&:hover": { backgroundColor: "#E07014", color: "#white" },
          }}
        >
          Upload Image
          <input type="file" onChange={handleFile} hidden required />
        </Button>

        <Button onClick={createPost}>Submit</Button>
      </Box>
    </Grid>
  );
}
