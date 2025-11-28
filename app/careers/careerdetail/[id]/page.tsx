import { DetailedCareer } from "@/utils/fetchers/fetchData";
import { notFound } from "next/navigation";

export default async function PositionDetails({ params }: { params: Promise<{ id: string }> }){ 
   const resolvedParams = await params; // Resolve the promise to get the object
    const careerID = Number(resolvedParams.id);

    const career = await DetailedCareer(careerID);

    if(!career){ return notFound();}

    return(
        <div className="flex flex-wrap justify-center min-h-screen lg:pb-20 pb-10" key={careerID}>
            <div className="container max-w-5xl">
                <div className="lg:mt-20 mt-10 lg:mx-0 mx-8">
                    <p className="text-3xl font-semibold">{career?.title}</p>
                    <p className="text-lg text-[var(--text-dark)]/60 mt-1">{career?.location} | {career?.created_at ? new Date(career?.created_at).toISOString().slice(0,10).replace("T", "") : "No publish date available"}</p>
                    <hr className="my-6 border-black border-1"></hr>
                    <div>
                        <div className="text-lg text-gray-700 ql-editor" dangerouslySetInnerHTML={{__html: career?.description || ''}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}