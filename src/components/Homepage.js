import { useState } from "react";
import { countries } from "./Data";
import { cotegary } from "./Data";
import { CompleteCard } from "./completeCard";

const Homepage = () => {
  const countryName = Object.keys(countries);
  let [countryBtn, setCountryBtn] = useState(false);
  let [cotegoryBtn, setCotegaryBtn] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCotegary, setSelectedCotegary] = useState("business");
  console.log(selectedCotegary, selectedCountry);

  return (
    <div className="Homepage">
      <>
        {/* Navegación Superior */}
        <nav className="bg-blue-500 p-4 flex items-center justify-between">
          <div className="flex ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtZ0s1S8esRBxG4P6pfTG0qeSnLsc3NoKEuwWLcd6TdfcUrSU7xGHrCT47TLma4DpZqg&usqp=CAU"
              width="50px"
              height="50px"
              alt="logo"
            ></img>
            <h1
              style={{ fontSize: "30px" }}
              className="mt-2 pl-4 text-white text-xl font-semibold"
            >
              India Tv
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white">Profile</span>
            <i className="fas fa-user-circle text-white text-2xl" />
          </div>
        </nav>
        {/* Navegación lateral */}
        <div className="grid grid-cols-5">
          <div className="bg-gray-800 text-white w-100 min-h-screen p-4">
            <nav>
              <ul className="space-y-2">
                {/* country option  */}
                <li className="opcion-con-desplegable">
                  <div
                    className="flex items-center justify-between p-2 hover:bg-gray-700 hover:cursor-pointer"
                    onClick={() => {
                      return setCountryBtn(!countryBtn);
                    }}
                  >
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      <span>Countries</span>
                    </div>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                  <div
                    className={
                      countryBtn
                        ? "desplegable ml-4 "
                        : "desplegable ml-4 hidden "
                    }
                  >
                    {countryName.map((value, index) => {
                      return (
                        <li key={index}>
                          <div
                            onClick={() => {
                              return setSelectedCountry(value);
                            }}
                            className={
                              value === selectedCountry
                                ? "block p-2  bg-sky-400 flex items-center"
                                : "block p-2 hover:bg-gray-700 flex items-center"
                            }
                          >
                            <i className="fas fa-chevron-right mr-2 text-xs" />
                            {value}
                          </div>
                        </li>
                      );
                    })}
                  </div>
                </li>
                {/* Cotegary option */}
                <li className="opcion-con-desplegable">
                  <div
                    className="flex items-center justify-between p-2 hover:bg-gray-700 hover:cursor-pointer"
                    onClick={() => {
                      return setCotegaryBtn(!cotegoryBtn);
                    }}
                  >
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      <span>Cotegary</span>
                    </div>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                  <div
                    className={
                      cotegoryBtn
                        ? "desplegable ml-4 "
                        : "desplegable ml-4 hidden"
                    }
                  >
                    {cotegary.map((value, index) => {
                      return (
                        <li key={index}>
                          <div
                            onClick={() => {
                              setSelectedCotegary(value);
                            }}
                            className={
                              value === selectedCotegary
                                ? "block p-2  bg-sky-400 flex items-center"
                                : "block p-2 hover:bg-gray-700 flex items-center"
                            }
                            // className="block p-2 hover:bg-gray-700 bg-sky-400 flex items-center"
                          >
                            <i className="fas fa-chevron-right mr-2 text-xs" />
                            {value}
                          </div>
                        </li>
                      );
                    })}
                  </div>
                </li>

                {/* Agrega más enlaces para la navegación lateral */}
              </ul>
            </nav>
          </div>

          {/*================= Card content goes here======================*/}
          <div className="col-span-4 m-2 border border-gray-200 rounded bg-gray-300">
            {" "}
            <CompleteCard
              selectedCountry={selectedCountry}
              selectedCotegary={selectedCotegary}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default Homepage;
