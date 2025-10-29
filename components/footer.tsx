import { CONTENT_MAX_WIDTH } from "@/lib/layout"

export default function Footer() {
  return (
    <footer className="bg-[#1a1632] text-white py-8 border-t border-[#2C2449]">
      <div className={CONTENT_MAX_WIDTH}>
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} <span className="font-bold text-white">Tared Ltd</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
