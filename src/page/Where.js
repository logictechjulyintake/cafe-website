import React from "react";
import MapImg from "../img/map.jpg";

function Where() {
  return (
    <>
      <div id="where">
        <div className="text-white flex justify-center m-10 ">
          <span className="bg-black w-40 h-7 flex justify-center">
            WHERE TO FIND US
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[700px]">
            <p>Find us at some address at some place.</p>

            <div
              className=" h-[400px] box-border bg-cover grayscale my-7"
              style={{ backgroundImage: `url(${MapImg})` }}
            ></div>

            <div>
              <spam className="bg-black text-white">FYI!</spam>

              <spam>
                {" "}
                We offer full-service catering for any event, large or small. We
                understand your needs and we will cater the food to satisfy the
                biggerst criteria of them all, both look and taste.
              </spam>
              <div className="my-4">
                <b>Reserve</b>
                <span>
                  a table, ask for today's special or just send us a message:
                </span>
              </div>
              <form>
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="number"
                  placeholder="How many people"
                  required
                />
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="datetime-local"
                  defaultValue="2020-11-16T20:00"
                  placeholder="Date and time"
                />
                <input
                  className="bg-slate-300 w-full h-12 p-2 my-2"
                  type="text"
                  placeholder="Message \ Special requirements"
                  required
                />
                <div className="bg-black text-white flex justify-center w-32 h-10 mt-2">
                  <button>SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Where;
