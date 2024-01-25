import React from "react";

const Transcript = () => {

    return (
        <div class="col-4 p-3 bg-dark text-light">
        <p class="fs-5 fw-light text-center mt-1"><i class="bi bi-chat-right-text"></i> Live Transcript</p>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-10">
              <div class="card text-dark bg-info mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2">Sudheer Chekka, MD</h6>
                  <p class="card-text">Hi John, my name is doctor Chekka. It's nice to meet you.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-10">
              <div class="card text-dark bg-light mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2">John Doe</h6>
                  <p class="card-text">Hi doctor, nice to meet you as well.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="col-10">
              <div class="card text-dark bg-info mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2">Sudheer Chekka, MD</h6>
                  <p class="card-text">I understand you have been complaining of pain in your wrists. What's going on?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-10">
              <div class="card text-dark bg-light mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2">John Doe</h6>
                  <p class="card-text">yes that's right</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="d-flex justify-content-center mt-4">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

      </div>
    );
};

export default Transcript;