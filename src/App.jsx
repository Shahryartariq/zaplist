import { useState } from "react";

import TodosList from "./components/TodosList";
import MainHeader from "./components/MainHeader";
import "./App.css";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <TodosList 
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}

        />
      </main>
    </>
  );
}

export default App;
