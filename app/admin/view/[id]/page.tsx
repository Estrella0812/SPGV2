import { DetailedCareer } from "@/utils/fetchers/fetchData";
import Link from "next/link";
import DeleteComp from "../../components/responses/deleteComp";
import { notFound } from "next/navigation";

export default async function PositionDetails({ params }: { params: Promise<{ id: string }> }){   
    const resolvedParams = await params; // Resolve the promise to get the object
    const careerID = Number(resolvedParams.id);

    const career = await DetailedCareer(careerID);

    if(!career){ return notFound();}
    
    return(
        <div className="flex flex-wrap justify-center min-h-screen lg:mb-20 mb-10" key={careerID}>
            <div className="container max-w-5xl">
                <div className="lg:mt-20 mt-10 lg:mx-0 mx-8">
                    <>
                        <div className="flex justify-between">
                            <p className="text-3xl">{career?.title}</p>
                            <div className="grid lg:grid-cols-2 gap-4">
                                <Link href={{
                                    pathname: `/admin/update/${career.id}`,
                                    query: {
                                    id: career?.id.toString()
                                    },}}  
                                    prefetch={false}
                                    className=" text-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                                >Edit</Link>
                                <DeleteComp title={career?.title} id={career?.id} />
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 mt-1">{career?.location} | {career?.created_at ? new Date(career?.created_at).toISOString().slice(0,10).replace("T", "") : "No publish date available"}</p>
                        <hr className="my-6 border-black border-1"></hr>
                        <div>
                            <div className="text-gray-700 ql-editor" dangerouslySetInnerHTML={{__html: career?.description || ''}}></div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}