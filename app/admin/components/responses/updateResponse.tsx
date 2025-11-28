import Link from "next/link";

interface UpdateSuccessfullProps {
    message: string;
  }

export default function UpdateResponse({ message }: UpdateSuccessfullProps){
    return(
        <div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full bg-black/50">
            <div className="relative p-4 w-full max-w-md max-h-md -top-20">
                <div className="relative bg-white rounded-lg shadow p-4">
                    <div className="p-4 md:p-5 text-center">
                        <h3 className="mb-8 text-lg font-normal text-gray-900 dark:text-gray-900">{message}</h3>
                        <Link prefetch={false} href={`/admin`} data-modal-hide="popup-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Close
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}