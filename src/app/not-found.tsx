import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px", background: "#f7f7f4" }}>
      <div style={{ maxWidth: 440, textAlign: "center" }}>
        <div style={{ display: "inline-grid", placeItems: "center", width: 52, height: 52, borderRadius: 17, background: "#c9f269", marginBottom: 22 }}>
          <MessageCircle size={25} />
        </div>
        <p style={{ color: "#63834a", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" }}>A small detour</p>
        <h1 style={{ margin: "12px 0", fontSize: 42, letterSpacing: "-.06em" }}>This page is still a mystery.</h1>
        <p style={{ color: "#6d736e", lineHeight: 1.8 }}>That conversation hasn't started yet. Head back to Talkwise and keep following your curiosity.</p>
        <Link href="/" className="button" style={{ marginTop: 20 }}><ArrowLeft size={16} /> Back to Talkwise</Link>
      </div>
    </main>
  );
}
