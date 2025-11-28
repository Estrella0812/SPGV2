'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { FetchCareerList } from '@/utils/fetchers/fetchData';
import { signOut } from "./components/signoutBtn";
import { applyFetch, toggleApplyStatus } from "./components/applyFetch";

export default function AdminPage(){
    const [careers, setCareers] = useState<any[]>([]);
    const [applyEnabled, setApplyEnabled] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
    let isMounted = true;

    const init = async () => {
        try {
        const [applyResult, careerData] = await Promise.all([
            applyFetch(),
            FetchCareerList(1),
        ]);

        if (!isMounted) return;

        setApplyEnabled(applyResult?.apply_enabled ?? false);

        if (careerData) {
            setCareers(careerData);
        } else {
            console.error("Failed to fetch data");
        }
        } catch (err) {
        console.error("Error during initial fetch", err);
        }
    };

    init();

    return () => {
        isMounted = false;
    };
    }, []);

    const handleToggle = async () => {
        if (applyEnabled === null) return;
        setLoading(true);
        const updated = await toggleApplyStatus(applyEnabled);
        if (updated !== null) {
          setApplyEnabled(updated);
        }
        setLoading(false);
    };


    
    if(!careers){
        return <div>Failed to fetch data</div>
    }
    
    return(
        <>
        <div className="container max-w-5xl mx-auto h-full px-6 py-8 min-h-[85vh]">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                    <Link href="/admin/create" className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-800 transition" prefetch={false}>Create Post</Link>
                        <button
                            onClick={handleToggle}
                            className={`ml-2 rounded-md px-4 py-3 hover:underline underline-offset-4 transition-colors cursor-pointer
                                ${applyEnabled === null ? "bg-gray-400 text-white" : ""}
                                ${applyEnabled === true ? "bg-green-700 text-[var(--background-grey)]" : ""}
                                ${applyEnabled === false ? "bg-red-600 text-white opacity-60" : ""}
                            `}
                            >
                            {loading ? "Updating..." : applyEnabled ? "Apply ✅" : "Apply ❌"}
                        </button>
                </div>
                <button className="bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 transition" onClick={() => signOut()}>Sign Out</button>
            </div>
            <div className="bg-white rounded-lg shadow-md ring-1 ring-black/5">
                {careers.map((career) => (
                    <Link key={career.id} href={`/admin/view/${career.id}`} prefetch={false}>
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <div className="w-3/5">
                        <h3 className="text-lg font-medium text-gray-900">{career.title}</h3>
                        <p className="text-sm text-gray-500">{career.created_at ? new Date(career.created_at).toISOString().slice(0,10).replace("T", "") : "No publish date available"}</p>
                        <p className="text-sm text-gray-500">{career.location}</p>
                        </div>
                        <div className="flex grid lg:grid-cols-2 gap-4 grid-cols-1"></div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

