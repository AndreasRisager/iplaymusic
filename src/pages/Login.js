// src/pages/Login.js
import "./Login.css";
import { Link } from "@reach/router";

export default function Login() {
    return (
        <main className="loginPage">
            <h1 className="loginPage__heading">Log In</h1>
            <article>
                <form className="loginPage__form">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"/>
                    <Link to="/" type="submit">Log in</Link>
                </form>
                <div className="loginPage__touch">
                    <button className="loginPage__touchBtn">
                        <img src="./images/finger-print.png" alt="finger print"/>
                    </button>
                    <p>One-Touch Login</p>
                </div>
            </article>
        </main>
    )
}
