export default async function BlogHome({ params }) {
 const {blogId} = await params
  return (
    <>
      <h1>Blog Page</h1>
      <p>Current blog id: {params.blogId}</p>
    </>
  );
}