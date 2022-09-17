import React, { useEffect} from "react";
import { Grid,Card, Avatar, Typography, Box, Stack } from "@mui/material";
import image from "../images/Rectangle4.png";
// import { update, selectUser } from "../redux/reducers/user";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { viewPost,  } from "../redux/reducers/index";
import {Link} from "react-router-dom"
import { fetchPosts, getPostsStatus, selectAllPosts, getPostsError } from "../redux/reducers/index";





export default function Homepage() {
  const postsCollectionRef = collection(db, "posts");
  const dispatch = useDispatch();
const posts = useSelector(selectAllPosts)
const error = useSelector(getPostsError)
const postsStatus = useSelector(getPostsStatus)
// const postsList = useSelector((state) => state.posts);

useEffect(()=>{
if(postsStatus ==='idle'){
  dispatch(fetchPosts())
}

},[postsStatus, dispatch])

// const orderedPosts = posts.map((post) => (
//   <Grid key={post.id} md={4}>
//     <Card sx={{ background: "transparent" }}>
//       <Avatar variant="square" src={post.imageUrl} alt="" />
//       <Typography sx={{ color: "white" }}>{post.id}</Typography>
//       <Typography sx={{ color: "white" }}>{post.title}</Typography>
//       <Typography sx={{ color: "white" }}>
//         {post.postText.substring(0, 20)}
//       </Typography>
//       <Link to={`/posts/${post.id}`}>View Post</Link>
//     </Card>
//   </Grid>
// ));


let content;
if(postsStatus ==='loading'){
  content =<p>"Loading..."</p>
}
else if(postsStatus ==='succeeded'){
  // content = orderedPosts
}


  useEffect(() => {
    const getPosts = async () => {
      
      const data = await getDocs(postsCollectionRef);
      let res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dispatch(
    viewPost( res)
      )
    }      
      getPosts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



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
          mt={4}
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item md={5} sx={{ border: "solid blue" }}>
            <Typography sx={{ color: "white" }}>Trending News</Typography>

            <Box component="div" sx={{ width: "inherit" }}>
              <Avatar
                variant={"square"}
                src={image}
                alt=""
                sx={{ width: "inherit", height: "300px" }}
              />
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
                {/* <Avatar sx={{ width: 60, height: 60 }} /> */}
              </Stack>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ border: "solid red" }}>
            <Typography sx={{ color: "white", textAlign: "right" }}>
              Latest Technologies
            </Typography>
            <Box component="div" sx={{ width: "200px" }}>
              <Avatar
                variant={"square"}
                src={image}
                alt=""
                sx={{ width: "inherit", height: "300px" }}
              />
              <Stack spacing={2}>
                <Typography variant="p" sx={{ opacity: "0.6", color: "white" }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
                {/* <Avatar sx={{ width: 60, height: 60 }} /> */}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid item md={12} mt={4}>
          <Typography sx={{ color: "white" }}>Latest News</Typography>
          <Grid container justifyContent="space-between">
            {/* {orderedPosts} */}
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