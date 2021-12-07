# MNIFTY
# Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [Tests](#tests) (not available in this project)
  * [Questions](#questions)

  ## Description  
  An NFT E-commerce site. View self created and seeded "nft's" that are priced for our "MUT Tokens".


  ## Code Snippets
  Here are some code snippets and what they accomplished. This first snippet is found within index.css and is resposible for the main styling for  the product cards. This "glassmorphism" as it is called creates an almost glasslike appearance the looks clean and refined. 
 ```
  .glassCard{
    background-color: rgba(255, 255, 255, 0.1);
    /* fill-opacity: 50%; */

    backdrop-filter: blur(8px);
    padding: 2rem;
    border-radius: 10px;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    outline-style: solid;
    outline-width: 1px;
    outline-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 2px 15px 1px black;
    margin:20px;
    }
 ```

  This second snippet is found within Detail.js. Vanilla Tilt is a library forked from Tilt.js that works in tandem with the glass styling of the cards. When viewing a singular card, this allows for the card to tilt with the user's cursor or gyroscopic enabled smartphone. It also creates a glare effect as if reflecting off of actual glass. 
 ```
    import VanillaTilt from "vanilla-tilt";

    VanillaTilt.init(document.querySelector(".solo-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
            "glare-prerender": false,
        });

        
        return (
            <>
                {currentProduct && cart ? (
                    <div className="card px-1 py-1 glassCard solo-card">
                        <Link to="/">← Back to Products</Link>
                        <h2>{currentProduct.name}</h2>
                        <p>{currentProduct.description}</p>
                        <img
                            src={`/images/${currentProduct.image}`}
                            alt={currentProduct.name}
                        />
                        <p>
                            <strong>Price:</strong> {currentProduct.price} MUT Tokens {' '}
 ```

  The third snippet is found within server/utils/auth.js. This middleware function is responsible for the creation of a json web token (jwt) when a user creates an account and/or logs into an existing account. 
 ```
    module.exports = {
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        console.log(req.body.token, req.query.token)
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
        console.log("authorization token:", token)
        }

        if (!token) {
            return req;
        }

        try {
            console.log(token)
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };
        console.log(jwt.sign({ data: payload }, secret, { expiresIn: expiration }))
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
 ```

  The fourth snippet is found within client/components/nav/index.js. This snippet performs an authentication check using client side auth functions that check the previously created jwt. If the token is valid (not expired) then it will register that the user is logged in and render a navbar with a logout option and past purchase history. If a valid token does not exist, then the navbar will render with sign up and log in options instead. 
 ```
 function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="flex-row navbar menu-nav">
                <h4 className="mx-1">
                  <Link to="/orderHistory" className="links-nav">
                      Purchase History
                  </Link>
                </h4>
                <h4 className="mx-1">
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a className="links-nav" href="/" onClick={() => Auth.logout()}>
                      Logout
                  </a>
                </h4>
              </div>
            );
        } else {
            return(
                <ul className="flex-row  menu-nav ">
                <li className="mx-1">
                  <Link to="/signup" className="links-nav">
                    Signup
                  </Link>
                </li>
                <li className="mx-1">
                  <Link to="/login" className="links-nav">
                    Login
                  </Link>
                </li>
              </ul>     
                )
        }
    }
    return(
        <header className="flex-row px-1 navbar ">
        <h1>
          <Link to="/" className="links-nav mayMainNav">
            MNIFTY
          </Link>
        </h1>
      
        <nav>
          {showNavigation()}
        </nav>
      </header>
    )
 ```

  The fifth snippet is found within client/components/productList/index.js. This JSX snippet uses product information imported from a productItem component in order to render the full list of NFT's presented on the home page. 
 ```
 return (
    <div className="my-2">
      {/* <h2>Our Products:</h2> */}
      {state.products.length ? (
        <div className="flex-row maysSuperItemContainer">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <h3>You have yet to add products.</h3>
      )}
      {loading ? <img src={loadSymbol} alt="loading" /> : null}
    </div>
  );
 ```

  ## Installation
  To install:
 ```
  Once you have a working SSH key added to your Github account, go to the mnifty repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
 ```

 Next, 
 ```
  Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in "git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
 ```

 Lastly, 
 ```
  Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "mnifty". Simply type in "code ." to open it in your code editor of choice. Lastly, check the package.json file  to see the dependencies needed to run this. WIthin your terminal run an npm install.
 ```

  ## Usage
  This app can be used to view various self created "NFT's" by category, create and account, add favorites to a cart, view a grand total cost, and purchase them. 


  ## Built With

 * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
 * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 * [React](https://fontawesome.com/)
 * [Bootstrap](https://getbootstrap.com/)
 * [apollo](https://www.npmjs.com/package/apollo-server-express)
 * [Bcrypt](https://www.npmjs.com/package/bcrypt)
 * [Express](https://www.npmjs.com/package/express)
 * [graphQL](https://www.npmjs.com/package/graphql)
 * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
 * [Mongoose](https://www.npmjs.com/package/mongoose)
 * [Stripe](https://www.npmjs.com/package/stripe)
 * [jwt-decode](https://www.npmjs.com/package/jwt-decode)
 * [react-dom](https://www.npmjs.com/package/react-dom)
 * [react-router-dom](https://www.npmjs.com/package/react-router-dom)
 * [react-scripts](https://www.npmjs.com/package/react-scripts)
 * [web-vitals](https://www.npmjs.com/package/web-vitals)

  ## Deployed Link

 * [Check out the site!!]()

  ## Repo Link
  - [Link to Repo](https://github.com/umeramalek/MNIFTY)


  ## Authors
  * **Umera Malek** 

  - [Link to Portfolio](https://umeramalek.github.io/)
  - [Link to Github](https://github.com/umeramalek)
  - [Link to LinkedIn](https://www.linkedin.com/in/umeramalek/)

  * **Tyler Yeager** 

  - [Link to Portfolio](https://tylerbyeager.github.io/first-portfolio/)
  - [Link to Github](https://github.com/TylerBYeager)
  - [Link to LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

  * **May Faucher** 

  - [Link to Portfolio](https://divinemayura.github.io/react-portfolio-1/)
  - [Link to Github](https://github.com/DivineMayura)
  - [Link to LinkedIn](https://www.linkedin.com/in/mayfaucher/)


  ## Contributions
  - UC Berkeley Coding Bootcamp & its Instructor and TA's
  - BCS learning assistants & tutors
  - Google 

  ## License
  ![License](https://img.shields.io/badge/License-MIT-green.svg) 


  ## Questions
  - mayyfaucher@gmail.com
  - umeramalek796@gmail.com
  - wow_d2@hotmail.com 