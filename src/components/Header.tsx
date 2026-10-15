"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-links">
                    <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                    <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
                </div>
                <div className="nav-actions">
                    <button id="theme-toggle" aria-label="Toggle theme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}