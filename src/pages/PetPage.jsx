// import { GetCounters } from "../services/counter-service";
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { counterCollectionRef } from "../services/db-service";
import { CounterList } from "../components/pets/CounterList";

const PetPage = () => {
  var urlId = window.location.pathname.split("/").pop();
  console.log(urlId);

  const [liveCounters, setLiveCounters] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(counterCollectionRef, (snapshot) => {
      setLiveCounters(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(liveCounters);

  const currentLiveCounters = [];
  for (var i = 0; i < liveCounters.length; i++) {
    if (liveCounters[i].data.linkedPet === urlId) {
      currentLiveCounters.push(liveCounters[i]);
    }
  }
  console.log(currentLiveCounters);
  return <CounterList counters={currentLiveCounters} />;
};

export default PetPage;
