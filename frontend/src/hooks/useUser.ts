import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user ?? null);
            setLoading(false);
        };

        loadUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();

    }, []);

    return { user, loading };
}