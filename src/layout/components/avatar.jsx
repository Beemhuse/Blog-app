import React from 'react'
import Avatar from "@mui/material/Avatar";

export default function ImageAvatar(props) {
    let height = props.height
    let width = props.width
    let imageUrl = props.imageUrl
  return (
<Avatar sx={{height:height, width:width}} src = {imageUrl} />
    )
}
