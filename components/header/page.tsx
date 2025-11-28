"use client";
import { applyFetch } from "@/utils/fetchers/fetchData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [applyEnabled, setApplyEnabled] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const fetchApplyStatus = async () => {
      const result = await applyFetch();
      setApplyEnabled(result?.apply_enabled ?? false);
    };
    fetchApplyStatus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // always show at very top
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else {
        const diff = currentScrollY - lastScrollY.current;

        // scrolling down -> hide
        if (diff > 5) {
          setShowHeader(false);
          setOpen(false);
        }
        // scrolling up -> show
        else if (diff < -5) {
          setShowHeader(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        flex justify-between items-center py-6 px-20 font-bold 
        bg-white sticky top-0 z-50 shadow-sm
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <Link href="/" className="text-lg" prefetch={false}>
        SPECIAL PEOPLE GROUP
      </Link>

      {/* <Link href="/" className="text-lg flex gap-x-1.5" prefetch={false}>
        <div><span className="text-red-700">S</span>PECIAL</div>
        <div><span className="text-red-700">P</span>EOPLE</div>
        <div><span className="text-red-700">G</span>ROUP</div>
      </Link> */}

      <div className="flex items-center">
        <Link href="/" className="hover:underline underline-offset-4 mx-5" prefetch={false}>
          HOME
        </Link>

        <div className="relative">
          <div
            className="cursor-pointer mx-5 flex group"
            onClick={() => setOpen((prev) => !prev)}
          >
            SERVICES
            <div className="transition-all duration-300 ml-1 h-fill flex items-center">
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  open
                    ? "rotate-180 group-hover:-translate-y-1"
                    : "rotate-0 group-hover:translate-y-1"
                }`}
              />
            </div>
          </div>

          {/* popup div */}
          <div
            className={`
              absolute w-full top-10 z-50 rounded-b-lg shadow-lg
              flex flex-col text-center overflow-hidden
              transition-all duration-300 bg-white
              ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-7 pointer-events-none"}
            `}
          >
            <Link
              onClick={() => setOpen(false)}
              href="/logistics"
              className="hover:underline underline-offset-4 py-2"
            >
              Logistics
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/compound"
              className="hover:underline underline-offset-4 py-2"
            >
              Compound
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/it"
              className="hover:underline underline-offset-4 py-2"
            >
              IT
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/agency"
              className="hover:underline underline-offset-4 py-2"
            >
              Agency
            </Link>
          </div>
        </div>

        <Link href="/careers" className="mx-5 hover:underline underline-offset-4" prefetch={false}>
          CAREERS
        </Link>
        <Link href="/npo" className="mx-5 hover:underline underline-offset-4" prefetch={false}>
          NPO
        </Link>
        <Link href="/contactus" className="mx-5 hover:underline underline-offset-4" prefetch={false}>
          CONTACT US
        </Link>

        {applyEnabled && (
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6VPi1X9eUg_kfgmRuec0tBvFvs0ZFdw4f6637Hb8St1IeJw/viewform"
            target="_blank"
            prefetch={false}
            className="ml-25 bg-green-700 rounded-md text-[var(--background-grey)] px-4 py-3 hover:underline hover:bg-green-600 underline-offset-4"
          >
            APPLY
          </Link>
        )}
      </div>
    </div>
  );
}
