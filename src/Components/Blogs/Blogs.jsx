import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <h4 className='text-center font-semibold text-3xl'> Important Question and Answer </h4>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                When should  we use context api?
                </div>
                <div className="collapse-content">
                    <p>The Context API in React is useful for managing global state in a React application. It allows you to pass data from a parent component down to child components without the need to pass the data through all intermediate components.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What Is Custom Hook?
                </div>
                <div className="collapse-content">
                    <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What Is Useref?
                </div>
                <div className="collapse-content">
                    <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What Is UseMemo?
                </div>
                <div className="collapse-content">
                    <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;