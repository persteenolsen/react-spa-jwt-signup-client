import React from 'react';


class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                   
        };
    }

    componentDidMount() {
     
    }

    render() {

        return (
         
		   <div className="container">
                        
			<div className="row">
                            
			 <div className="col-xs-auto col-md-auto" >
		              
          <br />
		  
<h3>Description</h3>

  
This React SPA Client work together with a secure Node.js and Express serving as a Membership System of Users 
<br/> <br/>

<b>Last Updated</b>
<ul>
 <li>06-10-2021</li>
</ul>

<b>Main functionality</b>
<ul>
  
   <li>It is possible to register and obtain an Account and perform a Login</li>
   <li>A User can delete own Account after performing successfully login</li>
   
</ul>

<b>Module Bundler</b>
 <ul>
   
  <li>Manuel configuration of the Webpack 4 serving as a module bundler</li>

</ul>


<b>Security</b>
 
 <ul>

   <li>The Passwords of the Users are encrypted by BCRYPT before stored in the database</li>
   <li>The login system is using a JSON Web Token ( JWT )</li>
   <li>The user will have access to the secure endpoints of 
       the Web API passing login and using the JWT</li>
   <li>The endpoints of the Web API are secured by JWT</li>
   <li>The Web API is secured by CORS allowing only the 
       subdomain containing the SPA client making HTTPS request</li>

  </ul>


 <b>The React Single Page Application - The frontend</b>

  <ul>
 
   <li>React</li>
   <li>HTML and CSS</li>
   <li>Mainly JavaScript ES5, ES6 and ES7</li>
   <li>Traditionel Bootstrap 4 by CDN for the responsive design</li>

</ul>

<b>Node.js and Express Web API - The backend</b>
 
 <ul>

 <li>Node.js</li>
 <li>Express</li>

</ul>

<b>The Database</b>
<ul>

 <li>MySQL as the database</li>

</ul>

<b>Hosting</b>
<ul>
 <li>The React SPA client is hosted at a traditionel Webhotel on an IIS</li>
 <li>The Node.js and Express Web API is hosted on Microsoft Azure with iisnode</li>
</ul>

<b>Text Editor</b>
<ul>

<li>Visual Studio Code as Text Editor</li>

</ul>

<b>Testing</b>
<ul>
<li>Test Driven Developement and Unit Testing all the way developing the system</li>
</ul>


        </div>

	    </div>
		
		</div>
	   
	   
      );

    }
}

export { AboutPage };