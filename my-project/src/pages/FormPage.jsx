import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";

const FormPage = () => {
  const { setUser } = useUser();
  const [form, setForm] = useState({ name: "", email: "", admission: "" });
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.admission) {
      toast.error("All fields are required!");
      return;
    }
    if (!validateEmail(form.email)) {
      toast.error("Invalid email!");
      return;
    }

    setUser(form);
    toast.success("Form submitted! Start quiz 🎉");
    navigate("/quiz");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 w-96 space-y-4">
        <h1 className="text-2xl font-bold text-center">Enter Your Details</h1>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Admission No"
          className="w-full p-2 border rounded"
          value={form.admission}
          onChange={(e) => setForm({ ...form, admission: e.target.value })}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default FormPage;
