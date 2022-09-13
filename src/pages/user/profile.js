import  React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {
Avatar,
  Typography,
  TextField,
  Stack,
  Button,
  Divider,
  Grid,
  CircularProgress,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase-config";
import { db, } from "../../config/firebase-config";
import ImageAvatar from "../../layout/components/avatar";
import { useAuth } from "../../context/auth"

export default function UserProfile() {
  const [values, setValues] = React.useState({})
  const [file, setFile] = React.useState("")
  // const [file1, setFile1] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [imageUrl, setImageUrl] = useState();

  const navigate = useNavigate()
  // const [value, setValue] = React.useState([]);
//   const { currentUser } = useAuth();
const auth = getAuth();
const user = auth.currentUser;
//   React.useEffect(() => {
//     profileManager
//       .getProfile(currentUser)
//       .catch((e) => {
//         // setValue({});
//         console.log(e);
//       });
//   }, [currentUser]);


  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
    console.log(values)
  }
  const handleFile = (event) => {
    setFile(event.target.files[0])
    // setFile1(URL.createObjectURL(event.target.files[0]))

  }

  // const postCollectionRef = collection(db, "posts");

const handleSubmit = async (e) => {
  e.preventDefault();
  handleImageUpload()
  await updateProfile(auth.currentUser, {
    displayName: "testing",
    photoURL: imageUrl,
  })
    .then(() => {
setLoading(true)
   
    })
    .catch((error) => {
    // setError(error)
    });
};

const handleImageUpload = async () => {
      const imageRef = ref(storage, `usersAvatar/${user.uid}/${file}`);
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
    }

  return (
    <>
      <Grid item md={12} sx={{}}>
        <Grid container sx={{}} p={3}>
          <Box
            component="div"
            // px={5}
            sx={{ flexGrow: 1, bgcolor: "background.default" }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              fullWidth
              sx={{}}
            >
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: "700" }}
              >
                Edit Profile {user?.displayName}
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
              // bgColor="primary"
              sx={{ color: "", mt: "10px", border: "2px solid #3849aa" }}
            />{" "}
          </Box>
          <Grid item md={12} mt={12}>
            <Grid container spacing={2} p={2} alignItems={"center"}>
              <Grid item md={4} xs={12} sx={{ justifyContent:'center'}}>
          <ImageAvatar width="200px" height='200px' imageUrl ={imageUrl}/>
                <Button
                  component="label"
                  // mt={5}
                  sx={{
                    background: "#3849aa",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#3849aa",
                      color: "white",
                    },
                    margin:'20px auto',
                    width:'fit-content'
                    // marginTop:'20px'
                  }}
                >
                  Upload File
                  <input
                    type="file"
                    onChange={handleFile}
                    hidden
                    required
                  />
                </Button>
              </Grid>
              <Grid item md={4} xs={12}>
                  <form onSubmit={handleSubmit}>
                <Stack spacing={2} >
                    <Typography>Username</Typography>
                    <TextField
                      name="username"
                      onChange={handleChange}
                      label="Username"
                      variant="outlined"
                      color="primary"
                    />
                    {loading ? (
                      <Stack sx={{ padding: "0 50%" }}>
                        <CircularProgress color="primary" />
                      </Stack>
                    ) : (
                      <Button
                        type="submit"
                        sx={{
                          margin: "auto",
                          width: "15vw",
                          backgroundColor: "#3849aa",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#3849aa",
                            color: "white",
                          },
                        }}
                      >
                        Update
                      </Button>
                    )}
                </Stack>
                  </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
