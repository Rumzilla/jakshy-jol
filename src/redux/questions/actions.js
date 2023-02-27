import {
    GET_QUESTIONS,
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

export {
    getQuestionsRequestPostsActionCreator,
    getQuestionsReceivePostsActionCreator,
    getQuestionsFailurePostsActionCreator
}