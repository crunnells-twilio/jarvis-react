import React, { useState } from "react";
import Profile from "./Profile";
import Transcript from "./Transcript";
import Recommendations from "./Recommendations";

const Main = () => {

  return (
    <main class="d-flex flex-nowrap">

      <div class="container-fluid viewport">
        <div class="row min-vh-100">
          <div class="col-8 g-0 bg-light text-dark">
            <p class="fs-5 fw-light ms-2 my-2"><i class="bi bi-person-circle"></i> Patient Profile</p>
            <div class="border-top border-bottom border-2 border-dark h-25 overflow-scroll">
              <Profile />
            </div>
            <p class="fs-5 fw-light ms-2 my-2"><i class="bi bi-check-square-fill"></i> Recommendations</p>
            <div class="container">
              <Recommendations />
            </div>
          </div>
          <Transcript />
        </div>
      </div>
    </main>
  );
};

export default Main;