import React from 'react'
import LeftSidebar from '../sidebar/LeftSidebar'

export default function Tags() {
    const tagsList = [
        {
          tagName: "javascript",
          tagDesc:
            "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
        },
        {
          tagName: "python",
          tagDesc:
            "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax.",
        },
        {
          tagName: "c#",
          tagDesc:
            "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft",
        },
        {
          tagName: "java",
          tagDesc:
            "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. ",
        },
        {
          tagName: "php",
          tagDesc:
            "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development",
        },
        {
          tagName: "html",
          tagDesc:
            "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.",
        },
        {
          tagName: "android",
          tagDesc:
            "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT).",
        },
        {
          tagName: "css",
          tagDesc:
            "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations",
        },
        {
          tagName: "Reactjs",
          tagDesc:
            "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible.",
        },
        {
          tagName: "node.js",
          tagDesc:
            "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. ",
        },
      ];
  return (
    <div className='Tag-sidebar-1'>
        <LeftSidebar/>
      <div className='Tag-sidebar-3' style={{backgroundColor:"gray"}}>
       <h1 style={{marginRight:"800px"}}>Tags</h1>
       <p style={{marginRight:"400px",fontWeight:"bold"}}>
        A tag is a keyword or label that categorizes your question with other,
        similar questions.
       </p>
       <p style={{marginRight:"400px",fontWeight:"bold"}}>
       Using the right tags makes it easier for others to find and answer
       your question.
       </p>

       <div className=' p-tags'>
        {
            tagsList.map((tag) => (
               <div key={tag} className=' p-tags-in'>
                <div className='p-tags-in-2'>
                <h4 style={{color:"skyblue",backgroundColor:"light",width:"80px",fontWeight:"bold"}}>{tag.tagName}</h4>
                <p>{tag.tagDesc}</p>
                </div>
               </div>


            ))
        }

       </div>

      </div>
    </div>
  )
}
