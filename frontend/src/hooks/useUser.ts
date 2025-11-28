import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";

type Profile = {
  name: string;
  role: string;
  biography: string | null;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getSession();
      const u = data.session?.user ?? null;

      setUser(u);

      if (u) {
        const { data: p, error } = await supabase
          .from("profiles")
          .select("name, role, biography")
          .eq("id", u.id)
          .single();

        console.log("🟣 Profile data returned:", p);
        console.log("🔴 Profile error (if any):", error);

        setProfile(p ?? null);
      }

      setLoading(false);
    };

    load();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("🟡 Auth state changed:", event, session);

        const u = session?.user ?? null;
        setUser(u);

        if (!u) {
          console.log("🔻 User logged out, clearing profile.");
          setProfile(null);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return { user, profile, loading };
}
