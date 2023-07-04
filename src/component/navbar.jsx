import React from 'react';
const NavigationBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
        <div class="container">
          <a class="navbar-brand" >
            AtioCode_
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item m-3">
                <a class="nav-link active" aria-current="page" >
                  Home
                </a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link active" >
                  About me
                </a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link active" >
                  Project
                </a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link active">Gallery</a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link active">Contac me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
