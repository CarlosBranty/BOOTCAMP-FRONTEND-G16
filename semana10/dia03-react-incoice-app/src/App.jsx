import { useEffect, useState } from "react";
import { fetchInvoices } from "./services/invoices";
import Invoices from "./pages/Invoices";

export default function App() {
  const [invoices, setInvoices] = useState([]);
 

  useEffect(() => {
    
    fetchInvoices()
    .then((invoices)=>setInvoices(invoices))
  }, []);
  return (
    <>
      <Invoices invoices={invoices}/>
      {/* {JSON.stringify(invoices)} */}
    </>
  );
}
