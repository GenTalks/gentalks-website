import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

type ProfileSelect = {
  name: string;
  role: string;
};

export function useUser() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<ProfileSelect | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const loadProfile = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("name, role")
        .eq("id", user.id)
        .single();

      setProfile(data as ProfileSelect | null);
      setLoading(false);
    };

    loadProfile();
  }, [user, authLoading]);

  return { user, profile, loading };
}
