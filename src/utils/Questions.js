const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS"
    },
    {
      question: "Which is not a JavaScript Framework?",
      options: ["React", "Angular", "Vue", "Django"],
      answer: "Django"
    },
    {
      question: "What does HTTP stand for?",
      options: ["Hyper Trainer Text Protocol", "Hyper Text Transfer Protocol", "Hyper Text Trading Protocol", "Hyper Tool Transfer Protocol"],
      answer: "Hyper Text Transfer Protocol"
    },
    {
      question: "What is the full form of SQL?",
      options: ["Stylish Question Language", "Structured Query Language", "Statement Question Language", "Stylized Query Logic"],
      answer: "Structured Query Language"
    },
    {
      question: "Which tag is used to insert an image in HTML?",
      options: ["<image>", "<img>", "<src>", "<pic>"],
      answer: "<img>"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "bgcolor", "background-color", "backgroundImage"],
      answer: "background-color"
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<head>", "<h6>", "<h1>", "<h9>"],
      answer: "<h1>"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["<!-- -->", "//", "**", "##"],
      answer: "//"
    },
    {
      question: "Which company developed React.js?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook"
    },
    {
        question: "What is the purpose of the <title> tag in HTML?",
        options: ["To define the body of the document", "To set the page title in the browser tab", "To add a footer", "To create a hyperlink"],
        answer: "To set the page title in the browser tab"
      },
      {
        question: "Which protocol is used to send web pages over the Internet?",
        options: ["FTP", "SMTP", "HTTP", "SSH"],
        answer: "HTTP"
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
      },
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which CSS property is used to center text?",
        options: ["text-style", "align", "text-align", "font-align"],
        answer: "text-align"
      },
      {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
        answer: "Document Object Model"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<scripting>", "<javascript>", "<script>"],
        answer: "<script>"
      },
      {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
      },
      {
        question: "How can you make a numbered list in HTML?",
        options: ["<ul>", "<ol>", "<dl>", "<list>"],
        answer: "<ol>"
      },
      {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<script file='script.js'>"],
        answer: "<script src='script.js'>"
      },
      {
        question: "Which of the following is a JavaScript data type?",
        options: ["float", "decimal", "boolean", "character"],
        answer: "boolean"
      },
      {
        question: "Which method converts JSON data to a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.convert()"],
        answer: "JSON.parse()"
      },
      {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Program Integration", "Application Page Index", "Active Protocol Interface"],
        answer: "Application Programming Interface"
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
      },
      {
        question: "Which HTML element is used to specify a footer for a document?",
        options: ["<footer>", "<bottom>", "<section>", "<end>"],
        answer: "<footer>"
      },
      {
        question: "What is the default display value of a <div> element?",
        options: ["inline", "block", "inline-block", "none"],
        answer: "block"
      },
      {
        question: "How do you declare a JavaScript variable?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "let:myVar;"],
        answer: "var myVar;"
      },
      {
        question: "Which attribute is used in HTML to provide a unique name to an element?",
        options: ["class", "id", "style", "name"],
        answer: "id"
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["fgcolor", "color", "text-color", "font-color"],
        answer: "color"
      },
      {
        question: "Which of the following is used to add spacing inside an element?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "padding"
      },
      {
        question: "What does the 'this' keyword refer to in JavaScript (in global scope)?",
        options: ["The function it is inside", "The object that called it", "The global object", "A new object"],
        answer: "The global object"
      },
      {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["object", "function", "class", "structure"],
        answer: "class"
      },
      {
        question: "Which HTML tag is used to play video files?",
        options: ["<media>", "<video>", "<movie>", "<player>"],
        answer: "<video>"
      },
      {
        question: "How do you add a comment in a CSS file?",
        options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
        answer: "/* comment */"
      },
      {
        question: "Which of the following is a valid JavaScript array declaration?",
        options: ["let arr = [];", "let arr = {}", "let arr = '';", "let arr = ()"],
        answer: "let arr = [];"
      },
      {
        question: "What does CDN stand for?",
        options: ["Central Distribution Network", "Content Delivery Network", "Centralized Data Network", "Cloud Deployment Network"],
        answer: "Content Delivery Network"
      },
      {
        question: "Which tag is used to define a table row in HTML?",
        options: ["<th>", "<tr>", "<td>", "<table>"],
        answer: "<tr>"
      },
      {
        question: "What does SEO stand for?",
        options: ["Search Engine Operation", "Site Enhancement Optimization", "Search Engine Optimization", "Search Engine Order"],
        answer: "Search Engine Optimization"
      },
      {
        question: "Which of the following is not a valid CSS unit?",
        options: ["px", "em", "rem", "ptx"],
        answer: "ptx"
      },
      {
        question: "Which JavaScript operator is used to assign a value?",
        options: ["=", "==", "===", "!="],
        answer: "="
      },
      {
        question: "What is the correct HTML for creating a text input field?",
        options: ["<input type='text'>", "<textfield>", "<input text='field'>", "<input type='textfield'>"],
        answer: "<input type='text'>"
      },
      {
        question: "Which lifecycle method is called after a component is rendered in React?",
        options: ["componentDidMount", "componentWillMount", "render", "useEffect"],
        answer: "componentDidMount"
      },
      {
        question: "Which React hook is used to manage state?",
        options: ["useRef", "useEffect", "useState", "useMemo"],
        answer: "useState"
      },
      {
        question: "Which function is used to fetch data in JavaScript?",
        options: ["fetch()", "get()", "retrieve()", "pull()"],
        answer: "fetch()"
      },
      {
        question: "Which of these is a CSS framework?",
        options: ["Bootstrap", "React", "Node.js", "MongoDB"],
        answer: "Bootstrap"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "style", "class", "styles"],
        answer: "style"
      },
      {
        question: "What is the correct syntax to import a React component?",
        options: ["import React from 'Component'", "require('Component')", "import Component from './Component'", "include './Component'"],
        answer: "import Component from './Component'"
      },
      {
        question: "Which JavaScript method is used to find the length of a string?",
        options: ["length()", "strLength", "length", "getSize()"],
        answer: "length"
      },
      {
        question: "Which of the following tags is used to define a form in HTML?",
        options: ["<input>", "<form>", "<fieldset>", "<label>"],
        answer: "<form>"
      },
      {
        question: "Which tool is commonly used for version control in development?",
        options: ["Git", "Docker", "VS Code", "Node.js"],
        answer: "Git"
      },
      {
        question: "Which HTTP method is used to update existing data?",
        options: ["GET", "POST", "PUT", "FETCH"],
        answer: "PUT"
      }
      
  ];

  export default questions;