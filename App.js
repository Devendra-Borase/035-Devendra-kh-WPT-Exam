import { useState } from "react";


function App() {
  return (
    <div >
      <h1 className="bg-dark text-light">MyChatApp</h1>
      <div> by Devendra Borase-035_kh</div>

      <send />

    </div>
  );
}

export default App;

function Send() {
  const [chat, setChat] = useState("");
  const [list, setlist] = useState("");

  const handleChat = (e) => {
    setChat(e.target.value);
  };

  const send = () => {
    const newList = [...chat];
    setlist(newList);
    setChat("");
  };

  return (
    <div>
      <div classsName="container">
        <div className="row">
          <div classsName="col-8">
            <input
              className="form-control "
              type="text"
              placeholder="Lets chat here.."
              value={chat}
              onChange={handleChat}
            />
          </div>
          <div classsName="col-4">
            <input
              className="form-control"
              type="button"
              value="SEND"
              onClick={send}
            />
          </div>
        </div>



      </div>

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}


    </div>
  );


}
