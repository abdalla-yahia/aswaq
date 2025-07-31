import Comment_Content from "./Comment_Content"

export default function Comments_Product() {
  const title = "تي شيرت"
  return (
    <div className="w-full p-main">
      <h1 className="mb-5 text-3xl">التعليقات على {title}</h1>
      <div className="w-full flex flex-wrap -mx-4">
        {/**Comments */}
        <Comment_Content />
        <Comment_Content />
        <Comment_Content />
        <Comment_Content />
        <Comment_Content />
        <Comment_Content />
        
      </div>
    </div>
  )
}
