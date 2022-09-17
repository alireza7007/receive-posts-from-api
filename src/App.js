import React, {useEffect,useReducer} from "react";
import Loading from "./Components/Loading/Loading";
import Toast from "./Toast/Toast";

const inintState= {
  toast :{type:'info',message:''},
  title : '',
  postId : 1 ,
  loading : true
}




export default function App(){
 
function reducer(state,action){
  switch (action.type) {
    case 'get-post-resive':
      return{
        ...state,
        title : action.title,
        toast : {type:'success',  message:action.message},
        loading : false
      }
         
     case 'get-post-request':

     return{
      ...state,
      postId : action.postId,
      loading : true 
     }
        
    default:
      break;
  }
}
const [{postId,toast,loading,title},dispatch] = useReducer(reducer,inintState)
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(psot =>{
     dispatch({
      type:'get-post-resive', 
      title:psot.body,
      message: `post with id ${postId} loaded`

     })
    })
  },[postId])
  

  function handelLoading(e){
    dispatch({
      type:'get-post-request',postId:e.target.value})
  }
  return(
    <div className="container">
      <div>
        <label>Post Id:</label>
        
        <input value={postId} type='number' onChange={handelLoading} />
      </div>
      {loading ? <Loading /> :<h1>{title}</h1>}
      <Toast type={toast.type} message={toast.message}/>
    </div>
  )
}
