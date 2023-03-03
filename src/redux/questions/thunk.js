import { 
            getBlogRequestPostsActionCreator,
            getBlogReceivePostsActionCreator,
            getBlogFailurePostsActionCreator 
        } from "./actions"

const fetchBlog = () => async (dispatch) => {
    dispatch(getBlogRequestPostsActionCreator())
    try {
        const req = await fetch ('http://43.207.186.205/api/blog/')
        const parsedData = await req.json()
        console.log(parsedData)
            dispatch(getBlogReceivePostsActionCreator(parsedData))
    } catch (e) {
        dispatch(getBlogFailurePostsActionCreator)
    }
}


export default {
    fetchBlog
}