'use client'
import { createPost } from './action';
import CreateResponse from '../components/responses/createResponse';
import { useEffect, useRef, useState } from 'react';
import "quill/dist/quill.snow.css";

export default function CreatePage() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const quillRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  // This will ensure Quill only runs on the client
  useEffect(() => {
    setIsClient(true); // Set to true once client-side rendering has finished
  }, []);

  useEffect(() => {
    if (isClient && quillRef.current) {
      const { default: Quill } = require("quill"); // Dynamically import Quill
      quillInstance.current = new Quill(quillRef.current, {
        theme: "snow", // or "bubble"
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["bold", "italic", "underline"],
            [{ color: [] }],
            ["clean"],
          ],
        },
      });
    }
  }, [isClient]); // Only run this after the client has mounted

  const handleFormAction = async (formData: FormData): Promise<void> => {
    // Add Quill content to FormData
    const quillContent = quillInstance.current?.root.innerHTML; // Get the content as HTML
    formData.append('description', quillContent || ''); // Append the Delta content (or use getText() for plain text)

    const result = await createPost(formData);
    setResult(result);

    // REVALIDATE PAGES IF NEEDED
    // const pathsToRevalidate = [`/career/${result.id}`, `/careers`, `/admin/${result.id}`, `/admin/view/${result.id}`];

    // const revalidationResponse = await fetch('/api/revalidate', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ paths: pathsToRevalidate }),
    // });
  };

  return (
    <div className="container max-w-5xl mx-auto h-full px-6 py-8 min-h-[90vh] flex flex-col justify-center">
      {result && <CreateResponse message={result.message} />}

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormAction(new FormData(e.target as HTMLFormElement));
        }}
      >
        {/* Title Input */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Location Input */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Type Input */}
        <div className="flex flex-col">
          <label htmlFor="type" className="text-sm font-medium text-gray-700">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Quill Description Editor */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          {/* Only render QuillEditor after the initial render */}
          <div ref={quillRef} id="ql-container ql-snow editor" className="text-md" style={{ height: '300px', border: '1px solid #ccc', borderRadius: '4px' }}></div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
