import {useState, useEffect} from 'react'

export default function useFriendStatus(friendID){
const [isOnline, setIsOnline] = useState(null)

useEffect((status)=>{
        setIsOnline(status.isOnline)
}, [])
return isOnline;
}