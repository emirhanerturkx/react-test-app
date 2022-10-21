import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
const Blog = () => {
  const { id } = useParams()

  const [blog, setBlog] = useState([])
  const getBlog = (async () => {
    const getData = await axios.get('http://localhost:8080/api/v1/blog/' + id);
    setBlog(getData.data.results);
  });

  useEffect(() => {
    getBlog()
  }, [])

  return (
    <div>{
      blog.map(item => (
        <h1> {item.Title} </h1>
      ))
    }</div>
  )
}
export default Blog