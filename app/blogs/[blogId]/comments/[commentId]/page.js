export default async function Comments({params}) {
    const paramObj = await params;
    const {blogId, commentId} = paramObj;
    return(
        <>
            Blog no. {blogId} / comments {commentId}
        </>
    )
    
}

// slug name and variable name should be same in nested dynamic routing,