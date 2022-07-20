import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const onAddQuote = (quote) => {
    console.log(quote);
    history.push('/quotes');
    history.replace('/quotes');
  }
  return <QuoteForm onAddQuote = {onAddQuote}/>
};

export default NewQuote;