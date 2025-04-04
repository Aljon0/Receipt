/* eslint-disable no-unused-vars */
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
import { vatStyles } from "./Styles/VATInvoiceStyles";

// Checkbox component
const Checkbox = () => <View style={vatStyles.checkbox} />;

const VatInvoicePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={vatStyles.page}>
      <View style={vatStyles.container}>
        {/* Main Title */}
        <View style={vatStyles.mainTitle}>
          <Text>VAT INVOICE</Text>
        </View>

        {/* Blue Rectangle */}
        <View style={vatStyles.blueRectangle} />

        {/* Company Info and Invoice Number */}
        <View style={vatStyles.companyLogoSection}>
          <View style={vatStyles.companyLogoContainer}>
            <Image src="/R12.jpg" style={vatStyles.companyLogo} />
            <View style={vatStyles.companyInfo}>
              <Text>EMS PHILS., INC.</Text>
              <Text>New Block 1 Lot 4 & 5 Calamba Premiere</Text>
              <Text>
                International Park, Brgy. Batino, Calamba City, Laguna 4027
              </Text>
              <Text>Tel. No. (049) 530-0461 local 110</Text>
              <Text>VAT TIN: 123-456-789-000000</Text>
            </View>
          </View>

          <View style={vatStyles.invoiceNumber}>
            <Text style={vatStyles.invoiceNumberText}>Invoice No: 5000001</Text>
            <Text style={vatStyles.invoiceNumberMain}>INVOICE</Text>
          </View>
        </View>

        {/* Rest of the code remains the same */}
        {/* Header Row with Checkboxes and Date */}
        <View style={vatStyles.headerRow}>
          <View style={vatStyles.checkboxSection}>
            <View style={vatStyles.checkboxGroup}>
              <Checkbox />
              <Text>CASH SALES</Text>
            </View>
            <View style={vatStyles.checkboxGroup}>
              <Checkbox />
              <Text>CHARGE SALES</Text>
            </View>
          </View>

          <View style={vatStyles.dateSection}>
            <View style={vatStyles.dateBox}>
              <Text>Date</Text>
            </View>
          </View>
        </View>

        {/* Sold To Section */}
        <View style={vatStyles.soldToSection}>
          <View style={vatStyles.soldToContainer}>
            <Text style={vatStyles.soldToHeader}>SOLD TO:</Text>

            <View style={vatStyles.soldToContent}>
              <View style={vatStyles.soldToRow}>
                <Text style={vatStyles.soldToLabel}>Registered Name:</Text>
                <Text style={vatStyles.soldToValue}></Text>
              </View>

              <View style={vatStyles.soldToRow}>
                <Text style={vatStyles.soldToLabel}>TIN:</Text>
                <Text style={vatStyles.soldToValue}></Text>
              </View>

              <View style={vatStyles.soldToRow}>
                <Text style={vatStyles.soldToLabel}>Business Address:</Text>
                <Text style={vatStyles.soldToValue}></Text>
              </View>
            </View>
          </View>
        </View>

        {/* Invoice Table */}
        <View style={vatStyles.invoiceTable}>
          {/* Table Header */}
          <View style={vatStyles.tableRow}>
            <Text style={vatStyles.tableHeader}>Item Description</Text>
            <Text style={vatStyles.tableHeader}>Quantity</Text>
            <Text style={vatStyles.tableHeader}>Unit Cost</Text>
            <Text style={vatStyles.tableHeader}>Amount</Text>
          </View>

          {/* Table Rows */}
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={vatStyles.tableRow}>
              <Text style={vatStyles.tableCell}></Text>
              <Text style={vatStyles.tableCell}></Text>
              <Text style={vatStyles.tableCell}></Text>
              <Text style={vatStyles.tableCell}></Text>
            </View>
          ))}
        </View>

        {/* Financial Section */}
        <View style={vatStyles.financialSection}>
          {/* Left Column */}
          <View style={vatStyles.financialColumn}>
            <View style={vatStyles.financialTable}>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  VAT Total Sales:
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  Zero-Rated Sales:
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  VAT Exempt Sales:
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
            </View>

            <View style={vatStyles.receiveAmountSection}>
              <View style={vatStyles.checkboxGroup}>
                <Checkbox />
                <Text>Receive the amount of</Text>
              </View>
              <View style={vatStyles.receiveAmountLine}></View>
              <Text>{data?.receivedAmount || ""}</Text>
            </View>
          </View>

          {/* Right Column */}
          <View style={vatStyles.financialColumn}>
            <View style={vatStyles.financialTable}>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  Total Sales:
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  Less: VAT
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  Amount Net of VAT:
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  Less: Discount
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  Less: Withholding Tax
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
              <View style={vatStyles.financialRow}>
                <Text
                  style={[vatStyles.financialCell, vatStyles.financialCellLeft]}
                >
                  TOTAL AMOUNT DUE:
                </Text>
                <Text
                  style={[
                    vatStyles.financialCell,
                    vatStyles.financialCellRight,
                  ]}
                ></Text>
              </View>
            </View>

            <View style={vatStyles.soloParentSection}>
              <View style={vatStyles.soloParentRow}>
                <Text style={vatStyles.soloParentLabel}>
                  Solo Parent ID No.
                </Text>
                <View style={vatStyles.soloParentBox}></View>
              </View>
              <View style={vatStyles.soloParentRow}>
                <Text style={vatStyles.soloParentLabel}>Signature</Text>
                <View style={vatStyles.soloParentBox}></View>
              </View>
            </View>
          </View>
        </View>

        {/* Footer Section */}
        <View style={vatStyles.footerSection}>
          <View style={vatStyles.footerPermit}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>PERMIT TO LODGE</Text>
            </Text>
            <Text>Example: Text Here</Text>
          </View>
        </View>

        {/* Sample Format Section */}
        <View style={vatStyles.sampleFormatSection}>
          <View style={vatStyles.sampleFormatCell}>
            <Text>Example Text Here</Text>
          </View>
          <View style={vatStyles.sampleFormatCell}>
            <Text>Example Text Here</Text>
          </View>
          <View style={vatStyles.sampleFormatCell}>
            <Text>Example Text Here</Text>
          </View>
          <View style={vatStyles.sampleFormatCell}>
            <Text>Example Text Here</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export const VatViewPDF = ({ data }) => {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <VatInvoicePDF data={data} />
    </PDFViewer>
  );
};

export const VatInvoiceGenerator = ({ data }) => {
  return (
    <PDFDownloadLink
      document={<VatInvoicePDF data={data} />}
      fileName={`vat-invoice-${data.invoiceNumber || "0000"}.pdf`}
      className="download-link"
    >
      {({ loading }) =>
        loading ? "Loading VAT Invoice..." : "Download VAT Invoice"
      }
    </PDFDownloadLink>
  );
};
