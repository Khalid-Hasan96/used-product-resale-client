import React from 'react';

const Blog = () => {
      return (
            <div className='my-14 '>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Welcome to Blog of PC Buy</h2>
                  <div className='max-w-screen-xl mx-auto'>
                        <div className='p-10 bg-neutral text-neutral-content rounded-2xl text-center mt-3'>
                              <h4 className='text-2xl font-semibold'>What are the different ways to manage a state in a React application?</h4>
                              <div className='divider'>Answer</div>
                              <p className='text-lg text-justify'>There are four main types of state we need to properly manage in our React apps:

                                    <li>Local state</li>
                                    <li>Global state</li>
                                    <li>Server state</li>
                                    <li>URL state</li>
                                    <br />
                                    <span>
                                          <strong>Local state:</strong> Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. useState is the first tool we should reach for to manage state in our components. It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function.
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                          <strong>Global state:</strong> Global state is data we manage across multiple components.  Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Many developers use built-in React features like the Context API to manage their state.
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                          <strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time we fetch or update data from an external server, including loading and error state.  Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                          <strong>URL state:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                                          In many cases, a lot of major parts of our application rely upon accessing URL state.
                                    </span>

                              </p>
                        </div>
                        <div className='p-10 bg-neutral text-neutral-content rounded-2xl text-center mt-3'>
                              <h4 className='text-2xl font-semibold'>How does prototypical inheritance work?</h4>
                              <div className='divider'>Answer</div>
                              <p className='text-lg text-justify'>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                        </div>
                        <div className='p-10 bg-neutral text-neutral-content rounded-2xl text-center mt-3'>
                              <h4 className='text-2xl font-semibold'>What is a unit test? Why should we write unit tests?</h4>
                              <div className='divider'>Answer</div>
                              <p className='text-lg text-justify'>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.</p>
                        </div>
                        <div className='p-10 bg-neutral text-neutral-content rounded-2xl text-center mt-3'>
                              <h4 className='text-2xl font-semibold'>React vs. Angular vs. Vue?</h4>
                              <div className='divider'>Answer</div>
                              <p className='text-lg text-justify'><span>
                                    <strong>Angular</strong> is a front-end framework with lots of components, services, and tools. On Angular’s site, we can see that they define Angular as:

                                    <blockquote>“The modern web developer’s platform”</blockquote>

                                    It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube. Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.
                              </span>
                                    <br /><br />


                                    <span>
                                          <strong>React</strong> is considered a UI library. They define themselves as:

                                          <blockquote> “A JavaScript library for building user interfaces”</blockquote>

                                          Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React. React doesn’t propose a specific structure to be followed, and with only a few lines of code we can have a simple React application. We can identify two kinds of blocks inside a React project: Elements and Components. They are written in JSX, a syntax extension that allows us to create elements that contain HTML and JavaScript at the same time.
                                    </span>
                                    <br /><br />
                                    <span> Last but not least, <strong>Vue.js</strong> is, according to its site:

                                          <blockquote>“A progressive JavaScript framework”</blockquote>

                                          Vue.js is developed and led by Evan You, but also it counts on a huge open-source community. The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components. Components in Vue.js are written in Single File Components (SFC) with the extension .vue. Inside these files, there are:

                                          <li>The JavaScript logic</li>
                                          <li>The HTML template (Vue.js has its own templates)</li>
                                          <li>The stylesheet in either CSS or SCSS</li>
                                    </span>
                                    <br />
                                    These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative.</p>
                        </div>
                  </div>
            </div >
      );
};

export default Blog;