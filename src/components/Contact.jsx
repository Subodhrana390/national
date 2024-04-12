import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div class="top_section">
        <div class="container  flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>Questions, complain, feedback --- we're here for it all.</p>
        </div>
      </div>

      <div class="contact_form container">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg p-4">
          <div class="form_banner bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <figure class="figure flex justify-center items-center">
              <i class="fa-solid fa-envelope-open-text"></i>
            </figure>
            <figcaption class="figure-caption text-center font-medium text-sm">
              If you have questions or just want to get in touch, use the form.
              We look forward to hearing from you!
            </figcaption>
          </div>
          <div class="form_data bg-gray-200 p-4 rounded-lg ">
            <h2 class="text-center mb-2">Get in Touch</h2>
            <div>
              <label for="validationDefault01" class="form-label">
                Full name
              </label>
              <input
                type="text"
                class="form-control block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="validationDefault01"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label for="phone" class="form-label">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="form-control block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Enter your contact no"
              />
            </div>
            <div>
              <label for="phone" class="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                class="form-control block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div class="mt-3">
              <button
                class="btn btn-primary submit_btn block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
