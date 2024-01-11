// pages/index.js
"use client";
export default function Home() {
  const handleRegistration = async () => {
    try {
      const formData = new FormData();
      formData.append("attendance", "true");
    
      const response = await fetch("/api/confirmation", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        console.error("Registration failed:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Test Registration</h1>
      <button onClick={handleRegistration} className="p-20 bg-white">
        Submit Registration
      </button>
    </div>
  );
}
