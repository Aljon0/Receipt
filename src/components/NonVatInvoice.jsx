/*eslint-disable no-unused-vars*/
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { nonVatStyles } from "./Styles/NonVatInvoiceStyles";

const NonVatInvoicePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={nonVatStyles.page}>
      <View style={nonVatStyles.invoiceContainer}>
        {/* Invoice Header - Now split into two sections */}
        <View style={nonVatStyles.invoiceHeader}>
          {/* Top part with company info and invoice details */}
          <View style={nonVatStyles.topHeader}>
            <View style={nonVatStyles.companyInfo}>
              <View style={nonVatStyles.logo}>
                <Image src="R12.jpg" style={nonVatStyles.logo} />
              </View>
              <View style={nonVatStyles.companyDetails}>
                <Text style={nonVatStyles.companyName}>
                  ICS ICT SUPPORT SERVICES CORP.
                </Text>
                <Text>
                  Bldg. 19A Berthaphil I Compound, J. Abad Santos Avenue
                </Text>
                <Text>CSEZ, Clark Field, Angeles City, Philippines</Text>
                <Text>Telephone No. (045) 499-1257</Text>
                <Text>NON VAT REGISTERED TIN 006-724-950-00000</Text>
              </View>
            </View>
            <View style={nonVatStyles.invoiceDetails}>
              <Text style={nonVatStyles.invoiceTitle}>SALES INVOICE</Text>
              <Text style={nonVatStyles.invoiceNumber}></Text>
              <View style={nonVatStyles.invoiceInfoRow}>
                <Text style={nonVatStyles.invoiceInfoLabel}>DATE:</Text>
                <Text style={nonVatStyles.invoiceInfoValue}></Text>
              </View>
              <View style={nonVatStyles.invoiceInfoRow}>
                <Text style={nonVatStyles.invoiceInfoLabel}>
                  PURCHASE ORDER:
                </Text>
                <Text style={nonVatStyles.invoiceInfoValue}></Text>
              </View>
              <View style={nonVatStyles.invoiceInfoRow}>
                <Text style={nonVatStyles.invoiceInfoLabel}>REFERENCE NO:</Text>
                <Text style={nonVatStyles.invoiceInfoValue}>-</Text>
              </View>
              <View style={nonVatStyles.invoiceInfoRow}>
                <Text style={nonVatStyles.invoiceInfoLabel}>
                  SALES ORDER NO.:
                </Text>
                <Text style={nonVatStyles.invoiceInfoValue}></Text>
              </View>
              <View style={nonVatStyles.invoiceInfoRow}>
                <Text style={nonVatStyles.invoiceInfoLabel}>PAGE NO.:</Text>
                <Text style={nonVatStyles.invoiceInfoValue}>15000</Text>
              </View>
            </View>
          </View>

          {/* Customer Information - Below the company info */}
          <View style={nonVatStyles.customerInfo}>
            <View style={nonVatStyles.soldTo}>
              <Text style={nonVatStyles.infoTitle}>SOLD TO:</Text>
              <Text>SELINA KAION PHILIPPINES, INC</Text>
              <Text>TIN: 772156350000</Text>
              <Text>
                Address: Lot 3, 4, 5 Blk 5, Phase II Golden Gate BusinessPark,
              </Text>
              <Text>
                Cavite Export Processing Zone Buenavista II, General Trias
              </Text>
              <Text>Business Style:</Text>
            </View>
            <View style={nonVatStyles.shipTo}>
              <Text style={nonVatStyles.infoTitle}>SHIP TO:</Text>
              <Text>SELINA KAION PHILIPPINES, INC</Text>
              <Text>Lot 3, 4, 5 Blk 5, Phase II Golden Gate BusinessPark,</Text>
              <Text>
                Cavite Export Processing Zone Buenavista II, General Trias
              </Text>
              <Text>Cavite</Text>
            </View>
          </View>
        </View>

        {/* Contact Information */}
        <View style={nonVatStyles.contactsRow}>
          <View style={{ ...nonVatStyles.contactBox, marginRight: 5 }}>
            <Text style={nonVatStyles.infoTitle}>CONTACT PERSON</Text>
            <Text></Text>
          </View>
          <View style={{ ...nonVatStyles.contactBox, marginRight: 5 }}>
            <Text style={nonVatStyles.infoTitle}>SALESPERSON</Text>
            <Text></Text>
          </View>
          <View style={{ ...nonVatStyles.contactBox, marginRight: 5 }}>
            <Text style={nonVatStyles.infoTitle}>DUE DATE</Text>
            <Text></Text>
          </View>
          <View style={{ ...nonVatStyles.contactBox, marginRight: 0 }}>
            <Text style={nonVatStyles.infoTitle}>PAYMENT TERMS</Text>
            <Text></Text>
          </View>
        </View>

        {/* Invoice Items Table */}
        <View style={nonVatStyles.invoiceTable}>
          {/* Table Header */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={[nonVatStyles.tableHeader, { width: "10%" }]}>
              ITEM NO.
            </Text>
            <Text style={[nonVatStyles.tableHeader, { width: "50%" }]}>
              DESCRIPTION
            </Text>
            <Text style={[nonVatStyles.tableHeader, { width: "8%" }]}>QTY</Text>
            <Text style={[nonVatStyles.tableHeader, { width: "8%" }]}>UOM</Text>
            <Text style={[nonVatStyles.tableHeader, { width: "12%" }]}>
              UNIT PRICE
            </Text>
            <Text style={[nonVatStyles.tableHeader, { width: "12%" }]}>
              EXTENDED AMOUNT
            </Text>
          </View>

          {/* Table Rows */}
          {[1, 2, 3].map((row, index) => (
            <View
              key={index}
              style={[
                { display: "flex", flexDirection: "row" },
                index % 2 === 0 ? null : nonVatStyles.evenRow,
              ]}
            >
              <Text style={[nonVatStyles.tableCell, { width: "10%" }]}>
                {index === 0
                  ? "000001"
                  : index === 1
                  ? "000002"
                  : index === 2
                  ? "000003"
                  : ""}
              </Text>
              <Text style={[nonVatStyles.tableCell, { width: "50%" }]}>
                {index === 0
                  ? "CISCO CATALYST 2930 24-PORT GE, C2930-24PC-L (CISCO-C29-442)"
                  : index === 1
                  ? "AC POWER CORD, 250VAC (C13-C14PWR-AC)"
                  : index === 2
                  ? "CISCO 5YR SMART WARRANTY 24X7 CATAL 2K, C2930-SNT-5Y"
                  : ""}
              </Text>
              <Text style={[nonVatStyles.tableCell, { width: "8%" }]}>
                {index === 0 ? "1" : ""}
              </Text>
              <Text style={[nonVatStyles.tableCell, { width: "8%" }]}>
                {index === 0 ? "EA" : ""}
              </Text>
              <Text style={[nonVatStyles.tableCell, { width: "12%" }]}>
                {index === 0 ? "48,000.00" : ""}
              </Text>
              <Text style={[nonVatStyles.tableCell, { width: "12%" }]}>
                {index === 0 ? "48,000.00" : ""}
              </Text>
            </View>
          ))}

          {/* Special Instructions and Totals */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={[nonVatStyles.tableCell, { width: "76%", height: 40 }]}
            >
              <Text style={nonVatStyles.specialInstructionsTitle}>
                SPECIAL INSTRUCTIONS
              </Text>
              <Text style={nonVatStyles.specialInstructionsContent}></Text>
            </View>
            <Text
              style={[
                nonVatStyles.tableCell,
                { width: "12%", textAlign: "right", fontWeight: "bold" },
              ]}
            >
              TOTAL
            </Text>
            <Text
              style={[
                nonVatStyles.tableCell,
                { width: "12%", textAlign: "right" },
              ]}
            >
              48,000.00
            </Text>
          </View>
        </View>

        {/* Terms and Conditions - Condensed */}
        <View style={nonVatStyles.termsConditions}>
          <Text style={nonVatStyles.termsConditionsTitle}>
            TERMS AND CONDITIONS
          </Text>
          <View style={{ paddingLeft: 10 }}>
            <Text>THE TERMS AND CONDITIONS OF THIS SALE ARE AS FOLLOWS:</Text>
            <Text>1. THE PRICES HEREIN ARE BASED ON CASH PAYMENT.</Text>
            <Text>
              2. THIS INVOICE IS NOT VALID FOR CLAIMING INPUT TAX. P.D. OFFICE,
              CLARK FIELD, PAMPANGA.
            </Text>
            <Text>
              3. ALL ITEMS DELIVERED ARE CONDITIONAL SUBJECT TO AUTHORIZATION OF
              THE BUYER REPRESENTATIVE. INSPECTION PLATE BE MADE TO THE SELLER
              NOT LATER THAN 24 HOURS FROM RECEIPT/DELIVERY OF GOODS.
            </Text>
            <Text>
              4. TITLE TO THE GOODS WILL ONLY BE TRANSFERRED TO THE BUYER UPON
              RECEIPT OF FULL PAYMENT. SELLER RESERVES THE RIGHT TO REPOSSESS
              THE GOODS IF PAYMENT IS NOT RECEIVED WITHIN THE CREDIT TERM.
            </Text>
            <Text>
              5. WARRANTY PERIOD STARTS FROM THE DATE OF DELIVERY. THE COST OF
              REPAIR/REPLACEMENT UNDER WARRANTY MUST BE SHOULDERED BY THE BUYER.
            </Text>
            <Text>
              6. ATTORNEYS FEE OF NOT LESS THAN ONE-FIFTH OF THE TOTAL AMOUNT
              DUE SHALL BE PAID BY THE LOSING PARTY IN THE EVENT A COURT ACTION
              IS FILED BETWEEN THE PARTIES HERETO.
            </Text>
            <Text>
              7. NO DELIVERY, INSTALLATION, REFUND FOR CANCELLATION OF ORDERS
              MAY BE DONE WITHOUT THE PRIOR WRITTEN CONSENT OF THE SELLER.
            </Text>
            <Text>
              8. RECEIPT OF THE GOOD(S) COVERED BY THIS ORDER CONSTITUTES
              ACCEPTANCE OF THE GOODS EVEN THOUGH DESCRIPTION OR OTHER
              PARTICULARS OF THE GOODS DELIVERED MAY BE DIFFERENT FROM THOSE
              ORDERED.
            </Text>
            <Text>
              9. ALL CLAIMS FOR DEFECTIVE UNITS MUST BE MADE WITHIN 7 DAYS FROM
              RECEIPT OF GOODS.
            </Text>
            <Text>
              10. ALL CASH DISCOUNT OR SPECIAL ARRANGEMENT WILL BE MADE INTO THE
              CONSIDERATION OF THE SELLER - ICS ICT SUPPORT SERVICES CORP.
            </Text>
          </View>
        </View>

        {/* Payment Information */}
        <View style={nonVatStyles.paymentInfo}>
          <Text>
            PLEASE MAKE CHECK PAYABLE TO ICS ICT SUPPORT SERVICES CORP.
          </Text>
        </View>

        {/* Signatures - Modified to 3-column layout */}
        <View style={nonVatStyles.signatures}>
          {/* Left Column */}
          <View style={nonVatStyles.signatureCol}>
            <Text style={nonVatStyles.signatureText}>
              100 bklts. (50x4) 34001-39000 * RDO (021C)
            </Text>
            <Text style={nonVatStyles.signatureText}>
              BIR Authority to Print No. 21CAU20220000000011
            </Text>
            <Text style={nonVatStyles.signatureText}>
              Date Issue: 01-12-22 Valid until 01-11-2027
            </Text>
            <Text style={nonVatStyles.signatureText}>
              TRIKJANMAE PRINTING PRESS, Poblacion, Porac, Pamp.
            </Text>
            <Text style={nonVatStyles.signatureText}>
              TIN: 262-308-769-000 Non VAT
            </Text>
          </View>

          {/* Middle Column */}
          <View style={nonVatStyles.signatureCol}>
            <Text style={{ height: 40 }}></Text>
            <Text style={[nonVatStyles.signatureText, { textAlign: "center" }]}>
              Printer's Accreditation #{" "}
              <Text style={{ textDecoration: "underline" }}>
                21IAMP20180000000001
              </Text>
            </Text>
            <Text style={[nonVatStyles.signatureText, { textAlign: "center" }]}>
              Date issued:{" "}
              <Text style={{ textDecoration: "underline" }}>09-11-18</Text>
            </Text>
          </View>

          {/* Right Column */}
          <View style={nonVatStyles.signatureCol}>
            <Text style={nonVatStyles.signatureText}>
              Received the above goods and services in good order & condition.
            </Text>
            <Text style={{ height: 20 }}></Text>
            <Text style={nonVatStyles.signatureLine}></Text>
            <Text style={nonVatStyles.signatureLabel}>
              Customer's Signature Over Printed Name
            </Text>
          </View>
        </View>

        {/* Non-VAT Notice */}
        <Text style={nonVatStyles.nonVatNotice}>
          *THIS DOCUMENT IS NOT VALID FOR CLAIMING INPUT TAXES* THIS SALES
          INVOICE SHALL BE VALID FOR FIVE (5) YEARS FROM THE DATE OF ATP
        </Text>
      </View>
    </Page>
  </Document>
);

export const NonVatViewPDF = ({ data }) => {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <NonVatInvoicePDF data={data} />
    </PDFViewer>
  );
};

export const NonVatInvoiceGenerator = ({ data }) => {
  return (
    <PDFDownloadLink
      document={<NonVatInvoicePDF data={data} />}
      fileName={`non-vat-invoice-${data?.invoiceNumber || "0000"}.pdf`}
      className="download-link"
    >
      {({ loading }) =>
        loading ? "Loading NON-VAT Invoice..." : "Download NON-VAT Invoice"
      }
    </PDFDownloadLink>
  );
};

export default NonVatInvoicePDF;
