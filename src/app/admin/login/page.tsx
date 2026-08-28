"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const router = useRouter(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  async function signIn(e:FormEvent){ e.preventDefault(); setLoading(true); setError(""); const {error}=await createClient().auth.signInWithPassword({email,password}); if(error){setError(error.message);setLoading(false);return;} router.push("/admin"); router.refresh(); }
  return <main className="min-h-screen bg-beige-light grid place-items-center px-4"><form onSubmit={signIn} className="w-full max-w-md bg-white rounded-3xl p-8 shadow-[var(--shadow-card-hover)] border border-border"><div className="w-14 h-14 rounded-2xl bg-primary text-white grid place-items-center mb-6"><LockKeyhole/></div><p className="text-sm text-primary font-semibold mb-2">MFP FOOD PRODUCT</p><h1 className="font-heading text-3xl font-bold text-dark mb-2">Admin login</h1><p className="text-medium-gray text-sm mb-7">Sign in to manage products, prices, and stock.</p><label className="block text-sm font-medium text-dark mb-2">Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="w-full rounded-xl border border-border bg-white px-4 py-3 mb-5 outline-none focus:border-primary"/><label className="block text-sm font-medium text-dark mb-2">Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none focus:border-primary"/>{error&&<p className="text-red-600 text-sm mt-4">{error}</p>}<button disabled={loading} className="w-full mt-6 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl">{loading?"Signing in…":"Sign in"}</button></form></main>;
}
