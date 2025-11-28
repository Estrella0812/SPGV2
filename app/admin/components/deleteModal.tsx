'use client'

import { useState } from 'react'
import { deleteRow } from '../delete/handleDelete';
import { redirect } from 'next/navigation';

interface Career {
    title: string;
    id: number;
    onClose: () => void;
}

export default function DeleteModal({ title, id, onClose }: Career){

    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
  
    const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
      const expectedInput = `Delete ${title}`
      if (input.trim() !== expectedInput) {
        setError(`Please type "${expectedInput}" correctly.`);
        return;
      }
  
      // Call Supabase delete function
      const deleteError = await deleteRow(id);
  
      if (deleteError) {
        setError(deleteError);
      } else {
        setError(null);
        onClose();
        redirect('/admin');
      }
    }

    return(
        <div id="authentication-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full bg-black/50">
            <div className="relative p-4 w-full max-w-md max-h-full -top-20">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Are you sure?
                        </h3>
                        <button onClick={onClose} type="button" className="end-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}
                        <form className="space-y-4" onSubmit={handleDelete}>
                            <div>
                                <p className="block text-md font-medium text-gray-900">To confirm deletation, please type</p>
                                <p className="block mb-2 text-md font-medium text-gray-900">"Delete {title}"</p>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder={`Delete ${title}`}
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 

    )
}