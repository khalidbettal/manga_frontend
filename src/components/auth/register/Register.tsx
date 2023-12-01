
import { Link } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

export default function Login(): JSX.Element {
  return (
    <section className="h-screen sm:mx-10">
      <div className=" h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
                {/* <!-- Username input --> */}
                <TEInput
                type="text"
                label="Username"
                size="lg"
                className="mb-6"
              ></TEInput>

              {/* <!-- Email input --> */}
              <TEInput
                type="email"
                label="Email address"
                size="lg"
                className="mb-6"
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                label="Password"
                className="mb-6"
                size="lg"
              ></TEInput>
 
              {/* <!--Password_confirm input--> */}
              <TEInput
                type="password"
                label="Confirm Password"
                className="mb-6"
                size="lg"
              ></TEInput>


              {/* <!-- Submit button --> */}

              <TERipple rippleColor="light" className="w-full">
                <button
                  type="button"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign Up
                </button>
              </TERipple>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <TERipple rippleColor="light" className="w-full">
                <button
                  className="mb-3 flex w-full items-center justify-center 
                  rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium 
                  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
                  duration-150 ease-in-out hover:bg-primary-600 
                  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none 
                  focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ backgroundColor: "#D42A46" }}
                  role="button"
                >
                  {/* <!-- Google SVG --> */}
                  <svg width="20" height="20" fill="currentColor" 
                  className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 
                  0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 
                  0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 
                  173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                  </path>
                  </svg>
                  Continue with Google
                </button>
              </TERipple>

              <div className="flex items-center mt-4 justify-center">
                <p className="mb-0 mr-2">Already have an account?</p>
              <TERipple rippleColor="light">
                <Link to="/login">
                <button
                  type="button"
                  className="bg-primary text-white active:bg-primary-600 text-xs font-bold 
                  uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 
                  mb-1 ease-linear transition-all duration-150"
                  >
                   Login
                   </button>
                </Link>
                </TERipple>
                 </div>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}