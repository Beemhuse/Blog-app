import React, { useEffect} from "react";
import { Grid,Card,Divider, Avatar, Typography, Box, Stack } from "@mui/material";
import image from "../images/Rectangle4.png";
// import { update, selectUser } from "../redux/reducers/user";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { viewPost,  } from "../redux/reducers/index";
import {Link} from "react-router-dom"
import { fetchPosts, getPostsStatus, selectAllPosts } from "../redux/reducers/index";





export default function Homepage() {
  const postsCollectionRef = collection(db, "posts");
  const dispatch = useDispatch();
const posts = useSelector(selectAllPosts)
// const error = useSelector(getPostsError)
const postsStatus = useSelector(getPostsStatus)
const postsList = useSelector((state) => state.posts);
console.log(postsList)
useEffect(()=>{
if(postsStatus ==='idle'){
  dispatch(fetchPosts())
}

},[postsStatus, dispatch])

const orderedPosts = posts?.map(post => (
  <Box variant='article' key={post.id}  >
    <Card sx={{ background: "transparent",boxShadow:'none', width:'inherit', border:'none', padding:'10px' }} >
      <Avatar variant="square" src={post.imageUrl} alt=""  sx={{width:'inherit', height:'200px'}}/>
      <Typography variant='h4' sx={{  }}>{post.title}</Typography>
      <Typography sx={{  }} paragraph>
        {post.postText.substring(0, 20)}
      </Typography>
      <Link to={`/posts/${post.id}`} style={{textDecoration:'none'}}>View Post</Link>
    </Card>
  </Box>
));


// let content;
// if(postsStatus ==='loading'){
//   content =<p>"Loading..."</p>
// }
// else if(postsStatus ==='succeeded'){
//   content = orderedPosts
// }


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
    <Grid container p={3} spacing={2} sx={{ minHeight: "100vh" }}>
      <Grid item md={8} mt={3}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item md={12} sx={{  }}>
            <Typography sx={{}}>Trending News</Typography>
            <Divider
              color="primary"
              sx={{ mt: "10px", border: "2px solid #3849aa" }}
            />
            <Grid container spacing={2} py={2}>
              <Grid item md={6}>
                <Box component="div" sx={{ width: "inherit" }}>
                  <Avatar
                    variant={"square"}
                    src={image}
                    alt=""
                    sx={{ width: "inherit", height: "300px" }}
                  />
                  <Stack spacing={2}>
                    <Typography variant="p" sx={{ opacity: "0.6" }}>
                      UI Design
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        opacity: "0.6",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Understanding color theory: the color wheel and finding
                      complementary colors
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid item md={6}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={12}
                    sx={{
                      display: "flex",
                      gap: "20px",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        width: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        variant={"square"}
                        src={image}
                        alt=""
                        sx={{ width: "100px", height: "100px" }}
                      />
                      <Stack spacing={1}>
                        <Typography variant="p" sx={{ opacity: "0.6" }}>
                          UI Design
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            opacity: "0.6",
                            fontSize: "14px",
                            fontWeight: "400",
                            // color: "#FFFFFF",
                          }}
                        >
                          Understanding color theory: the color wheel and
                          finding complementary colors
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        width: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        variant={"square"}
                        src={image}
                        alt=""
                        sx={{ width: "100px", height: "100px" }}
                      />
                      <Stack spacing={1}>
                        <Typography variant="p" sx={{ opacity: "0.6" }}>
                          UI Design
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            opacity: "0.6",
                            fontSize: "14px",
                            fontWeight: "400",
                            // color: "#FFFFFF",
                          }}
                        >
                          Understanding color theory: the color wheel and
                          finding complementary colors
                        </Typography>
                      </Stack>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        width: "inherit",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        variant={"square"}
                        src={image}
                        alt=""
                        sx={{ width: "100px", height: "100px" }}
                      />
                      <Stack spacing={1}>
                        <Typography variant="p" sx={{ opacity: "0.6" }}>
                          UI Design
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            opacity: "0.6",
                            fontSize: "14px",
                            fontWeight: "400",
                            // color: "#FFFFFF",
                          }}
                        >
                          Understanding color theory: the color wheel and
                          finding complementary colors
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} mt={4}>
          <Typography sx={{}}>Latest News</Typography>
          <Divider
            color="primary"
            sx={{ mt: "10px", border: "2px solid #3849aa" }}
          />

          <Grid container  sx={{gap:'10px', display:'flex'}} >

            {orderedPosts}
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={4} mt={3}>
        <Grid container>
          <Grid item md={12} sx={{  }}>
            <Typography sx={{ textAlign: "right" }}>
              Latest Technologies
            </Typography>
            <Divider
              color="primary"
              sx={{ mt: "10px", border: "2px solid #3849aa" }}
            />

            <Box component="div" mt={2} sx={{ width: "200px" }}>
              <Avatar
                variant={"square"}
                src={image}
                alt=""
                sx={{ width: "inherit", height: "300px" }}
              />
              <Stack spacing={2}>
                <Typography variant="p" sx={{ opacity: "0.6" }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "14px",
                    fontWeight: "400",
                    // color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/* </Container> */}
  </>
);
}