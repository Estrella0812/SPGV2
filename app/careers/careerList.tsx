import Link from "next/link";
import { FetchCareerList, FetchCareerRows } from "@/utils/fetchers/fetchData";

export default async function CareerList({ currentPage }: { currentPage: number }) {
  const careers = await FetchCareerList(currentPage);
  const totalPages = await FetchCareerRows();

  return (
    <div className="max-w-7xl mx-auto py-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        {/* First column */}
        <div className="flex flex-col gap-y-4">
          {careers.slice(0, 5).map((career) => (
            <Link
              prefetch={false}
              href={`/careers/careerdetail/${career.id}`}
              className="border-[var(--text-dark)] border-1 p-4 flex justify-between"
              key={career.id}
            >
              <div>
                <div className="underline">{career.title}</div>
                <div className="font-bold mb-4">{career.location}</div>
                <div className="text-zinc-500 italic">
                  {career.created_at?.toString().slice(0, 10)}
                  {career.type && `, ${career.type}`}
                </div>
              </div>
              <div className="flex items-center text-xl">❯</div>
            </Link>
          ))}
        </div>

        {/* Second column */}
        <div className="flex flex-col gap-y-4">
          {careers.slice(5, 10).map((career) => (
            <Link
              prefetch={false}
              href={`/careers/careerdetail/${career.id}`}
              className="border-[var(--text-dark)] border-1 p-4 flex justify-between"
              key={career.id}
            >
              <div>
                <div className="underline">{career.title}</div>
                <div className="font-bold mb-4">{career.location}</div>
                <div className="text-zinc-500 italic">
                  {career.created_at?.toString().slice(0, 10)}
                  {career.type && `, ${career.type}`}
                </div>
              </div>
              <div className="flex items-center text-xl">❯</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages && totalPages > 10 && (
        <div className="flex justify-center mt-10 gap-x-10">
          {currentPage > 1 && (
            <Link
              prefetch={false}
              href={{ pathname: "/careers", query: { page: currentPage - 1 } }}
              className="bg-zinc-800 rounded-full h-8 w-8 text-white flex justify-center items-center font-bold"
            >
              ❮
            </Link>
          )}
          <div className="text-sm flex items-center">{currentPage}</div>
          {currentPage * 10 < totalPages && (
            <Link
              prefetch={false}
              href={{ pathname: "/careers", query: { page: currentPage + 1 } }}
              className="bg-zinc-800 rounded-full h-8 w-8 text-white flex justify-center items-center font-bold"
            >
              ❯
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
