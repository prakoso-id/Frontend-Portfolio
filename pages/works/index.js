import Header from '../../components/header2'
import Partikel from '../../components/particles-back'
import WorkList from '../../components/WorkList'


export default function Works(props) {
    const {datablog} = props;
  return (
    <div className="from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
      <Header ></Header>
      <WorkList data={datablog} />
      <Partikel className="z-0"></Partikel>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  var datablog = [];
  const res = await fetch(`http://localhost:4000/api/portfolio`)
  .then(response => {
      if (response) {
      return response.json() 
        
      } else {
        throw 'There is something wrong';
      }
    }).
    catch(error => {
        if(error.code === 'ECONNREFUSED'){
          return 'ECONNREFUSED'
        }
    });
    if(res !== 'ECONNREFUSED' ){
      datablog = res.response;
    }
  //   const datablog = await res.json()


  // Pass data to the page via props
  return { 
    props: { datablog } }
}
