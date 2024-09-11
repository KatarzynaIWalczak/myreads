import { formatBookDetails } from "../utils/helpers";

const BookDetails = ({ open, onClose, bookDetails }) => {
  if (!open) return null;
  const entries = Object.entries(formatBookDetails(bookDetails));

  return (
    <div className="overlay">
      <div className="modal">
        <table border="1">
          <tbody data-testid="table-body">
            {entries.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="close-button"
          data-testid="close-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
