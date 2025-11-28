import { Suspense } from "react";
import CareerList from "./careerList";
import Link from "next/link";

export default async function CareersPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    return (
        <div className="bg-[var(--background-lightGrey)]">
            {/* Hero section */}
            <div className="flex justify-center items-center w-full text-center h-[150px] bg-[var(--dark-background)]">
                <div className="w-full text-[var(--background-lightGrey)]">
                <h1 className="lg:text-3xl text-32xl font-bold">Job List</h1>
                <h2 className="text-lg">See your BIG opportunity from SPG</h2>
                </div>
            </div>

            {/* Suspense wrapper for careers list */}
            <Suspense fallback={<div className="text-3xl min-h-[60vh] flex items-center justify-center">Loading...</div>}>
                <CareerList currentPage={currentPage} />
            </Suspense>


            {/* At SPG */} 
            <div className="py-10" style={{backgroundImage: "url('images/career/careerv2.webp')", backgroundSize: 'cover', backgroundPosition: 'right'}}> 
                <div className="max-w-7xl mx-auto py-18 text-[var(--dark-text)]"> 
                    <div className="text-center mb-10"> 
                        <p className="font-bold text-3xl">At SPG AGENCY,</p> 
                        <p className="font-bold text-xl mb-8">Your Passion Drives Tomorrow.</p> 
                        <p className="mb-6"> We are not just a workplace.<br/> 
                            Here, your efforts are valued and your hard work makes a real impact.<br/> 
                            Every day, you'll experience growh, achievement, and the power of making a difference.<br/> 
                        </p> 
                        <p className="mb-6"> At SPG AGENCY, we thrive on dedication and ambition.<br/> 
                            This is the place where meaningful challenges and new opportunities begin.<br/> 
                        </p> 
                        <p className="mb-6"> Ready for your next bing opportunity?<br/> Join us and be a part of shaping tomorrow. </p> 
                    </div> 
                    <div className="flex justify-center"> 
                        <Link href="https://forms.gle/ecyJc2nKpc9PG6xv5" target="_blank" 
                        className="font-semibold bg-[var(--dark-background)] text-[var(--text-light)] px-6 py-3 rounded-lg hover:bg-[#b8b8b8] transition-colors duration-300" 
                        prefetch={false}> APPLY NOW </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}
