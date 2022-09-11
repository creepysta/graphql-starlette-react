import { useQuery, gql } from "@apollo/client";


const EXCHANGE_RATES = gql`
    query getBooks {
        title
        author
    }
`;


function ExchangeRatePage() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <div>{loading}</div>;
  }


  if (error) {
    console.log({error});
    return <div>ERROR </div>;
  }


  return data.rates.map( ({ title, author } : {title:any, author: any}) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));

}


export default ExchangeRatePage;
