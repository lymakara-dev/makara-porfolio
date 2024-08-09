import React from "react";
import { Input } from "@nextui-org/react";

export default function App() {
  return (
    <section className="bg-white">
      <div className="p-8">
        <h2 className="text-gray-900 text-4xl text-center font-extrabold mb-4 tracking-tight">
          Contact Me
        </h2>
        <div className="flex flex-col items-center">
          <form action="#" className="space-y-8 md:w-1/2 w-full">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <Input
                type="email"
                placeholder="name@gmail.com"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-transparent focus:outline-none nextui-input-override"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <Input
                type="text"
                placeholder="Let us know how we can help you"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-transparent focus:outline-none nextui-input-override"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <Input
                type="text"
                placeholder="Leave a comment..."
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-transparent focus:outline-none nextui-input-override"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 font-medium text-sm text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
