import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="items-center justify-center">
      <footer className="text-white body-font">
          <div className="px-2 py-2 mx-auto flex items-center sm:flex-row flex-col">
              <span className="flex title-font font-medium items-center md:justify-start justify-center text-black">
                  <p className="ml-3 mt-4 text-xl">CodeWithShikhar</p>
                  </span>
              <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">Copyright © 2022-2023</p>
          </div>
      </footer>
  </div>
    )
  }
};
