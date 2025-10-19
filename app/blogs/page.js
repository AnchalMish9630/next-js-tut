export default function BlogHome({ params }) {
  console.log(params); // 👉 logs { blog: '1234' } when visiting /blogs/1234

  return (
    <>
      <h1>Blog Page</h1>
      <p>Current blog id: {params.blog}</p>
    </>
  );
}