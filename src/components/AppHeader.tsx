import { Link, useRouterState } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import logoAsset from "@/assets/logo.jpg.asset.json";
const logo = logoAsset.url;

export function AppHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isDash = pathname === "/";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-[var(--header-bg)] backdrop-blur print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Aahar Jeevan home">
          <img src={logo} alt="Aahar Jeevan" width={44} height={44} className="h-11 w-11 rounded-md object-contain" />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" label="Home" active={isDash} />
          <NavLink to="/clients" label="Client List" active={pathname.startsWith("/clients")} />
          <NavLink to="/catalogue" label="Food Catalogue" active={pathname.startsWith("/catalogue")} />
        </nav>
        <button
          aria-label="External link"
          className="rounded-md p-2 text-muted-foreground hover:bg-muted"
        >
          <ExternalLink className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={
        "relative px-3 py-2 text-sm font-medium transition-colors sm:text-base " +
        (active
          ? "text-[var(--dark-green)]"
          : "text-[var(--dark-green)]/70 hover:text-[var(--dark-green)]")
      }
    >
      {label}
      {active && (
        <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[var(--primary-orange)]" />
      )}
    </Link>
  );
}