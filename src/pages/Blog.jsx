import jsPDF from 'jspdf';
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';


const Blog = () => {

    const downloadPdf = () => {

        const doc = new jsPDF("landscape", "px", "a4", "false")
        doc.text("This blog page short summary", 20, 30)


        doc.text("In software development, there are two types of components: uncontrolled and controlled. \n Uncontrolled components rely on the browser or environment, while controlled components \n are managed by the application code.  React PropTypes is a way to \n validate props in components. \n Node.js is a runtime environment for executing JavaScript code outside of a web browser, primarily \n used for building server-side applications. \n Custom hooks are a useful tool in React for reusing logic across components.", 20, 50);

        doc.save("blog-information.pdf")
    }

    return (
        <div className="max-w-[1240px] mx-auto mb-24">
            <h1 className="text-center text-4xl font-semibold mt-6">Answer to the some <span className="text-[#d77002] font-extrabold">Question ?</span></h1>
            <div className=" grid md:grid-cols-2 gap-8  mt-24">
                <div className="border p-5 rounded shadow-md">
                    <h1 className="text-2xl font-extrabold text-red-900 mb-8">1. Tell us the differences between uncontrolled and controlled components ?</h1>
                    <p className="text-justify text-gray-500">In the context of software development, uncontrolled and controlled components refer to two different types of software components.Uncontrolled components are those that are managed entirely by the browser or the environment in which the application is running. These components are not directly managed by the application code, and their behavior is not entirely predictable. Examples of uncontrolled components include form inputs, browser alerts, and modals.are managed entirely by the application code. These  Controlled components provide more control and predictability over their behavior, while uncontrolled components may have unpredictable behavior due to their reliance on the environment.</p>
                </div>
                <div className="border p-5 rounded shadow-md">
                    <h1 className="text-2xl font-extrabold text-red-900 mb-8">2. How to validate React props using PropTypes ?</h1>
                    <p className="text-justify text-gray-500 bottom-0">React PropTypes is a way to validate the props passed to React components. PropTypes is a separate package that needs to be installed separately. Once installed, you can import it in your React component and define the PropTypes for the props that are passed to the component. Here's an example of how to use PropTypes to validate props in a React component:components have their state and behavior managed by the application, environment in which the application is running. Controlled components provide more control and predictability over their behavior, while uncontrolled components may have unpredictable behavior due to their reliance on the environment.use PropTypes to validate props in a React component:components have their state and behavior managed by the application,</p>
                </div>
                <div className="border p-5 rounded shadow-md">
                    <h1 className="text-2xl font-extrabold text-red-900 mb-8">3. Tell us the difference between nodejs and express js. ?</h1>
                    <p className="text-justify text-gray-500 bottom-0">Node.js and Express.js are two different technologies used in web development. Here's a brief overview of the differences between the two:Node.js: Node.js is a runtime environment for executing JavaScript code outside of a web browser. It is built on top of the V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it ideal for building scalable, networked applications. Node.js is mainly used for building server-side applications such as APIs, web servers, and real-time applications.used for building server-side applications such as APIs, web servers, and real-time applications.used for building server-side applications such as APIs, web servers, and real-time applications.nd real-time applications.used for building server-side applications custom hook can be useful</p>
                </div>
                <div className="border p-5 rounded shadow-md">
                    <h1 className="text-2xl font-extrabold text-red-900 mb-8">4. What is a custom hook, and why will you create a custom hook ?</h1>
                    <p className="text-justify text-gray-500 bottom-0">In React, a custom hook is a JavaScript function that allows you to reuse logic across components. Custom hooks allow you to extract reusable logic from your components, making it easier to maintain and test your code. Creating a  in several scenarios. Here are a few examplesevent-driven, non-blocking I/O model that makes it ideal for building scalable, networked applications. Node.js is mainly used for building server-side applications such as APIs, web servers, and real-time applications.used for building server-side applications such as APIs, web servers, and real-time applications.used for building server-side applications such as APIs, web servers, and real-time applications.nd real-time applications.used for building server-side applications </p>
                </div>

            </div>
            <button onClick={downloadPdf} className='bg-[#d77002] mx-auto p-3 rounded flex gap-2 items-center mb-8 text-white text-center font-semibold mt-20'> Download PDF <span> <AiOutlineDownload /></span></button>
        </div>
    );
};

export default Blog;