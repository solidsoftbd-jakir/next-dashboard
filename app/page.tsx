
const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="p-24">
      {data.map((post: any) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}
