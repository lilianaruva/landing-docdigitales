import React from "react";
import logo from "../../img/home/DD_Logo.svg"
import './style.css'

const ServiceTest = () => {
  return (
    <>
			<div className="flex h-screen service-background-color">
				<div className="m-auto">
					<div className="flex py-[30px]">
						<div className="m-auto">
							<img src={logo} className="self-center" style={{ width:"200px"}} alt="DD_Logo" />
						</div>
					</div>
					<div class="shadow-[0px_3px_20px_#B9CCEF80] px-8 pt-6 pb-8 mb-4 flex" style={{ background:'white' }}>
						<div class="mb-4">
							<label class="block text-grey-darker text-sm font-bold mb-2" for="username">
								Username
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
						</div>
						<div class="mb-6">
							<label class="block text-grey-darker text-sm font-bold mb-2" for="password">
								Password
							</label>
							<input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
							<p class="text-red text-xs italic">Please choose a password.</p>
						</div>
						<div class="flex items-center justify-between">
							<button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
								Sign In
							</button>
							<a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
								Forgot Password?
							</a>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};

export default ServiceTest;
