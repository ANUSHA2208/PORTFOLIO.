import React from "react";

const Header = () => {
  return (
    <div className="pt-32 lg:pl-48 md:pl-32 sm:pl-10">
      <div class="grid grid-rows-2 grid-flow-col gap-0">
     <p className="float-left mb-0">Hi I'm Anusha👋</p>
        <div>
          <ul>
            <li>
              <a href="mailto:anushapatil2208@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anusha-patil-167b79162/">Linkedin</a>
            </li>
            <li>
              <a href="tel:8971232721">Phone no.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
