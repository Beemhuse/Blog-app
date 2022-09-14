import React, {useState, useEffect} from "react";
import { Grid,Card, Avatar, Typography, Box, Stack } from "@mui/material";
import image from "../images/Rectangle4.png";
import { update, selectUser } from "../redux/reducers/user";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { addPost, deletePost, updatePost } from "../redux/reducers/index";

export default function Homepage() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const dispatch = useDispatch();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      try{
        dispatch(
              addPost({
                id: postList.id,
                title: postList.title,
                postText: postList.postText,
                author: postList.author,
              })
            );
          

      }catch(error){
        console.log(error)
      }  
    }      
      getPosts();
      
    
  })

const postsList = useSelector((state) => state.posts)

  return (
    <>
      <Grid
        container
        spacing={3}
        p={3}
        sx={{ minHeight: "100vh", backgroundColor: "black" }}
      >
        <Grid item md={12} px={2}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img src={image} alt="hhd" width={600} />
            <Box component="div" sx={{ width: 500 }}>
              <Stack spacing={2}>
                <Typography variant="p" sx={{ opacity: "0.6", color: "white" }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
                <Avatar sx={{ width: 60, height: 60 }} />
              </Stack>
            </Box>
          </Grid>
          <Grid item md={12} mt={4}>
            <Typography sx={{ color: "white" }}>Latest News</Typography>
            <Grid container>
              {postsList?.map((item) => (
                <Box  key={item.uid}>
                  <Card>
                    <Typography>{item.title}</Typography>
                  </Card>
                </Box>
              ))}
              {/* <Grid item md={4}>
                <img src={image} alt="hhd" width={200} />
                <Box component="div" sx={{}}>
                  <Stack spacing={2}>
                    <Typography
                      variant="p"
                      sx={{ opacity: "0.6", color: "white" }}
                    >
                      UI Design
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        opacity: "0.6",
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "#FFFFFF",
                      }}
                    >
                      Understanding color theory: the color wheel and finding
                      complementary colors
                    </Typography>
                    <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4}>
                <img src={image} alt="hhd" width={200} />
                <Box component="div" sx={{}}>
                  <Stack spacing={2}>
                    <Typography
                      variant="p"
                      sx={{ opacity: "0.6", color: "white" }}
                    >
                      UI Design
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        opacity: "0.6",
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "#FFFFFF",
                      }}
                    >
                      Understanding color theory: the color wheel and finding
                      complementary colors
                    </Typography>
                    <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={4}>
                <img src={image} alt="hhd" width={200} />
                <Box component="div" sx={{}}>
                  <Stack spacing={2}>
                    <Typography
                      variant="p"
                      sx={{ opacity: "0.6", color: "white" }}
                    >
                      UI Design
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        opacity: "0.6",
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "#FFFFFF",
                      }}
                    >
                      Understanding color theory: the color wheel and finding
                      complementary colors
                    </Typography>
                    <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}