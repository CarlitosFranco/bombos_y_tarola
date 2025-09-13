import { useState } from "react";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "success", "error", ""

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xjkezpgz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
      <p className="mb-6">Recibe noticias de nuevos vinilos y ofertas exclusivas.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          required
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Suscribirme
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">¡Gracias por suscribirte! 🎉</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">Hubo un error. Intenta otra vez.</p>
      )}
    </section>
  );
};

export default Formulario;
