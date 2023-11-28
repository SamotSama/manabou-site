"use client";

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef('halejandrorosa@gmail.com');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida el correo electrónico
    if (!email.length) {
      toast.error("El campo de correo electrónico es obligatorio.", {
        position: "bottom-center",
        autoClose: 3000, // Cierra automáticamente después de 3 segundos
        hideProgressBar: false,
      });
      return;
    }

    const emailValido = emailjs.validate(emailRef.current.value);

    if (!emailValido) {
      toast.error("El correo electrónico no es válido.",{
        position: "bottom-center",
        autoClose: 3000, // Cierra automáticamente después de 3 segundos
        hideProgressBar: false,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_17zwi4v",
        "template_u8pkdxn",
        e.target,
        "hJilfEXQCwkscV2Cv"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Lógica adicional después de enviar el formulario
        },
        (error) => {
          console.log(error.text);
          // Lógica adicional en caso de error
        }
      );

    // Restablecer el campo de correo electrónico después de enviarlo
    setEmail("");
    toast.success("¡Gracias por suscribirte a nuestro newsletter!", {
      position: "bottom-center",
      autoClose: 3000, // Cierra automáticamente después de 3 segundos
      hideProgressBar: false,
    });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <ToastContainer />
        <p className="text-2xl font-semibold text-gray-700 mb-4">
          ¡Ingresá tu email para recibir novedades!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex text-gray-700 justify-center ">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="border-red-600 border-2 text-gray-700 p-2 rounded-l shadow-lg shadow-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-red-600 text-white px-4 rounded-r hover:scale-105 duration-1000 shadow-lg shadow-gray-700"
              type="submit"
            >
              Inscribite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
