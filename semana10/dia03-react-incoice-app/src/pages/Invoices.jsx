import Header from "../components/Header";
import InvoicesList from "../components/invoices/InvoicesList";

const Invoices = ({ invoices }) => {
  return (
    <>
      <Header title="Invoices"/>
      <InvoicesList invoices={invoices} />
    </>
  );
};

export default Invoices;
