import { getQuestionsRequestPostsActionCreator, getQuestionsReceivePostsActionCreator, getQuestionsFailurePostsActionCreator } from "./actions"

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

export default {
    fetchQuestions
}