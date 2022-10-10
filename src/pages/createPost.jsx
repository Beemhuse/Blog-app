import React, { useState, useEffect } from "react";
import { Grid,Select,MenuItem, Box,Avatar, Stack,Divider, Button, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/firebase-config";
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase-config";
import {  useDispatch } from "react-redux";
import { addPost} from "../redux/reducers/index";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { ContentState, convertToRaw } from "draft-js";
// import {useNavigate} from "react-router-dom";
// import {useAuth} from "../context/auth"
// import {exampleTheme} from './theme'




// const drawerWidth = 150;
export default function CreatePost() {
  // const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [value, setValue] = useState('')
const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
// const raw = convertToRaw(editorState);
const [contentState, setContentState] = useState();
  const postCollectionRef = collection(db, "posts");
const dispatch = useDispatch()
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
    dispatch(
      addPost({
        id: auth.currentUser.uid,
        title,
        postText,
        author: auth.currentUser.displayName,
        imageUrl,
      })
    );

    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      imageUrl: imageUrl,
    })
    .then(()=>{
      
    })     
  };

const handleChange =(e)=>{
setValue(e.target.value)
}
// const data = editorState.getCurrentContent()

let data = convertToRaw(contentState)
console.log(editorState);

const handleEditorChange =()=>{
setContentState(editorState.getCurrentContent())
console.log('content state', convertToRaw(contentState))
}

  return (
    <Grid container sx={{ border: "solid red" }}>
      {/* <Stack
        direction="column"
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
        sx={{ mt: "10px", border: "2px solid #3849aa" }}
      /> */}
      <Grid item md={12} p={3} sx={{ display: "flex" }}>
        <Box mt={2} sx={{ border: "solid blue", width: "600px" }}>
          <Typography>Title:</Typography>
          <TextField
            variant="standard"
            name="title"
            fullWidth
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Typography>Article</Typography>
          <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
                    // defaultContentState={contentState}

            // onContentStateChange={setContentState}
            onChange={setEditorState}
          />
          ;
          <TextField
            fullWidth
            id="outlined-multiline-static"
            name="postText"
            label="Article"
            multiline
            rows={4}
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </Box>

        <Box mt={2} sx={{ border: "solid blue" }}>
          <img
            src={imageUrl}
            alt=""
            width="300px"
            height="400px"
            sx={{ border: "solid green" }}
          />

          <Button
            component="label"
            sx={{
              background: "#3849aa",
              color: "white",
              "&:hover": { backgroundColor: "#3849aa", color: "white" },
            }}
          >
            Upload Image
            <input type="file" onChange={handleFile} hidden required />
          </Button>
          <Box>
            <Typography>Category</Typography>
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={value}>Trending</MenuItem>
              <MenuItem value={value}>Latest</MenuItem>
              <MenuItem value={value}>News</MenuItem>
            </Select>
          </Box>
          <Button onClick={createPost}>Submit</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
