import { 
            getQuestionsRequestPostsActionCreator,
            getQuestionsReceivePostsActionCreator,
            getQuestionsFailurePostsActionCreator,
            getBlogRequestPostsActionCreator,
            getBlogReceivePostsActionCreator,
            getBlogFailurePostsActionCreator 
        } from "./actions"

const fetchQuestions = () => async (dispatch) => {
    dispatch(getQuestionsRequestPostsActionCreator())
    try {
        const req = await fetch ('http://127.0.0.1:8000/api/question/')
        const parsedData = await req.json()
        console.log(parsedData)
            dispatch(getQuestionsReceivePostsActionCreator(parsedData))
    } catch (e) {
        dispatch(getQuestionsFailurePostsActionCreator)
    }
}

const fetchBlog = () => async (dispatch) => {
    dispatch(getBlogRequestPostsActionCreator())
    try {
        const req = await fetch ('http://127.0.0.1:8000/api/blog/')
        const parsedData = await req.json()
        console.log(parsedData)
            dispatch(getBlogReceivePostsActionCreator(parsedData))
    } catch (e) {
        dispatch(getBlogFailurePostsActionCreator)
    }
}


export default {
    fetchQuestions,
    fetchBlog
}