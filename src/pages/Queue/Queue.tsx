import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import ModalWrapper from "components/ModalWrapper";
import MovieModal from "components/Modals/MovieModal";
import Loader from "components/Loader";
import { doc, getDoc } from "firebase/firestore";

import { Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { setLoader } from "redux/dataSlice/dataSlice";
import { db } from "services/firebase";
import { useToggle } from "hooks";
import { useAuth } from "hooks/useAuth";

interface IElement {
  id: number;
  poster_path?: string | undefined;
  name?: string;
  overview: string;
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
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.dataReducer.isLoading);

  const { id: userId } = useAuth();

  const [queueData, setQueueData] = useState<any>([]);

  const getQueueList = async () => {
    try {
      dispatch(setLoader(true));
      const docRef = doc(db, "users", `${userId}`);
      const queueList = await getDoc(docRef);
      const list = queueList.data();
      if (list) {
        dispatch(setLoader(false));
        setQueueData(list.queue);
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getQueueList();
  }, [userId]);

  const [value, toggle, setValue] = useToggle();
  const [id, setId] = useState(0);

  const handleModal = (id: number) => {
    toggle();
    setId(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (queueData.length === 0) {
    return <>Queue</>;
  } else {
    return (
      <>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            tablet: "repeat(2, 1fr)",
            laptop: "repeat(3, 1fr)",
          }}
          gap={{ xs: 0, tablet: 2 }}
          sx={{ justifyItems: { mobile: "center" } }}
        >
          {queueData.map((element: IElement) => (
            <Box
              gridColumn="span 1"
              key={element.id}
              onClick={() => handleModal(element.id)}
            >
              <MovieCard data={element} />
            </Box>
          ))}
        </Box>

        <ModalWrapper open={value} onClose={() => setValue(false)}>
          <MovieModal
            onClose={() => setValue(false)}
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
