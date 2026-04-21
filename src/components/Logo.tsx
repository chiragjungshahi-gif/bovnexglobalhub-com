import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img src={logo} alt="Bovnex Global Hub" className="h-10 w-10 object-contain" />
      <div className="leading-tight">
        <div
          className={`font-serif text-lg tracking-wide ${
            variant === "light" ? "text-white" : "text-navy"
          }`}
        >
          BOVNEX
        </div>
        <div
          className={`text-[10px] tracking-[0.2em] uppercase ${
            variant === "light" ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Global Hub
        </div>
      </div>
    </Link>
  );
}
