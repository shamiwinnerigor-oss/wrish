import { supabase } from "./supabase";

export async function signUp(
  email: string,
  password: string,
  username: string
) {
  // CREATE AUTH USER
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error);
    return { error };
  }

  // CHECK USER EXISTS
  if (!data.user) {
    return {
      error: {
        message: "User not created",
      },
    };
  }

  // INSERT PROFILE
  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: data.user.id,
      username,
      email,
    });

  if (profileError) {
    console.log(profileError);

    return {
      error: profileError,
    };
  }

  return {
    data,
    error: null,
  };
}

export async function signIn(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}