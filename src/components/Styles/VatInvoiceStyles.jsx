import { StyleSheet } from "@react-pdf/renderer";

export const vatStyles = StyleSheet.create({
  page: {
    padding: 15,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  container: {
    border: "1px solid #000000",
    width: "100%",
  },
  mainTitle: {
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    padding: 8,
    fontWeight: "bold",
    fontSize: 12,
  },
  blueRectangle: {
    backgroundColor: "#00468b",
    height: 12,
    width: "100%",
  },
  companyLogoSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "flex-start",
  },
  companyLogoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  companyLogo: {
    width: 30,
    height: 25,
    marginRight: 0,
  },
  companyInfo: {
    fontSize: 8,
    lineHeight: 1.2,
  },
  invoiceNumber: {
    textAlign: "right",
    position: "relative",
  },
  invoiceNumberMain: {
    color: "#00468b",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "absolute",
    top: 15,
    right: 0,
    fontSize: 12,
  },
  invoiceNumberText: {
    color: "red",
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 9,
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
  },
  dateSection: {
    display: "flex",
    flexDirection: "row",
  },
  dateBox: {
    border: "1px solid #ddd",
    padding: 4,
    width: 120,
    marginLeft: 5,
  },
  checkboxSection: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 10,
    height: 10,
    border: "1px solid #000",
    marginRight: 4,
  },
  soldToSection: {
    border: "1px solid #ddd",
    padding: 8,
  },
  soldToContainer: {
    display: "flex",
    flexDirection: "column",
  },
  soldToHeader: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  soldToContent: {
    display: "flex",
    flexDirection: "column",
  },
  soldToRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 4,
  },
  soldToLabel: {
    fontWeight: "bold",
    width: 120,
  },
  soldToValue: {
    borderBottom: "1px solid #ddd",
    flex: 1,
    paddingBottom: 4,
  },
  invoiceTable: {
    width: "100%",
    border: "1px solid #ddd",
    borderCollapse: "collapse",
    marginTop: 8,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #ddd",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    padding: 6,
    border: "1px solid #ddd",
    flex: 1,
    fontSize: 8,
  },
  tableCell: {
    padding: 6,
    border: "1px solid #ddd",
    flex: 1,
    minHeight: 25,
    fontSize: 8,
  },
  financialSection: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  financialColumn: {
    flex: 1,
    marginRight: 4,
  },
  financialTable: {
    border: "1px solid #ddd",
    width: "100%",
  },
  financialRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #ddd",
  },
  financialCell: {
    padding: 6,
    border: "1px solid #ddd",
    flex: 1,
    fontSize: 8,
  },
  financialCellLeft: {
    textAlign: "left",
  },
  financialCellRight: {
    textAlign: "right",
  },
  receiveAmountSection: {
    border: "1px solid #ddd",
    padding: 8,
    marginTop: 4,
  },
  receiveAmountLine: {
    borderBottom: "1px solid #000",
    height: 20,
    marginTop: 4,
  },
  soloParentSection: {
    display: "flex",
    flexDirection: "column",
    marginTop: 4,
  },
  soloParentRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },
  soloParentLabel: {
    flex: 1,
    padding: 6,
    fontSize: 8,
  },
  soloParentBox: {
    flex: 2,
    border: "1px solid #ddd",
    height: 30,
  },
  footerSection: {
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    marginTop: 8,
  },
  footerPermit: {
    flex: 1,
    paddingRight: 8,
    fontSize: 8,
  },
  sampleFormatSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    border: "1px solid #ddd",
    marginTop: 8,
  },
  sampleFormatCell: {
    border: "1px solid #ddd",
    padding: 8,
    flex: "0 0 50%",
    boxSizing: "border-box",
    fontSize: 8,
  },
});
