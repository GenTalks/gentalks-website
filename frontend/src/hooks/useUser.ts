import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";

type ProfileSelect = {
  name: string;
  role: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ProfileSelect | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const u = sessionData?.session?.user ?? null;
      setUser(u);

      if (u) {
        const { data, error } = await supabase
          .from("profiles")
          .select("name, role")
          .eq("id", u.id)
          .single();

        setProfile(data as ProfileSelect | null);
      }

      setLoading(false);
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      setProfile(null); // clear profile on logout
      setLoading(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return { user, profile, loading };
}
