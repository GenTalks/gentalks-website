import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";

type Profile = {
  name: string;
  role: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      // console.log("🔵 Fetching session...");
      const { data } = await supabase.auth.getSession();
      const u = data.session?.user ?? null;

      // console.log("🟢 Session user:", u);
      setUser(u);

      if (u) {
        // console.log("🔵 Fetching profile for user id:", u.id);

        const { data: p, error } = await supabase
          .from("profiles")
          .select("name, role")
          .eq("id", u.id)
          .single();

        console.log("🟣 Profile data returned:", p);
        console.log("🔴 Profile error (if any):", error);

        setProfile(p ?? null);
      } else {
        // console.log("⚠️ No user found in session.");
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
