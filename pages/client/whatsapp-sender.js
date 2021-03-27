import { useState } from "react";
import ClientHeader from "./components/clientHeader";

const WhatsAppSender = () => {
  const [clientName, setClientName] = useState("Nama Kamu");
  const [template, setTemplate] = useState("");

  const [recipientName, setRecipientName] = useState("Nama Penerima");
  const [recipientNumber, setRecipientNumber] = useState(6282192477848);

  const messageTemplate = (clientName, recipientName) => {
    return `Hai ${recipientName}, dapat undangan dari ${clientName}`;
  };

  return (
    <div className="bg-gray-200 md:h-screen">
      {/* <ClientHeader /> */}
      <section className="px-36 pt-36">
        <div className="w-1/2">
          <div className="mb-6">
            <div className="mb-1">
              <label>Pilih Template</label>
            </div>
            <select className="bg-gray-50 p-2 w-full">
              <option disabled>Pilih salah satu</option>
              <option value="template-1">Template 1</option>
              <option value="tenplate-2">Template 2</option>
            </select>
          </div>
          <div>
            <div className="mb-1">
              <label>Preview</label>
            </div>
            <textarea
              value={messageTemplate(clientName, recipientName)}
              disabled
              className="bg-gray-100 p-3 w-full h-56 border border-gray-300 outline-none"
            />
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default WhatsAppSender;
