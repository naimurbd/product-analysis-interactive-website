import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (

        <div >
            <div className='blog-container'>
                <h1> What is Semantic tag? </h1>
                <p>
                    Semantic tag clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.Semantic tag also helps search engines to parse the webpage correctly. And it finds accurate information. Thus, helping search engines to correctly index the page.
                </p>
            </div>
            <div className='blog-container'>
                <h1>What is Context API?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It returns a consumer and a provider. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

                </p>
            </div>

        </div>
    );
};

export default Blogs;