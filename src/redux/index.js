import {useSelector, useDispatch} from 'react-redux'
import {addPost, deletePost, updatePost} from "./reducers/index"
import {useState} from 'react'

function App(){

const [data, setData] = useState('')
const [updateData, setUpdateData] = useState('');

const dispatch = useDispatch();
const handleClick = ()=>{
    let name = data.name
    let username = data.username
dispatch(addPost({id: postList[postList.length -1].id +1, name, username}))
}

function handleChange(e) {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
  console.log(data.name);
}

function handleChange2(e) {
  const { name, value } = e.target;
  setUpdateData({ ...updateData, [name]: value });
  console.log(updateData.name);
}

const postList = useSelector((state) => state.posts.value)
    return (
      <>
        <div className="addUsers">
          <input
            type="text"
            placeholder="name..."
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username..."
            onChange={handleChange}
          />
          <button onClick={handleClick}>Add users</button>
        </div>
        <div
          className="displayUsers"
          style={{ width: "fit-content", margin: "20px auto" }}
        >
          {postList.map((user) => (
            <div
              key={user.id}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
                boxShadow: "5px 5px 10px gray",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>{user.name}</h2>
              <h2>{user.username}</h2>
              <input
                type="text"
                placeholder="name..."
                name="name"
                onChange={handleChange2}
              />
              <input
                type="text"
                name="username"
                placeholder="New Username..."
                onChange={handleChange2}
              />
              <button
                onClick={() => {
                  dispatch(updatePost({ id: user.id, username: updateData.username, name: updateData.name  }));
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(deletePost({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          ))}
        </div>
      </>
    );
}

export default App