import Comment_Content from "./Comment_Content"

export default function Comments_Product({title}:{title:string}) {
    const comments = [];
    for(let i = 0 ; i<6 ;i++){
      comments.push(<Comment_Content key={i} />)
    }
  return (
    <div className="w-full p-main">
      <h1 className="mb-5 text-3xl">التعليقات على {title}</h1>
      <div className="w-full flex flex-wrap -mx-4">
        {/**Comments */}
        {comments}
        
      </div>
    </div>
  )
}
