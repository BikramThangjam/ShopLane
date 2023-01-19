import "./Signup.css"

const Signup = ()=>{
    return (
        <div className="signup-form">
            <div className="align">
                <div className="grid">
                    <form action="#" method="#" className="form login">
                        <div className="form__field">
                            <label for="login__username">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg>
                            </label>
                            <input id="login__username" type="text" name="username" className="form__input" placeholder="Username" required/>
                        </div>
                        <div className="form__field">
                            <label for="login__email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                            </label>
                            <input id="login__email" type="email" name="email" className="form__input" placeholder="Email" required/>
                        </div>
                        <div className="form__field">
                            <label for="login__password">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg>
                            </label>
                            <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required/>
                        </div>
                        <div className="form__field">
                            <label for="login__confirmPassword">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg>
                            </label>
                            <input id="login__confirmPassword" type="password" name="confirmPassword" className="form__input" placeholder="Confirm Password" required/>
                        </div>
                        <div className="form__field">
                            <input id="signup_checkbox" type="checkbox" name="terms" className="me-2" value="true"/>
                            <span for="terms">I agree to the terms & conditions</span>
                        </div>
                        <div className="form__field">
                            <input type="submit" value="Sign Up"/>
                        </div>
                    </form>
                    <p className="text--center">Already have an account? <a href="#">Sign in now</a> <svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/icons.svg#arrow-right"></use></svg></p>
                </div>     
            </div>
        </div >
    )
}

export default Signup;