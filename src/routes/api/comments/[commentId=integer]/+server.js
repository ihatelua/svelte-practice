import { json } from '@sveltejs/kit'
import { comments } from '$lib/comments'

export function GET(requestEvent){
    const { params } = requestEvent; 
    const { commentId } = params;
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    return json(comment)
}

export async function PATCH(requestEvent){
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();

    // db에서 비즈니스 로직 수행
    const findedComment = comments.find(comment => comment.id === parseInt(commentId));
    findedComment.text = text;

    return json(findedComment)
}

export async function DELETE(requestEvent){
    const { params } = requestEvent;
    const { commentId } = params;
    const deletedComments = comments.find(comment => comment.id === parseInt(commentId));
    const index = comments.findIndex(comment => comment.id === parseInt(commentId));

    // 비즈니스 로직
    comments.splice(index, 1)

    return json(deletedComments);
}