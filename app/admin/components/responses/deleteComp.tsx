"use client"

import {useState} from 'react';
import DeleteModal from '../deleteModal';

interface Career {
    title: string;
    id: number;
}

export default function DeleteComp({title, id}: Career) {
    const [visible, setModalVisibility] = useState(false);

    const closeModal = () => setModalVisibility(false);
  
    return (
      <>
        <button
          onClick={() => setModalVisibility(!visible)}
          className=" text-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800 transition"
        >
            Delete
        </button>
        {visible && <DeleteModal title={title} id={id} onClose={closeModal}/>}
      </>
    );
  }