import React, { useState, useEffect } from 'react'
import "../components/Blog.css"


function Blog() { 

    const [blogPost, setBlogPost] = useState(null);
    
    useEffect(() => {

        const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40caitlynmiley-cm"
      
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setBlogPost(data)
            console.log(data)
        });
    }, [])

  
    
    return (
        <div>
         <h1 className="blog">Blog</h1>

         {/* post data and map */}
          <h1>{blogPost && blogPost.items.map(post => 
            <div>
                <div className="topCard card w-75">
                <div className="card-body">
                    <h5 className="card-title">Blog Series- Interviews With Influencers In Tech</h5>
                    <p className="card-text">{post.title}</p>
                    <a href={post.link} className= " buttonBlog btn btn-primary">Button</a>
                </div>
                </div>    
            </div>
            

            









            )}</h1>  
     
        </div>
    )
}

export default Blog;
