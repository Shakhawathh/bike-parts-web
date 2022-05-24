import React from 'react';

const Blog = () => {
    return (
        <div className='text-left bg-[#BAE8E8]'>

            <h1 className='text-2xl font-bold'> 1: How will you improve the performance of a React Application?</h1>
            <br />
            <p>he performance of a website or web application is measured objectively and is based on the user’s experience.There are some key features available in react, that you want to enhance the performance of the application.React provides the “PureComponent” base class for class components. Components that expand the React framework.</p>
            <br />
            <br />
            <h1 className='text-2xl font-bold'> 2: How will you improve the performance of a React Application?</h1>
            <br />
            <p>There are four main types of state you need to properly manage in your React apps:
                <ul>
                    <li>1.Local state</li>
                    <li>2.Global state</li>
                    <li>3.Server state</li>
                    <li>4.URL state</li>
                </ul>
            </p>

            <h1 className='text-2xl font-bold'> 3:  How does prototypical inheritance work?</h1>
            <br />
            <p>In this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance.</p>
            <br />
            <br />
            <h1 className='text-2xl font-bold'> 4: What is a unit test? Why should write unit tests??</h1>
            <br />
            <p>If any problems persist, they should ideally be taken care of earlier on so that they don’t show up when the final version is sent out to clients. Software unit testing mainly involves checking individual modules for errors..</p>
            <br />
            <br />
            <h1 className='text-2xl font-bold'> 5:Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
            <br />
            <p>Hooks are a more direct way to use the React features you already know — such as state, lifecycle, context, and refs. They don’t fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant.</p>
            <br />
            <br />

        </div>
    );
};

export default Blog;