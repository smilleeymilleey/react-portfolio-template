import React, { useState, useEffect } from 'react'


function Blog() { 

    const [blogPost, setBlogPost] = useState(null);
    
    useEffect(() => {

        const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40caitlynmiley-cm"
      
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setBlogPost(data)
        });
    }, [])

  
    
    return (
        <div>
         <h1>Blog</h1>

         {/* post data and map */}
          <h1>{blogPost && blogPost.items.map(post => 
            <h1>{post.title}</h1>
            )}</h1>  
     
        </div>
    )
}

export default Blog;
