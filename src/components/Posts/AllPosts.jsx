import {useEffect, useState} from "react"
import { getAllPosts } from "../../services/postService"
import { Post } from "../../posts/post"
import "./Posts.css"
import { FilterBar } from "./FilterBar"

export const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setPosts(postsArray)
        })
    }, [])

    useEffect(() => {
        const searchedPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredPosts(searchedPosts)
    }, [searchTerm, posts])

    return (
        <div className="app-container">
        <h1 className="page-title">LEARNING MOMENTS</h1>

            <div className="posts-header">
                <h2>All Posts</h2>

                <div className="filter-controls">
                    <select className="topic-select">
                        <option>Topic Drop-down</option>
                    </select>

                {/* <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                /> */}
                    <FilterBar setSearchTerm={setSearchTerm}/>
                </div>
            </div>

            <div className="posts-container">

                    {filteredPosts.map((postObj) => {
                        return <Post post={postObj} key={postObj.id}/>
                    })}
                
            </div>
        </div>
    )
}