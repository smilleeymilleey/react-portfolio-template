import React from 'react'

function Blog() {       
    var data = {rss: "https://medium.com/feed/@username"}
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40caitlynmiley-cm')
        .then(
            function(response) {
        if (response.status == 'ok') {
         var output = '';

        }
console.log(data)
});



    return (
        <div>
          <h1>Test</h1>  
     
        </div>
    )
}

export default Blog;
