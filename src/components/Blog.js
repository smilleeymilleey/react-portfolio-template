import React from 'react'

function Blog() { 
    
 //api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40caitlynmiley-cm'

 function reqListener () {
     console.log(this.responseText);
 }
    const data = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40caitlynmiley-cm"
  
    let request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);
    request.open("GET", data);
    request.send();
        
        




    return (
        <div>
          <h1>Test</h1>  
     
        </div>
    )
}

export default Blog;
