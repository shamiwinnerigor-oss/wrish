import { supabase } from "@/lib/supabase";

export async function getUserRole() {

  const { data: userData } = await supabase.auth.getUser();

  const userId = userData?.user?.id;

  if (!userId) return null;

  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  return data?.role || "normal_user";
}