import {useEffect, useState} from "react"
import { getAllPosts } from "../../services/postService"
import { Post } from "../../posts/post"
import "./Posts.css"
import { FilterBar } from "./FilterBar"
import { getAllTopics } from "../../services/TopicService"
import { FilterTopic } from "./FilterTopic"

export const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedTopic, setSelectedTopic] = useState("")
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setPosts(postsArray)
        })
    }, [])

    useEffect(() => {
        let filtered = posts

        if (searchTerm !== "") {
            filtered = filtered.filter(post =>
                post.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        }

        if (selectedTopic !== "") {
            filtered = filtered.filter(post =>
                post.topicId === parseInt(selectedTopic)
            )
        }

        setFilteredPosts(filtered)
    }, [posts, searchTerm, selectedTopic])

    useEffect(() => {
        getAllTopics().then((topicArray) => {
            setAllTopics(topicArray)
        })
    }, [])

    return (
        <div className="app-container">
        <h1 className="page-title">LEARNING MOMENTS</h1>

            <div className="posts-header">
                <h2>All Posts</h2>

                <div className="filter-controls">
                    <FilterTopic
                        topics={allTopics}
                        setSelectedTopic={setSelectedTopic}/>

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