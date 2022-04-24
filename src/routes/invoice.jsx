import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    return (
        <main style={{paddingLeft: "1rem"}}>
            <h2>Invoice #{params.invoiceId}</h2>
            <h3>{invoice.name}</h3>
            <p>Total due: {invoice.amount}</p>
            <p>Due Date: {invoice.due} </p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search)
                    }}>Delete</button>
            </p>

        </main>
    )
}