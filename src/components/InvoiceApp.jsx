/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { VatInvoiceGenerator, VatViewPDF } from "./VatInvoice";
import { NonVatInvoiceGenerator } from "./NonVatInvoice";
import { Client, Databases, ID } from "appwrite";
import { NonVatViewPDF } from "./NonVatInvoice";

// Appwrite Configuration
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("your-project-id");

const databases = new Databases(client);

// Sample Invoice Data
const defaultNonVatInvoiceData = {
  type: "NON-VAT",
  invoiceNumber: "500001",
  customerName: "John Doe Company",
  customerAddress: "123 Business Street, City, Country",
  tin: "12-3456789",
  items: [
    {
      description: "Consulting Services",
      quantity: 2,
      unitPrice: 500,
      amount: 1000,
    },
    {
      description: "Software Development",
      quantity: 1,
      unitPrice: 2500,
      amount: 2500,
    },
  ],
  totalSales: 3500,
  totalAmountDue: 3500,
};

const defaultVatInvoiceData = {
  type: "VAT",
  invoiceNumber: "500001",
  customerName: "John Doe Company",
  customerAddress: "123 Business Street, City, Country",
  tin: "12-3456789",
  items: [
    {
      description: "Consulting Services",
      quantity: 2,
      unitPrice: 500,
      amount: 1000,
    },
    {
      description: "Software Development",
      quantity: 1,
      unitPrice: 2500,
      amount: 2500,
    },
  ],
  totalSales: 3500,
  vatRate: 0.15,
  vat: 525,
  totalAmountDue: 4025,
};

const InvoiceApp = () => {
  const [invoiceType, setInvoiceType] = useState("VAT");
  const [invoiceData, setInvoiceData] = useState(defaultVatInvoiceData);
  const [showViewer, setShowViewer] = useState(false);

  const handleSaveToAppwrite = async () => {
    try {
      const response = await databases.createDocument(
        "your-database-id",
        "invoices-collection-id",
        ID.unique(),
        invoiceData
      );
      alert("Invoice saved successfully!");
    } catch (error) {
      console.error("Error saving invoice:", error);
      alert("Failed to save invoice");
    }
  };

  const handleInvoiceTypeChange = (type) => {
    setInvoiceType(type);
    setInvoiceData(
      type === "VAT" ? defaultVatInvoiceData : defaultNonVatInvoiceData
    );
  };

  const handleView = () => {
    setShowViewer(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Invoice Generator</h1>

      {/* Invoice Type Selector */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => handleInvoiceTypeChange("VAT")}
          className={`px-4 py-2 mr-2 ${
            invoiceType === "VAT" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          VAT Invoice
        </button>
        <button
          onClick={() => handleInvoiceTypeChange("NON-VAT")}
          className={`px-4 py-2 ${
            invoiceType === "NON-VAT" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          NON-VAT Invoice
        </button>
      </div>

      {/* Preview Invoice Data */}
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Invoice Details</h2>
        <p>Invoice Number: {invoiceData.invoiceNumber}</p>
        <p>Customer: {invoiceData.customerName}</p>
        <p>Total Amount: ${invoiceData.totalAmountDue.toFixed(2)}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 justify-center">
        {invoiceType === "VAT" ? (
          <VatInvoiceGenerator data={invoiceData} />
        ) : (
          <NonVatInvoiceGenerator data={invoiceData} />
        )}

        <button
          onClick={handleSaveToAppwrite}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Save to Appwrite
        </button>

        <button
          onClick={handleView}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          View
        </button>
      </div>

      {/* PDF Viewer */}
      {showViewer && (
        <div className="mt-6 flex justify-center">
          <div
            style={{ width: "80%", height: "90vh", border: "1px solid #ccc" }}
          >
            {invoiceType === "VAT" ? (
              <VatViewPDF data={invoiceData} />
            ) : (
              <NonVatViewPDF data={invoiceData} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceApp;
