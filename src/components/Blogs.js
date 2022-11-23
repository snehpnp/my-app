import React from 'react';
import { Link,Outlet } from 'react-router-dom'

const Blogs = () => {
    return (
        <>
<h1>Welcome to State</h1>
<Link className="nav-link" to='user' >Welcome State...</Link>
<Link className="nav-link" to='kika' >Welcome kika...</Link>
<Link className="nav-link" to='sneh' >Welcome sneh...</Link>
<Outlet />
        </>
    );
}

export default Blogs;
