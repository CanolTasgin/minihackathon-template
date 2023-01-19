import React, { useState, useEffect } from "react";
import axios from "axios";

const Rooms = () => {
  const [rooms, loadRooms] = useState();

  const getRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/data");
      console.log("res", res);
      loadRooms(res.data.rooms);
    } catch (err) {
      console.error(
        "Error occured while trying to recieve rooms\nError: ",
        err
      );
    }
  };

  useEffect(() => {
    getRooms();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Rooms</h1>
      {/* show all rooms loaded from axios request */}
      <ul>
        {rooms && rooms.map((room) => <li key={room.id}>{room.name}</li>)}
      </ul>
    </div>
  );
};

export default Rooms;
