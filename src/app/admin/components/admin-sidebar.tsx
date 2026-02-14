"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  FiGrid,
  FiMap,
  FiLayout,
  FiMonitor,
  FiUsers,
  FiLogOut,
  FiMenu,
  FiX,
  FiExternalLink,
} from "react-icons/fi";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  exact?: boolean;
  superAdminOnly?: boolean;
};

const navItems: NavItem[] = [
  { label: "Kontrol Paneli", href: "/admin", icon: FiGrid, exact: true },
  { label: "Tur Katalogu", href: "/admin/tours", icon: FiMap },
  { label: "Shell Icerikleri", href: "/admin/content/shell", icon: FiLayout },
  { label: "Landing Icerikleri", href: "/admin/content/landing", icon: FiMonitor },
  { label: "Kullanicilar", href: "/admin/users", icon: FiUsers, superAdminOnly: true },
];

type AdminSidebarProps = {
  user: {
    username: string;
    role: "SUPER_ADMIN" | "EDITOR";
    name?: string;
  };
};

export function AdminSidebar({ user }: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  const filteredItems = navItems.filter(
    (item) => !item.superAdminOnly || user.role === "SUPER_ADMIN",
  );

  const handleSignOut = () => {
    void signOut({ callbackUrl: "/admin/login" });
  };

  const displayName = user.name ?? user.username;

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="admin-mobile-toggle"
        onClick={() => setMobileOpen(true)}
        aria-label="Menu ac"
      >
        <FiMenu size={22} />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileOpen ? "admin-sidebar--open" : ""}`}>
        {/* Brand */}
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-logo">S</div>
          <div className="min-w-0 flex-1">
            <p className="admin-sidebar-brand-name">Sukur Turizm</p>
            <p className="admin-sidebar-brand-sub">Yonetim Paneli</p>
          </div>
          <button
            className="admin-sidebar-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Menu kapat"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="admin-sidebar-nav">
          <p className="admin-sidebar-section-label">Menu</p>
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`admin-sidebar-link ${active ? "admin-sidebar-link--active" : ""}`}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="admin-sidebar-bottom">
          <Link
            href="/"
            className="admin-sidebar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink size={18} />
            <span>Siteyi Gor</span>
          </Link>

          {/* User card */}
          <div className="admin-sidebar-user">
            <div className="admin-sidebar-avatar">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="admin-sidebar-user-info">
              <p className="admin-sidebar-user-name">{displayName}</p>
              <p className="admin-sidebar-user-role">
                {user.role === "SUPER_ADMIN" ? "Super Admin" : "Editor"}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="admin-sidebar-logout"
              title="Cikis Yap"
            >
              <FiLogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
