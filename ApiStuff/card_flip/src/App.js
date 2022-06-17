import React from "react";

function RenderJson({ user }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
      {user.map((element) => (
        <div
          key={element.id}
          style={{
            backgroundColor: "pink",
            margin: "5px",
            height: "280px",
          }}
        >
          <h1>{element.first_name}</h1>
          <img src={element.avatar} alt="./" />
          <h3>{element.usename}</h3>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [user, setUser] = React.useState(undefined);

  //React.useEffect(() => {
  const handleClick = async () => {
    // fetch("https://random-data-api.com/api/users/random_user?size=10")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setUser(data);
    //   });
    try {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.log("there is some error while fetching the data");
    }
  };
  // .catch((error) => {
  //   console.log(`There is some problem ${error}`);
  // });
  // }, []);

  return (
    <>
      {user && <RenderJson user={user} />}
      <button onClick={handleClick}>Fetch Random</button>

      {/* {user.map((items) => {
        return (
          // <div>
          //   <li>items.username</li>
          //   <li>items.state</li>
          // </div>
          console.log(items)
        );
      })} */}
    </>
  );
}

export default App;
