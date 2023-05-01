import { useState } from "react";

const Section = ({ title, description, name, isVisibel, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      {isVisibel ? (
        <>
          <button
            onClick={() => setIsVisible("")}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsVisible(name)}
            className="cursor-pointer underline"
          >
            Show
          </button>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibelSection, setVisibleSection] = useState("team");
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 m-2">Instamart </h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        name="about"
        isVisibel={visibelSection === "about"}
        setIsVisible={(x) => {
          setVisibleSection(x);
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        name="team"
        isVisibel={visibelSection === "team"}
        setIsVisible={(x) => {
          setVisibleSection(x);
        }}
      />
      <Section
        title={"Carriers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        name={"carrier"}
        isVisibel={visibelSection === "carrier"}
        setIsVisible={(x) => {
          setVisibleSection(x);
        }}
      />
    </div>
  );
};

export default Instamart;
