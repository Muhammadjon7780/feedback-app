// import { memo, useCallback, useEffect, useState } from "react";




// import React, { useEffect, useState } from 'react';

// function Rest() {
//   const [posts, setPosts] = useState([]); // Ma'lumotni saqlash uchun state

//   useEffect(() => {
//     API'ga GET so'rov yuborish
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json()) // JSON formatga o'zgartirish
//       .then(data => setPosts(data)) // Ma'lumotni state'ga o'rnatish
//       .catch(error => console.error('Error fetching posts:', error));
//   }, []); // Faqat bir marta bajarish uchun bo'sh dependency []

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <p>{post.title}</p>
//             {/* <p>{post.body}</p> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Rest;








import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API'ga POST so'rov yuborish
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    })
      .then(response => response.json())
      .then(data => setResponse(data)) // Javobni state'ga o'rnatish
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <p>Title: {response.title}</p>
          <p>Body: {response.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;














// const Smt = () =>{

// const [count, setCount] = useState(0)
// const [decCount, setDecCount] = useState(10)

// const showCount = useCallback(() => console.log(count), [count]);

// useEffect(() =>{
//   showCount()
// }, [showCount])

//   return(
//     <div>
//       <p>{count}</p>
//       <p>Dec Count: {decCount}</p>
//       <button onClick={() => setCount(count+1)}>click</button>
//       <button onClick={() => setDecCount(decCount-1)}>click</button>
//     </div>
//   )
// }
// export default memo(Smt);





