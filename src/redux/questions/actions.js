import {
    GET_QUESTIONS,
    GET_BLOG
} from "./types"

////Fetch list posts

const getQuestionsRequestPostsActionCreator = () => ({
   type: GET_QUESTIONS.REQUEST
})

const getQuestionsReceivePostsActionCreator = (list) => ({
   type: GET_QUESTIONS.RECEIVE,
   payload: list
})

const getQuestionsFailurePostsActionCreator = (err) => ({
   type: GET_QUESTIONS.FAILURE,
   payload: err
})

const getBlogRequestPostsActionCreator = () => ({
   type: GET_BLOG.REQUEST
})

const getBlogReceivePostsActionCreator = (list) => ({
   type: GET_BLOG.RECEIVE,
   payload: list
})

const getBlogFailurePostsActionCreator = (err) => ({
   type: GET_BLOG.FAILURE,
   payload: err
})

export {
    getQuestionsRequestPostsActionCreator,
    getQuestionsReceivePostsActionCreator,
    getQuestionsFailurePostsActionCreator,

    getBlogRequestPostsActionCreator,
    getBlogReceivePostsActionCreator,
    getBlogFailurePostsActionCreator
}