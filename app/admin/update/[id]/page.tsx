'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import { FetchDetailedCareers } from "../../utils/fetches/fetchCareer";
import { updatePost } from "./action";
import { Careers } from '@/utils/entities/careers';
import UpdateResponse from '../../components/responses/updateResponse';

export default function UpdatePage() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id'));

  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [data, setData] = useState<Careers | null>(null);
  const [loading, setLoading] = useState(true);
  
  const quillRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchDetailedCareers({id: Number(id)});
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    setIsClient(true); // Set to true once client-side rendering has finished
  }, []);

  useEffect(() => {
    if (isClient && quillRef.current && !quillInstance.current) {
      // Check if Quill is already initialized
      const { default: Quill } = require("quill"); // Dynamically import Quill
      quillInstance.current = new Quill(quillRef.current, {
        theme: "snow",
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
  
      // Set the Quill editor content if description is available
      if (data?.description) {
        quillInstance.current.root.innerHTML = data.description;
      }
    }
  }, [isClient, data]); // Ensure this runs when 'data' is available

  if (loading) return <div className="text-center text-3xl">Loading...</div>;
  if (data === null) return <div>Details Not Found.</div>;

  const handleFormAction = async (formData: FormData): Promise<void> => {
    const quillContent = quillInstance.current?.root.innerHTML; // Get the content as HTML
    formData.append('description', quillContent || ''); // Append the Delta content (or use getText() for plain text)

    const careerData: Careers = {
      id: data.id,
      title: formData.get('title') as string,
      location: formData.get('location') as string,
      type: formData.get('type') as string,
      description: formData.get('description') as string,
      updated_at: new Date(),
    };

    const resultData = await updatePost(careerData);
    setResult(resultData);

    const pathsToRevalidate = [`/career/${id}`, `/careers`, `/admin/${id}`, `/admin/view/${id}`];

    const revalidationResponse = await fetch('/api/revalidate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paths: pathsToRevalidate }),
    });
  };

  return (
    <div className="container max-w-5xl mx-auto min-h-[78vh] h-full px-6 py-8">
      {result && <UpdateResponse message={result.message} />}
      
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
            defaultValue={data.title}
            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
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
            defaultValue={data.location}
            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
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
            defaultValue={data.type}
            className="px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Quill Description Editor */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <div ref={quillRef} id="editor ql-container ql-snow" 
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            style={{ height: '300px', border: '1px solid #ccc', borderRadius: '4px' }}
          ></div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
}
