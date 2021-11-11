import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';


const AboutPage = () =>{
    return (
        // <main>
        //     <title>About Project</title>
        //     <h1>关于数据分发共享组件</h1>
            
        //     <Link to="/">Back to Home</Link>
        //     <p>Blah, blah, blah ...</p>
        // </main>
        <Layout pageTitle="About">
            <p>关于数据分发共享组件</p>
        </Layout>
    )
}

export default AboutPage;
