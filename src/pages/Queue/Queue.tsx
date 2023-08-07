import { useState, useEffect } from "react";

import MovieList from "components/MovieList/MovieList";
import MovieCard from "components/MovieCard";
import ModalWrapper from "components/ModalWrapper";
import MovieModal from "components/Modals/MovieModal";
import MovieSkeleton from "components/MovieSkeleton";
import { doc, onSnapshot } from "firebase/firestore";

import { Box } from "@mui/material";

import { useAppDispatch } from "hooks/hooks";
import { setLoader } from "redux/dataSlice/dataSlice";
import { db } from "services/firebase";
import { useToggle, useAuth, useData } from "hooks";

interface IElement {
  id: number;
  poster_path?: string | undefined;
  name?: string;
  overview?: string | undefined;
  vote_average: number;
  popularity: number;
  original_name: string;
  vote_count: number;
  first_air_date: string;
  release_date: string;
  title?: string | undefined;
  genre_ids: number[];
}

const Queue = () => {
  const [openModal, toggle, setOpenModal] = useToggle();
  const [id, setId] = useState(0);

  const dispatch = useAppDispatch();

  const { isLoading } = useData();
  const { id: userId } = useAuth();

  const [queueData, setQueueData] = useState<any>([]);

  const getQueueList = async () => {
    try {
      dispatch(setLoader(true));
      const docRef = doc(db, "users", `${userId}`);
      await onSnapshot(docRef, (doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // Ця умова закриває модальне вікно після того як відбулося видалення елементу
        // із модального вікна і масив оновився, коли ми знаходимося на сторінці Queue.
        if (source === "Local") {
          setOpenModal(false);
        }
        const list = doc.data();
        if (list) {
          dispatch(setLoader(false));
          setQueueData(list.queue);
        }
      });
    } catch (error) {
      console.log(error);
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getQueueList();
  }, [userId]);

  const handleModal = (id: number) => {
    toggle();
    setId(id);
  };

  if (isLoading) {
    return <MovieSkeleton />;
  }

  if (queueData.length === 0) {
    return <>Queue</>;
  } else {
    return (
      <>
        <MovieList>
          {queueData.map((element: IElement) => (
            <Box
              gridColumn="span 1"
              key={element.id}
              onClick={() => handleModal(element.id)}
            >
              <MovieCard data={element} />
            </Box>
          ))}
        </MovieList>

        <ModalWrapper open={openModal} onClose={() => setOpenModal(false)}>
          <MovieModal
            onClose={() => setOpenModal(false)}
            id={id}
            data={queueData}
            isQueue={true}
          />
        </ModalWrapper>
      </>
    );
  }
};

export default Queue;
