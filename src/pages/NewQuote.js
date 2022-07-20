import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const onAddQuote = (quote) => {
    console.log(quote);
  }
  return <QuoteForm onAddQuote = {onAddQuote}/>
};

export default NewQuote;